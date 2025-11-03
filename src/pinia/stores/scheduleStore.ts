import { defineStore } from 'pinia'
import { scheduleApi } from '../features/schedulesApi/SchedulesApi'

export enum WEEKDAYS {
 Monday = 0,
 Tuesday = 1,
 Wednesday = 2,
 Thursday = 3,
 Friday = 4,
 Saturday = 5,
 Sunday = 6,
}

export interface Slot {
 start_time: string // "09:00" এর মতো string, Date নয়
 end_time: string // "09:10" এর মতো string, Date নয়
 is_booked: boolean
}

export interface Schedule {
 doctor: string
 date: string
 weekday: WEEKDAYS
 slots: Slot[]
}

export const useScheduleStore = defineStore('schedule', {
 state: (): {
  schedules: Schedule | null
  loading: boolean
  error: string | null
 } => ({
  schedules: null,
  loading: false,
  error: null as string | null,
 }),

 actions: {
  async getScheduleStore(doctorId: string, date: Date) {
   this.loading = true
   try {
    const data = await scheduleApi.getSchedule(doctorId, date)
    this.schedules = data.data
    return data.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (err: any) {
    this.error = err.response?.data?.message || 'Failed to load all doctor'
    return err.response?.data
   } finally {
    this.loading = false
   }
  },
  clearSchedules() {
   this.schedules = null
  },
 },
})
