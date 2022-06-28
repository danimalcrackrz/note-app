import { RecoilRoot } from "recoil"
import "../styles/globals.css"
import "../styles/Sidebar.scss"
import "../styles/Drawer.scss"
import "../styles/Note.scss"

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
