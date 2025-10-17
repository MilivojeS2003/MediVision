<script setup>
import { inject } from 'vue'

// "inject" radi čak i ako je NewView.vue → Child → Grandchild
const username = inject('username')
</script>

<template>
  <div style="border:2px solid #ccc; padding:10px; margin:10px;">
    <h4>🍼 Grandchild (Grandchild.vue)</h4>
    <p>Primljeno ime: {{ username }}</p>
  </div>
</template>
