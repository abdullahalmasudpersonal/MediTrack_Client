export const formatDate = (dateString: string) => {
 if (!dateString) return 'N/A'
 const date = new Date(dateString)
 return date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  // hour: 'numeric',
  // minute: 'numeric',
 })
}
