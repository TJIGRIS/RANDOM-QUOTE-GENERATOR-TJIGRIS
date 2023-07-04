import { useEffect, useState } from 'react'
import { QuotesAuthor } from '../services/APIS'

export function useQuoteAuthor({ quotesRandom }) {
  const [quotesAuthor, setQuotesAuthor] = useState([])
  const [load, setload] = useState(false)

  const getQuotesAuthor = async (author) => {
    try {
      setload(false)
      const results = await QuotesAuthor(author)
      setQuotesAuthor(results)
    } catch (e) {
      throw new Error('Error al recibir el autor')
    } finally {
      setload(true)
    }
  }

  useEffect(() => {
    getQuotesAuthor(quotesRandom[0]?.authorSlug)
  }, [quotesRandom])

  return { quotesAuthor, getQuotesAuthor, loadAuthor: load }
}
