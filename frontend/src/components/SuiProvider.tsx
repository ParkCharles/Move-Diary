/**
 * Provides Sui blockchain connectivity and wallet integration for the application
 */
import type { ReactNode } from 'react'
import { WalletProvider, SuiClientProvider } from '@mysten/dapp-kit'
import { getFullnodeUrl } from '@mysten/sui/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const networks = {
  testnet: { url: getFullnodeUrl('testnet') },
  devnet: { url: getFullnodeUrl('devnet') },
  mainnet: { url: getFullnodeUrl('mainnet') }
}

const queryClient = new QueryClient()

export function SuiProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider 
        networks={networks} 
        defaultNetwork="testnet"
      >
        <WalletProvider 
          autoConnect
          preferredWallets={['Sui Wallet']}
          enableUnsafeBurner={false}
        >
          {children}
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  )
} 