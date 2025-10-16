<script setup>
const props = defineProps({
  title: String,
  message: String
})
</script>

<template>
  <div class="message-box">
    <h2>{{ props.title }}</h2>
    <p>{{ props.message }}</p>
  </div>
</template>
