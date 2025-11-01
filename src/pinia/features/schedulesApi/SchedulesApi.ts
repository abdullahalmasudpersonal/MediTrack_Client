import baseApi from '@/pinia/baseApi/baseApi'

export const scheduleApi = {
 getSchedule: async (doctorId: string, date: Date | string) => {
  const formattedDate = new Date(date).toISOString().split('T')[0]
  const res = await baseApi.get(
   `/schedules/get-doctor-schedules/${doctorId}/available-slots/?date=${formattedDate}`,
  )
  return res.data
 },
}
