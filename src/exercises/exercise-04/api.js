export const getTemperature = async (country, city) => {
  return new Promise((resolve, reject) => {
    const didSucceed = Math.random() >= 0.2

    if (!didSucceed) {
      const error = new Error('Error fetching temperature')
      error.status = 500

      setTimeout(() => reject(error), 600)
    }

    const response = {}

    response.data = { temperature: Math.floor(Math.random() * 100) }
    response.status = 200

    setTimeout(() => resolve(response), 600)
  })
}
