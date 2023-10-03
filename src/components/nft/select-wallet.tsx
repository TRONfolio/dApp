/* eslint-disable react-hooks/exhaustive-deps */
import Image from '@/components/ui/image';
import metamaskLogo from '@/assets/images/metamask.svg';
import { WalletContext } from '@/lib/hooks/use-connect';
import { useModal } from '@/components/modal-views/context';
import { useContext, useEffect, useState } from 'react';
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';

export default function SelectWallet({ ...props }) {
  const { address, connectToWallet, error, checkConnection } =
    useContext(WalletContext);
  const { closeModal } = useModal();
  const [isConnected, setIsConnected] = useState(false);
  const {
    wallet,
    // address,
    connected,
    select,
    connect,
    disconnect,
    signMessage,
    signTransaction,
  } = useWallet();

  useEffect(() => {
    async function checkTronConnection() {
      if (!window.tronLink.ready) return;

      const isConnected = window.tronLink.ready;
      setIsConnected(isConnected);
    }
    checkConnection();
    checkTronConnection();
  }, []);

  //checkTronConnection()

  useEffect(() => {
    if (address) closeModal();
  }, [address, closeModal]);

  return (
    <div
      className="relative z-50 mx-auto w-[440px] max-w-full rounded-lg bg-white px-9 py-16 dark:bg-light-dark"
      {...props}
    >
      <button type="button" onClick={() => select('TronLink Adapter' as any)}>
        {' '}
        Select TronLink
      </button>

      <h2 className="mb-4 text-center text-2xl font-medium uppercase text-gray-900 dark:text-white">
        Connect Wallet
      </h2>
      <p className="text-center text-sm leading-loose tracking-tight text-gray-600 dark:text-gray-400">
        By connecting your wallet, you agree to our Terms of Service and our
        Privacy Policy.
      </p>

      <div
        className="mt-12 flex h-14 w-full cursor-pointer items-center justify-between rounded-lg bg-gradient-to-l from-[#ffdc24] to-[#ff5c00] px-4 text-base text-white transition-all hover:-translate-y-0.5"
        onClick={() => console.log(useWallet)}
      >
        {!isConnected ? <span>Tronlink</span> : 'Connected'}
        <span className="h-auto w-9">
          {/* <Image
            src="/Users/user/Desktop/tron.png
"
            alt="tronlink"
            width={36}
            height={72}
          /> */}
        </span>
        <div> I am truly : {isConnected ? 'conected' : 'not Connected'}</div>
      </div>

      {error && (
        <p className="mt-3 text-center text-xs text-red-500">
          Please install Tronlink plugin in your browser in order to connect
          wallet.
        </p>
      )}
    </div>
  );
}
