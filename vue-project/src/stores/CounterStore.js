// Pinia služi da centralizovano čuva i upravlja podacima koji se koriste u više različitih komponenti.

import {defineStore} from 'pinia'

export let useCounterStore = defineStore('counter', {
    // 1. STATE = reaktivni podaci
    state: () => ({
        count:0,
    }),

    // 3. ACTIONS = metode koje menjaju stanje
    actions: {
        increment(){
            this.count++;
        }
    }


})