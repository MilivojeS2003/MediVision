<script setup>
import { inject } from 'vue'
import Grandchild from './Grandchild.vue'

// "inject" preuzima username od NewView.vue
const username = inject('username')
</script>

<template>
  <div style="border:2px solid #999; padding:10px; margin:10px;">
    <h3>👶 Child (Child.vue)</h3>
    <p>Primljeno ime: {{ username }}</p>
    <Grandchild />
  </div>
</template>