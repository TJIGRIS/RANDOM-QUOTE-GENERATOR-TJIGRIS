import React from 'react'
import { NewQuote } from '../components/NewQuote'
import { useQuoteContext } from '../context/QuoteProvider'

export const ListQuotes = () => {
  const { quotesAuthor, loadAuthor } = useQuoteContext()

  return (
    <section className="grid place-content-center gap-[140px]">
      {loadAuthor ? (
        <>
          <h1 className="text-4xl font-bold ml-20">
            {quotesAuthor[0]?.author}
          </h1>
          {quotesAuthor.map((item) => (
            <NewQuote key={item._id} {...item} />
          ))}
        </>
      ) : (
        <h2 className="text-4xl font-bold ml-20">Loading...</h2>
      )}
    </section>
  )
}
