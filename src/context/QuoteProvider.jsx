import React, { createContext, useContext, useEffect, useState } from 'react'
import { useQuoteRandom } from '../hooks/useQuoteRandom'
import { useQuoteAuthor } from '../hooks/useQuoteAuthor'

const CreateContext = createContext()

export function useQuoteContext() {
  const context = useContext(CreateContext)

  if (context === undefined)
    throw new Error('Error, no se encontro QuoteProvider')

  return context
}

export function QuoteProvider({ children }) {
  const { quotesRandom, getQuotesRandom, loadRandom } = useQuoteRandom()
  const { quotesAuthor, getQuotesAuthor, loadAuthor } = useQuoteAuthor({
    quotesRandom
  })

  return (
    <CreateContext.Provider
      value={{
        quotesRandom,
        getQuotesRandom,
        loadRandom,
        quotesAuthor,
        getQuotesAuthor,
        loadAuthor
      }}
    >
      {children}
    </CreateContext.Provider>
  )
}
