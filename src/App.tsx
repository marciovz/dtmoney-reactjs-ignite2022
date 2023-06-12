import { ThemeProvider } from "styled-components"
import { Transaction } from "./pages/Transactions"
import { defaultTheme } from "./styles/themes/default"

import { GlobalStyle } from "./styles/global"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme} >
      <GlobalStyle />

      <Transaction />
    </ThemeProvider>
  )
}
