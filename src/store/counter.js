import { defineStore } from "pinia"
// اسم استورمون
export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            count: 0
        }
    },
    getters: {
        doubleCount: (state) => (val) => {
            return state.count * val
        } 
    },
    actions: {
        increment(val){
           this.count+=val
        }
    }
})