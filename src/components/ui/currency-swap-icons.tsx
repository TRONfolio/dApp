import { Bitcoin } from '@/components/icons/bitcoin';
import { Ethereum } from '@/components/icons/ethereum';
import { Tether } from '@/components/icons/tether';
import { Bnb } from '@/components/icons/bnb';
import { Usdc } from '@/components/icons/usdc';
import { Cardano } from '@/components/icons/cardano';
import { Doge } from '@/components/icons/doge';
import Image from 'next/image';

export type CoinList = 'BTT' | 'TRX' | 'USDT' | 'ETH';

const coinIcons: Record<CoinList, string> = {
  BTT: 'https://cryptologos.cc/logos/bittorrent-bttold-logo.png',
  ETH: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  USDT: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
  TRX: 'https://cryptologos.cc/logos/tron-trx-logo.png',
};

interface CurrencySwapIconsProps {
  from: CoinList;
  to: CoinList;
}

export default function CurrencySwapIcons({
  from,
  to,
}: CurrencySwapIconsProps) {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <div className="relative">
          <Image src={coinIcons[from]} alt="" width="20" height="20" />
        </div>
        <div className="ltr:-ml-1.5 rtl:-mr-1.5">
          <Image src={coinIcons[to]} alt="" width="20" height="20" />
        </div>
      </div>
      <div className="whitespace-nowrap text-sm font-medium uppercase text-black ltr:ml-3 rtl:mr-3 dark:text-white">
        {from}-{to}
      </div>
    </div>
  );
}
