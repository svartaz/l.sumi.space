export const getTime = () => {
  const date0 = new Date(1998, 11, 22)
  const date = new Date()

  let diff = date.getTime() - date0.getTime()

  let year = 1999
  for (; ; year++) {
    const isLeap = year % 4 == 0 && year % 128 != 0
    const dayPerYear = isLeap ? 366 : 365
    const msPerYear = dayPerYear * 24 * 60 * 60 * 1000
    if (diff < msPerYear) {
      break
    } else {
      diff -= msPerYear
    }
  }

  const day = diff / 1000 / 60 / 60 / 24
  return [year + 10000, Math.floor(day), day % 1]
}

