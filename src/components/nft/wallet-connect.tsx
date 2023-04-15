import cn from 'classnames';
import Button from '@/components/ui/button';
import { WalletContext } from '@/lib/hooks/use-connect';
import { Menu } from '@/components/ui/menu';
import { Transition } from '@/components/ui/transition';
import ActiveLink from '@/components/ui/links/active-link';
import { ChevronForward } from '@/components/icons/chevron-forward';
import { PowerIcon } from '@/components/icons/power';
import { useModal } from '@/components/modal-views/context';
import { useContext } from 'react';
import {
  WalletConnectWallet,
  WalletConnectChainID,
} from '@tronweb3/walletconnect-tron';
import Web3 from 'web3';
import { useState } from 'react';

export default function WalletConnect({
  btnClassName,
  anchorClassName,
}: {
  btnClassName?: string;
  anchorClassName?: string;
}) {
  // const { openModal } = useModal();
  // const { address, disconnectWallet, balance } = useContext(WalletContext);

  const [isConnected, setIsConnected] = useState(false);
  const [walletBalance, setWalletBalance] = useState('0');

  const connectMetamask = async () => {
    // Check if Metamask is available
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request access to Metamask
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create a web3 instance
        const web3 = new Web3(window.ethereum);

        // Get the current chain ID
        const chainId = await web3.eth.getChainId();

        // Check if connected to BitTorrent chain (chain ID: 100)
        if (chainId === 100) {
          console.log('Connected to BitTorrent chain');
          // Update Metamask connection status
          setIsConnected(true);

          // Retrieve wallet balance
          const accounts = await web3.eth.getAccounts();
          const balance = await web3.eth.getBalance(accounts[0]);
          // Convert wei to ether
          const balanceInEther = web3.utils.fromWei(balance, 'ether');
          // Update wallet balance state
          setWalletBalance(balanceInEther);
        } else {
          console.error('Please connect to BitTorrent chain');
        }
      } catch (error) {
        console.error('Failed to connect to Metamask', error);
      }
    } else {
      console.error('Metamask not detected');
    }
  };

  return (
    <>
      {isConnected ? (
        // <div>
        //   <button disabled>Connected</button>
        //   <p>Wallet balance: {walletBalance} ETH</p>
        // </div>
        <Button
          className={cn(
            'bg-[#E34234] shadow-main hover:shadow-large',
            btnClassName
          )}
        >
          CONNECTED
          {walletBalance}
        </Button>
      ) : (
        <Button
          onClick={connectMetamask}
          className={cn(
            'bg-[#E34234] shadow-main hover:shadow-large',
            btnClassName
          )}
        >
          CONNECT
        </Button>
      )}
    </>
  );
}
