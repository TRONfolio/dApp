import { useEffect, useState, createContext, ReactNode } from 'react';
import Web3Modal from 'web3modal';
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';

const web3modalStorageKey = 'WEB3_CONNECT_CACHED_PROVIDER';

export const WalletContext = createContext<any>({});
declare global {
  interface Window {
    tronWeb: any; // You can specify a more specific type if you have one
    tronLink: any;
  }
}

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [balance, setBalance] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  // const web3Modal =
  //   typeof window !== 'undefined' && new Web3Modal({ cacheProvider: true });

  /* This effect will fetch wallet address if user has already connected his/her wallet */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function checkConnection() {
    try {
      if (window.tronWeb /*&& window.tronWeb.defaultAddress.base58*/) {
        //console.log(window.tronWeb.tronLink);
        await window.tronLink.request({ method: 'tron_requestAccounts' });
        console.log('I am connected!!!');
        console.log(useWallet);

        await setWalletAddress();
      } else {
        console.log('window or window.ethereum is not available');
      }
    } catch (error) {
      console.log(error, 'Catch error Account is not connected');
    }
  }

  const setWalletAddress = async () => {
    try {
      const web3Address: string = window.tronWeb.defaultAddress.base58;
      setAddress(web3Address);
      getBalance(web3Address);
    } catch (error) {
      console.log(
        'Account not connected; logged from setWalletAddress function'
      );
    }
  };

  const getBalance = async (walletAddress: string) => {
    const walletBalance: string = await window.tronWeb.trx.getBalance(
      walletAddress
    );
    const balanceInEth = window.tronWeb.fromSun(walletBalance);
    setBalance(balanceInEth);
  };

  // const disconnectWallet = () => {
  //   setAddress(undefined);
  //   web3Modal && web3Modal.clearCachedProvider();
  // };

  // const checkIfExtensionIsAvailable = () => {
  //   if (
  //     (window && window.web3 === undefined) ||
  //     (window && window.ethereum === undefined)
  //   ) {
  //     setError(true);
  //     web3Modal && web3Modal.toggleModal();
  //   }
  // };

  // const connectToWallet = async () => {
  //   try {
  //     setLoading(true);
  //     checkIfExtensionIsAvailable();
  //     const connection = web3Modal && (await web3Modal.connect());
  //     const provider = new ethers.providers.Web3Provider(connection);
  //     await subscribeProvider(connection);

  //     setWalletAddress(provider);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(
  //       error,
  //       'got this error on connectToWallet catch block while connecting the wallet'
  //     );
  //   }
  // };

  // const subscribeProvider = async (connection: any) => {
  //   connection.on('close', () => {
  //     disconnectWallet();
  //   });
  //   connection.on('accountsChanged', async (accounts: string[]) => {
  //     if (accounts?.length) {
  //       setAddress(accounts[0]);
  //       const provider = new ethers.providers.Web3Provider(connection);
  //       getBalance(provider, accounts[0]);
  //     } else {
  //       disconnectWallet();
  //     }
  //   });
  // };

  return (
    <WalletContext.Provider
      value={{
        address,
        balance,
        loading,
        error,
        checkConnection,
        getBalance,
        setWalletAddress,
        // disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
