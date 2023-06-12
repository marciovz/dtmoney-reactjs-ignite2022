import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transaction() {
  return (
  <div>
    <Header />
    <Summary />


    <TransactionsContainer>
      <SearchForm />

      <TransactionsTable>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Vendas</td>
            <td>13/04/2022</td>
          </tr>

          <tr>
            <td width="50%">Hamburger</td>
            <td>
              <PriceHighlight variant="outcome"> -R$ 59,00</PriceHighlight>
            </td>
            <td>alimentação</td>
            <td>10/04/2022</td>
          </tr>

          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
            <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Vendas</td>
            <td>13/04/2022</td>
          </tr>                        
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>

  </div>
  )
}