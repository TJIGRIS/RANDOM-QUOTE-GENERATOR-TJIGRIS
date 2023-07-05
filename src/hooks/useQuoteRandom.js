import { useEffect, useState } from 'react'
import { QuotesRandom } from '../services/APIS'

export function useQuoteRandom() {
  const [quotesRandom, setQuotesRandom] = useState([])
  const [load, setLoad] = useState(false)

  const getQuotesRandom = async () => {
    try {
      setLoad(false)
      const result = await QuotesRandom()
      setQuotesRandom(result)
    } catch (e) {
      throw new Error('Error al recibir la quote random')
    } finally {
      setLoad(true)
    }
  }

  useEffect(() => {
    getQuotesRandom()
  }, [])

  return { quotesRandom, getQuotesRandom, loadRandom: load }
}
