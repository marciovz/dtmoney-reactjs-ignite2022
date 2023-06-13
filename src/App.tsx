import { ThemeProvider } from "styled-components"

import { TransactionsProvider } from "./contexts/TransactionsContext"
import { Transaction } from "./pages/Transactions"
import { defaultTheme } from "./styles/themes/default"

import { GlobalStyle } from "./styles/global"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme} >
      <GlobalStyle />

      <TransactionsProvider>
        <Transaction />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
