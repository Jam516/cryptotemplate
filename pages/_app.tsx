import '../styles/global.css'
import type { AppProps } from 'next/app'
import { sepolia } from "wagmi/chains";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;
const walletConnectProjectId = process.env.WALLETCONNECT_PROJECT_ID;

const chains = [sepolia];

const config = createConfig(
  getDefaultConfig({
    alchemyId,
    walletConnectProjectId,
    chains,
    appName: "TipJar",
  }),
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default MyApp