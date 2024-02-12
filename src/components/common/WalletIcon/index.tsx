import { Skeleton } from '@mui/material'
import type WALLET_KEYS from '@/hooks/wallets/wallets'

enum ADDITIONAL_KEYS {
  METAMASK = 'METAMASK',
}

export type ALL_WALLET_KEYS = typeof WALLET_KEYS & typeof ADDITIONAL_KEYS

// type Props = {
//   [k in keyof ALL_WALLET_KEYS]: string
// }

const WalletIcon = ({
  provider,
  width = 30,
  height = 30,
  icon,
}: {
  provider: string
  width?: number
  height?: number
  icon?: string
}) => {
  return icon ? (
    <img
      width={width}
      height={height}
      src={`data:image/svg+xml;utf8,${encodeURIComponent(icon)}`}
      alt={`${provider} logo`}
    />
  ) : (
    <Skeleton variant="circular" width={width} height={height} />
  )
}

export default WalletIcon
