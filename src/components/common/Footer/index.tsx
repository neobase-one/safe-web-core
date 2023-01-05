import type { SyntheticEvent, ReactElement } from 'react'
import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import css from './styles.module.css'
import { useAppDispatch } from '@/store'
import { openCookieBanner } from '@/store/popupSlice'
import { AppRoutes } from '@/config/routes'

const footerPages = [AppRoutes.welcome, AppRoutes.settings.index]

const Footer = (): ReactElement | null => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  if (!footerPages.some((path) => router.pathname.startsWith(path))) {
    return null
  }

  const onCookieClick = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(openCookieBanner({}))
  }

  return (
    <footer className={css.container}>
      <ul>
        <li>
          <Typography variant="caption">&copy;2022 Powered By NeoBase</Typography>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
