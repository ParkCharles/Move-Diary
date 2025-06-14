import { useState, useEffect } from 'react'
import { useCurrentAccount } from '@mysten/dapp-kit'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { parseGpxData } from '@/utils/gpx'

dayjs.extend(utc)
dayjs.extend(timezone)

// Network Variable Hook
export function useNetworkVariable<T>(
  _mainnetValue: T,
  testnetValue: T
): T {
  // For now, always return testnet value since we're only using testnet
  return testnetValue
}

// Sui Wallet Hook
export function useSuiWallet() {
  const account = useCurrentAccount()
  const [isConnected, setIsConnected] = useState(false)
  
  useEffect(() => {
    setIsConnected(!!account)
    console.log('Wallet connection status:', !!account, account)
  }, [account])
  
  return {
    isConnected,
    account,
    walletAddress: account?.address
  }
}

// Device Detection Hook
export const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent
    const mobile = Boolean(
      userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
    )
    setIsMobile(mobile)
  }, [])

  return isMobile
}

export const useGpxUpload = (
  onSuccess: (data: {
    maxElevation: number
    date: dayjs.Dayjs
    startTime: string
    endTime: string
    duration: number
    totalDistance: number
    gpxFile: File
  }) => void
) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGpxUpload = async (file: File) => {
    try {
      setLoading(true)
      setError(null)
      console.log('Processing GPX file:', file.name, 'size:', file.size)
      
      const content = await file.text()
      console.log('File content loaded, length:', content.length)
      
      const gpxData = parseGpxData(content)
      console.log('GPX data parsed successfully:', gpxData)
      
      const startTime = dayjs(gpxData.startTime).tz('Asia/Seoul')
      const endTime = dayjs(gpxData.endTime).tz('Asia/Seoul')
      
      const data = {
        maxElevation: gpxData.maxElevation,
        date: startTime,
        startTime: startTime.format('HH:mm'),
        endTime: endTime.format('HH:mm'),
        duration: endTime.diff(startTime, 'minute'),
        totalDistance: gpxData.totalDistance,
        gpxFile: file,
      }
      
      console.log('Processed data:', data)
      onSuccess(data)
    } catch (error) {
      console.error('Error in handleGpxUpload:', error)
      setError('Failed to parse GPX file')
      throw error
    } finally {
      setLoading(false)
    }
  }

  return {
    handleGpxUpload,
    loading,
    error
  }
} 