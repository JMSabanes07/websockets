import { AppContext } from '/context/appContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  )
}

export default MyApp
