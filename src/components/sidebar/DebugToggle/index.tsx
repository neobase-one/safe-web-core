import { type ChangeEvent, type ReactElement } from 'react'
import { Box, FormControlLabel, Switch } from '@mui/material'
import { localItem } from '@/services/local-storage/local'
import useLocalStorage from '@/services/local-storage/useLocalStorage'
import { setDarkMode } from '@/store/settingsSlice'
import { useDarkMode } from '@/hooks/useDarkMode'
import { useAppDispatch } from '@/store'

const LS_KEY = 'debugProdCgw'

export const cgwDebugStorage = localItem<boolean>(LS_KEY)

const DebugToggle = (): ReactElement => {
  const dispatch = useAppDispatch()
  const isDarkMode = useDarkMode()

  const [isProdGateway = false, setIsProdGateway] = useLocalStorage<boolean>(LS_KEY)

  const onToggle = (event: ChangeEvent<HTMLInputElement>) => {
    setIsProdGateway(event.target.checked)

    setTimeout(() => {
      location.reload()
    }, 300)
  }

  return (
    <Box py={0} ml={2}>
      <FormControlLabel
        control={<Switch checked={isDarkMode} onChange={(_, checked) => dispatch(setDarkMode(checked))} />}
        label="Dark mode"
        // componentsProps={{ typography: { variant: 'body4' } }}
        componentsProps={{ typography: { variant: 'body1' } }}
      />
    </Box>
  )
}

export default DebugToggle
