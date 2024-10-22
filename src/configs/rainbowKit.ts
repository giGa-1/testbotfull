import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

const PROJECT_ID = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || 'ed422d784f4873b2bfd9a6e98f35b713';

export const rainbowConfig = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: PROJECT_ID,
    chains: [mainnet, polygon, optimism, arbitrum, base],
    transports: {
        [mainnet.id]: http(),
    },
});
