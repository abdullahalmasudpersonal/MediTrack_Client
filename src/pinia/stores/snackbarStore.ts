// src/pinia/stores/snackbarStore.ts
import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', {
 state: () => ({
  show: false,
  message: '',
  color: 'success' as 'success' | 'error' | 'info' | 'warning',
  timeout: 3000,
 }),
 actions: {
  showMessage(
   message: string,
   color: 'success' | 'error' | 'info' | 'warning' = 'success',
   timeout = 3000,
  ) {
   this.message = message
   this.color = color
   this.timeout = timeout
   this.show = true
  },
  hide() {
   this.show = false
  },
 },
})
