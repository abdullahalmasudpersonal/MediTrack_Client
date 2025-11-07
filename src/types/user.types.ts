export interface TUser {
 id: string
 userId: string
 email: string
 role: 'doctor' | 'admin' | 'patient'
 status: 'active' | 'inactive'
 last_login: string | null
 created_at: string
}
