import "@/styles/globals.css";
import "@/styles/style.css";
import "animate.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="page">
      <Component {...pageProps} />
    </div>
  );
}
