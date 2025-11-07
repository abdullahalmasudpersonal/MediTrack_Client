import type { TUser } from './user.types'

export interface TGetPatient {
 id: string
 user: TUser
 name: string
 phone_number: string
 // gender: 'male' | 'female' | 'other'
 birthDate: string | null
 age: number
 photo: string
 address: string
 updated_at: string
}
