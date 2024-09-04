import { useEffect, useState } from 'react'
import { QuotesAuthor } from '../services/APIS'

export function useQuoteAuthor({ quotesRandom }) {
  const [quotesAuthor, setQuotesAuthor] = useState([])
  const [load, setLoad] = useState(false)

  const getQuotesAuthor = async (author) => {
    try {
      setLoad(false)
      const results = await QuotesAuthor(author)

      setQuotesAuthor(results)
    } catch (e) {
      throw new Error('Error al recibir el autor')
    } finally {
      setLoad(true)
    }
  }

  useEffect(() => {
    if (quotesRandom.length > 0) {
      getQuotesAuthor(quotesRandom[0]?.category)
    }
  }, [quotesRandom])

  return { quotesAuthor, getQuotesAuthor, loadAuthor: load }
}
