const URL_AUTHOR = 'https://api.quotable.io/quotes?author='
const RANDOM_URL = 'https://api.quotable.io/quotes/random'

export const QuotesAuthor = async (author) => {
  try {
    const result = await fetch(URL_AUTHOR + author)
    const data = await result.json()
    const { results } = data
    return results
  } catch (e) {
    throw new Error('Error al buscar el autor')
  }
}

export const QuotesRandom = async () => {
  try {
    const result = await fetch(RANDOM_URL)
    const data = await result.json()
    return data
  } catch (e) {
    throw new Error('Error al buscar quote random')
  }
}
