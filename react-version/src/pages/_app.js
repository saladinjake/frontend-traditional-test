import AfricanTheme from '../styles/base'

import '../../public/css/app.css'
export default function App({ Component, pageProps }) {
  return (
    <>
      <AfricanTheme>
        <Component {...pageProps} />
      </AfricanTheme>
    </>
  )
}
