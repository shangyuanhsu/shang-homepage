import Layuot from '../components/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <Layuot>
      <Component {...pageProps} />
    </Layuot>
  )
}

export default MyApp
