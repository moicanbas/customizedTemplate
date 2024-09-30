import { defineStore } from 'pinia'

export const generalStore = defineStore('generalStore', {
  state: () => ({
    showSide: true
  }),
  actions: {
    toggleSideBar() {
      this.showSide = !this.showSide
      //guardarlo en el localstorage
    }
  }
})
