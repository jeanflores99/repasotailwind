import "../styles/globals.css";
import 'react-slideshow-image/dist/styles.css'
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
