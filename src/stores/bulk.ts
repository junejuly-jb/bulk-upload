import { ref, computed, watch, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type User } from '../interfaces/User'

export const useBulkStore = defineStore('bulk', () => {
    const users = ref<Array<User>>([])
    const fileUploadDialog = ref(false)
    const errors = ref<Array<String>>([]);

    const toggleDialog = () => {
        
        fileUploadDialog.value = !fileUploadDialog.value
        console.log(fileUploadDialog.value)
    }

    

  return { users, fileUploadDialog, toggleDialog, errors}
})