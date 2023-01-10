import type { SyntheticEvent, ReactElement } from 'react'
import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import css from './styles.module.css'
import { useAppDispatch } from '@/store'
import { openCookieBanner } from '@/store/popupSlice'
//import { AppRoutes } from '@/config/routes'

// const footerPages = [AppRoutes.welcome]

const Footer = (): ReactElement | null => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  // Commented out if required we can remove footer from specific pages by adding in the above array
  // if (footerPages.some((path) => router.pathname.startsWith(path))) {
  //   return null
  // }

  const onCookieClick = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(openCookieBanner({}))
  }

  return (
    <footer className={css.container}>
      <ul>
        <li>
          <Typography variant="subtitle2" color="#06FC99">
            Powered By NeoBase
          </Typography>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
