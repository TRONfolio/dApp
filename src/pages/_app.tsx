import React from 'react';
//import { Helmet } from 'react-helmet';
import type { AppProps } from 'next/app';
import type { NextPageWithLayout } from '@/types';
// import { Fira_Code } from '@next/font/google';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import ModalsContainer from '@/components/modal-views/container';
import DrawersContainer from '@/components/drawer-views/container';
import SettingsButton from '@/components/settings/settings-button';
import SettingsDrawer from '@/components/settings/settings-drawer';
import { WalletProvider } from '@/lib/hooks/use-connect';
import 'overlayscrollbars/css/OverlayScrollbars.css';
// base css file
import 'swiper/css';
import '@/assets/css/scrollbar.css';
import '@/assets/css/globals.css';
import '@/assets/css/range-slider.css';
import Script from 'next/script';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// const firaCode = Fira_Code({
//   weight: ['400', '500', '700'],
//   style: ['normal'],
//   subsets: ['latin'],
//   variable: '--font-body',
// });

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  //could remove this if you don't need to page level layout
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        {/* maximum-scale 1 meta tag need to prevent ios input focus auto zooming */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <title>Bitfolio</title>
        <link rel="icon" href="/bitfolio-website-favicon-color.png" />
        {/* <Script src="https://just.money/assets/js/widgetLib-1.1.js"></Script> */}
        {/* <Helmet>
          <script src="https://just.money/assets/js/widgetLib-1.1.js"></Script>
          <script>
            {`
              JmApi.swapWidget('jmSwapFrame', {
                network: 'BTTC',
                slippage: 0.05,
                liquidityTab: true,
                shadow: false,
                backgroundColor: '#F3F3F3',
                backgroundImage: 'url(/assets/img/swap-form-bg-lighter.svg);',
                textColor: '#000',
                buttonStyle: 'background:#000;color:#FFF;',
                maxButtonStyle: 'background:#FFF;color:#000;',
                headingStyle: 'color:#353840;text-shadow:none',
                lightBranding: false,
                tokens: ['TRX', 'BTT'],
                fromToken: 'TRX',
                toToken: 'BTT',
              });
            `}
          </script>
        </Helmet> */}
      </Head>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
      >
        <WalletProvider>
          {/* <div className={`${firaCode.variable} font-body`}> */}
          {getLayout(<Component {...pageProps} />)}
          <SettingsButton />
          <SettingsDrawer />
          <ModalsContainer />
          <DrawersContainer />
          {/* </div> */}
        </WalletProvider>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
