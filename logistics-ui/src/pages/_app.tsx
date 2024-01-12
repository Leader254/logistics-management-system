import { AppProps } from 'next/app'
import '@/styles/globals.css'
import { AppLayout } from '@/layouts'
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppCacheProvider { ...pageProps}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppCacheProvider>
  )
}

export default MyApp