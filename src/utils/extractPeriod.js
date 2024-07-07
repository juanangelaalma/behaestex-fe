const extractPeriod = (date) => {
  const splitDate = date.split('-')
  return { month: splitDate[0], year: splitDate[1] }
}

export default extractPeriod