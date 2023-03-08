import GlobalStyle from "@/styles/GlobalStyle"
import useFluid from "@/hooks/useFluid"

export default function App({ Component, pageProps }) {
  const { initFluid } = useFluid()
  initFluid()
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}
