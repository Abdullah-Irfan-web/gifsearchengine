import '@/styles/globals.css'

import { FavoriteContextProvider } from '../Fav';

export default function App({ Component, pageProps }) {
  return <FavoriteContextProvider> <Component {...pageProps} /> </FavoriteContextProvider>
}
