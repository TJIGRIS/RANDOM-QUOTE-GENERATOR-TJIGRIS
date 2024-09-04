const URL_CATEGORY = 'https://api.api-ninjas.com/v1/quotes?category='
const RANDOM_URL = 'https://api.api-ninjas.com/v1/quotes'

const API_KEY = 'aPPH20xExYQxKugrQPqFYQ==yxKbqWJNk9VwxNBx'

export const QuotesAuthor = async (category) => {
  console.log(category)
  try {
    const result = await fetch(URL_CATEGORY + category, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': API_KEY,
      },
    })
    const data = await result.json()

    return data
  } catch (e) {
    throw new Error('Error al buscar el autor')
  }
}

export const QuotesRandom = async () => {
  try {
    const result = await fetch(RANDOM_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': API_KEY,
      },
    })

    const data = await result.json()
    return data
  } catch (e) {
    throw new Error('Error al buscar quote random')
  }
}
