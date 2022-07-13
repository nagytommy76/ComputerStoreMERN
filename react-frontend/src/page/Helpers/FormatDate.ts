const returnFormattedDate = (date: Date) => {
   return date.toLocaleDateString('hu-HU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
   })
}

export const formatDate = (date: Date) => {
   try {
      return returnFormattedDate(date)
   } catch (error) {
      const convertedDate = new Date(date)
      return returnFormattedDate(convertedDate)
   }
}
