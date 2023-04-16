import { Bitcoin } from '@/components/icons/bitcoin';
import { Tether } from '@/components/icons/tether';
import { Bnb } from '@/components/icons/bnb';
import { Cardano } from '@/components/icons/cardano';

export const walletCurrencies = [
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png',
    name: 'Bitcoin',
    code: 'BTC',
    volume: '+12.5%',
    color: '#F79517',
    isChangePositive: true,
  },
  {
    logo: 'https://seeklogo.com/images/T/tether-usdt-logo-FA55C7F397-seeklogo.com.png',
    name: 'Tether USD',
    code: 'USDT',
    volume: '-8.47%',
    color: '#259C77',
    isChangePositive: false,
  },
  {
    logo: 'https://logosenvector.com/logo/img/tron-cryptocurrency-4362.jpg',
    name: 'Tron',
    code: 'TRX',
    volume: '+5.63%',
    color: '#3468D1',
    isChangePositive: true,
  },
  {
    logo: 'https://cryptologos.cc/logos/bittorrent-bttold-logo.png',
    name: 'Bittorent',
    code: 'BTT',
    volume: '-3.02%',
    color: '#F3BA2F',
    isChangePositive: false,
  },
];
