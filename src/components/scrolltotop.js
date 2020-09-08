import { useEffect } from "react"
import { useLocation } from "@reach/router"

export const ScrollToTop = ({ children, location }) => {
  React.useLayoutEffect(() => window.scrollTo(0, 0), [location.pathname])
  return children
}
