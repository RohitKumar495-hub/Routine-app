export const getLocalDateKey = () => {
const date = new Date()
return date.toLocaleDateString('en-CA') // YYYY-MM-DD (local safe)
}

export const formatDisplayDate = (dateStr: string) => {
const date = new Date(dateStr)

const today = new Date()
const yesterday = new Date()
yesterday.setDate(today.getDate() - 1)

if (date.toDateString() === today.toDateString()) return "Today"
if (date.toDateString() === yesterday.toDateString()) return "Yesterday"

return date.toDateString()
}
