import { Bitcoin } from '@/components/icons/bitcoin';
import { Ethereum } from '@/components/icons/ethereum';
import { Tether } from '@/components/icons/tether';
import { Bnb } from '@/components/icons/bnb';
import { Usdc } from '@/components/icons/usdc';
import { Cardano } from '@/components/icons/cardano';
import { Doge } from '@/components/icons/doge';

export const TopTokensData = [
  {
    icon: <Bitcoin />,
    code: 'BTC',
    name: 'Bitcoin',
    volume: '256.5M',
  },
  {
    icon: <Ethereum />,
    code: 'ETH',
    name: 'Ethereum',
    volume: '740.7M',
  },
  {
    icon: <Tether />,
    code: 'USDT',
    name: 'Tether USD',
    volume: '566.2M',
  },
  {
    icon: <Bnb />,
    code: 'BNB',
    name: 'Binance Coin',
    volume: '396.4M',
  },
  {
    icon: <Usdc />,
    code: 'USDC',
    name: 'USD Coin',
    volume: '145.1M',
  },
  {
    icon: <Cardano />,
    code: 'ADA',
    name: 'Cardano',
    volume: '267.3M',
  },
  {
    icon: <Doge />,
    code: 'DOGE',
    name: 'Doge Coin',
    volume: '421.9M',
  },
];

export const TopPoolsData = [
  {
    from: 'BTT',
    to: 'TRX',
    volume: '48.90%',
  },
  {
    from: 'ETH',
    to: 'BTT',
    volume: '55.98%',
  },
  {
    from: 'USDT',
    to: 'BTT',
    volume: '51.54%',
  },
];
