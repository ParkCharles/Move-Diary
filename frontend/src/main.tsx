/**
 * Application entry point with provider configurations
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './App'
import { SuiProvider } from './components/SuiProvider'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import '@mysten/dapp-kit/dist/index.css'

document.title = 'Shall We Move'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SuiProvider>
          <RouterProvider router={router} />
        </SuiProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>
)
