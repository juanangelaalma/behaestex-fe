const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const formatDate = (date) => {
  const splitDate = date.split('-')
  const month = splitDate[0]
  const year = splitDate[1]
  return `${months[month - 1]} ${year}`
}

const getPeriod = (history) => {
  return `${formatDate(history.from)} - ${formatDate(history.to)}`
}

export default getPeriod