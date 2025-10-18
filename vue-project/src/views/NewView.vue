<script setup>
import { ref, provide } from 'vue'
import Child from '@/components/Child.vue'
import {useCounterStore} from '@/stores/CounterStore'

const username = ref('Marko') // reaktivna promenljiva

// "provide" deli username svim potomcima
provide('username', username)

let counter = useCounterStore();

function changeName() {
  username.value = username.value === 'Marko' ? 'Jelena' : 'Marko' //Reaktivna je promjenljiva pa se njoj pristuma sa .value
}
</script>

<template>
     <div style="border:2px solid #666; padding:10px; margin:10px;">
    <h2>👑 Parent (App.vue)</h2>
    <p>Trenutno ime: {{ username }}</p>
    <button @click="changeName">Promijeni ime</button>

    <Child />

    <h1>{{ counter.count }}</h1>
    <button @click="counter.increment()">Increment</button>
  </div>
</template>