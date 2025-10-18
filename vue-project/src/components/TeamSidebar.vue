<script setup>
import LinkSidebar from '@/components/LinkSidebar.vue'

const dashElement = ['Dashboard','Upload', 'Documents List', 'Document Detail', 'Monitoring', 'Reports List']

</script>

<template>
  <!-- SIDEBAR -->
  <aside class="h-screen w-72 bg-teal-800 bg-gradient-to-b from-teal-800 to-teal-700 text-slate-100 px-5 py-6">
    <!-- Brand -->
    <div class="flex items-center gap-3 px-2">
      <div class="h-9 w-9 rounded-full ring-2 ring-slate-200/60 flex items-center justify-center text-sm font-semibold">
        NV
      </div>
      <div class="text-2xl font-semibold tracking-wide">MediVision</div>
    </div>

    <!-- Nav -->
    <nav class="mt-8 space-y-1 text-base">
      <!-- Dashboard -->
       <div v-for="el in dashElement">
        <LinkSidebar :name="el" route="`\ ${el}`"></LinkSidebar>
       </div>
    </nav>
  </aside>
</template>


<script setup></script>