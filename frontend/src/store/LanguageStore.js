import { create } from 'zustand'
import toast from 'react-hot-toast'
import { axiosInstance } from '../lib/axios'

export const useLanguageStore = create((set, get) => ({
  currentLanguage: "estonian",
  isLoading: false, 
  nouns: [],
  verbs: [],

  setNouns: (nouns) => set({nouns}),

  getNouns: async () => {
    set({ isLoading: true })
    try {
      // const currentLanguage = get().currentLanguage;
      const res = await axiosInstance.get(`/estonian/nouns`)
      set({ nouns: res.data.estonianNouns }) // this is it, isn't it? N'est-ce pas?
      console.log("API response: ", res.data)
    } catch (error) {
      toast.error("Error fetch nouns: ", error.response?.data?.message || "Unexpected error")
    } finally {
     set({ isLoading: false })
    }
  },

  getHebrewVerbs: async () => {
    set({ isLoading: true })
    try {
      const res = await axiosInstance.get('/hebrew/verbs')
      set({ verbs: res.data.hebrewVerbs })
    } catch (error) {
      toast.error("Error in fetch Hebrew verbs: ", error.response?.data?.message || "Unexpected error")
    } finally {
      set({ isLoading: false })
    }
  },

  // I might need a uniqe store that only the admin can use.
  createHebrewVerb: async (hebrewVerb) => { // does this have to be specified on this page???
    set({ isLoading: true })
    try {
      const res = await axiosInstance.post('/hebrew/verb-upload', { hebrewVerb }) // This will become a key in the req.body
      // send some kind of confirmation if it worked
      toast.message("You submitted a new Hebrew verb: ", res.data.message)
    } catch (error) {
      toast.error("Error in createHebrewVerb: ", error.repsonse?.data?.message || "Unexpected error")
    } finally {
      set({ isLoading: false })
    }
  }
}))