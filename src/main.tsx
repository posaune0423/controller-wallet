import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import cartridgeConnector from './libs/cartridgeController'
import { StarknetConfig, voyager } from '@starknet-react/core'
import { RpcProvider } from 'starknet'
import { mainnet } from '@starknet-react/chains'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('React root not found')

const root = createRoot(rootElement as HTMLElement)

const main = async () => {
  return (
    <StrictMode>
      <StarknetConfig
        chains={[mainnet]}
        provider={() => new RpcProvider({ nodeUrl: import.meta.env.VITE_RPC_MAINNET })}
        connectors={[cartridgeConnector]}
        explorer={voyager}
        autoConnect
      >
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, Component }, i) => (
              <Route key={i} path={path} element={<Component />} />
            ))}
          </Routes>
        </BrowserRouter>
      </StarknetConfig>
    </StrictMode>
  )
}

root.render(await main())
