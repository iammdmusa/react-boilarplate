import { AppProps } from "next/app";
import "../../styles/index.css";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
