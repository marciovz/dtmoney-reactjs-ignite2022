import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer } from "./styles";

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit, formState } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  const { isSubmitting } = formState

  function handleSearchTransactions(data: SearchFormInputs) {
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="busque por transações" 
        {...register('query')}  
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
      </button>
    </SearchFormContainer>
  )
}
