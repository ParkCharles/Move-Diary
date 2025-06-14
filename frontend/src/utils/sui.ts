/**
 * Utility functions for creating and handling Sui blockchain transactions
 */
import { Transaction } from '@mysten/sui/transactions'
import dayjs from 'dayjs'
import { getFullnodeUrl } from '@mysten/sui/client'

export const NETWORKS = {
  testnet: {
    url: getFullnodeUrl('testnet'),
    explorer: 'https://suiexplorer.com/txblock'
  }
}

export const createMintNftTransaction = async (
  location: string,
  description: string,
  imageUrl: string,
  participants: number,
  maxElevation: number,
  duration: number,
  date: number,
  startTime: number,
  endTime: number
) => {
  if (participants > 65535) throw new Error('Participants count exceeds u16 max value')
  if (maxElevation > 65535) throw new Error('Max elevation exceeds u16 max value')
  if (duration > 65535) throw new Error('Duration exceeds u16 max value')

  const formattedDate = dayjs.unix(date).format('YYYY-MM-DD')
  const formattedStartTime = dayjs.unix(startTime).format('HH:mm')
  const formattedEndTime = dayjs.unix(endTime).format('HH:mm')

  const tx = new Transaction()
  
  tx.moveCall({
    target: `${import.meta.env.VITE_PACKAGE_ID}::shallwemove::mint`,
    arguments: [
      tx.pure.string(location),
      tx.pure.string(description),
      tx.pure.string(imageUrl),
      tx.pure.u16(participants),
      tx.pure.u16(maxElevation),
      tx.pure.u16(duration),
      tx.pure.string(formattedDate),
      tx.pure.string(formattedStartTime),
      tx.pure.string(formattedEndTime)
    ]
  })

  return tx
}

export const formatAddress = (address: string) => {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

/**
 * Gets the explorer URL for a transaction
 */
export function getExplorerUrl(objectId: string): string {
  return `${NETWORKS.testnet.explorer}/${objectId}?network=testnet`
} 