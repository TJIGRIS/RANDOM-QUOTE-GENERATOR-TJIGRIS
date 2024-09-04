import React from 'react'
import { NewQuote } from '../components/NewQuote'
import { ButtonAutor } from '../components/ButtonAutor'

import { useQuoteContext } from '../context/QuoteProvider'

export const Quote = () => {
  const { quotesRandom, loadRandom } = useQuoteContext()

  return (
    <main className='grid place-items-center h-[calc(100vh-150px)]'>
      {loadRandom ? (
        <section className='flex flex-col gap-24'>
          {quotesRandom.map((item) => (
            <div key={item.author}>
              <NewQuote {...item} />
              <ButtonAutor {...item} />
            </div>
          ))}
        </section>
      ) : (
        <section className='flex flex-col gap-24'>
          <h2 className='text-4xl font-bold ml-20'>Loading...</h2>
        </section>
      )}
    </main>
  )
}
