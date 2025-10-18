<script setup>
import TeamMember from '@/components/TeamMember.vue'
import TeamFooter from '@/components/TeamFooter.vue'
import TeamSidebar from '@/components/TeamSidebar.vue'
import team from '@/team.json'

console.log(team.length);

function activeMember(team){
    let count = 0;

    for(const member of team){
        if(member.active.toLowerCase() === 'active'){
            count++;
        }
    }
    return count
}
</script>

<template>
  <div class="w-full min-h-screen flex bg-white text-slate-900">
    <!-- Sidebar -->
    <TeamSidebar />

    <!-- Main -->
    <main class="flex-1">
      <!-- Top bar -->
      <div class="flex items-center justify-between px-10 pt-6">
        <!-- Add member button -->
        <button
          class="rounded-md bg-slate-400/70 text-white text-sm font-medium px-4 py-2 shadow-sm hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300">
          Add Member (0 Spots Left)
        </button>

        <!-- Team name + badge -->
        <div class="flex items-center gap-3">
          <div class="flex items-center justify-center h-8 w-8 rounded-full border border-slate-300">
            <svg viewBox="0 0 24 24" class="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M8 10h.01M16 10h.01"></path>
              <path d="M8 15s1.5 2 4 2 4-2 4-2"></path>
            </svg>
          </div>
          <div class="text-2xl font-semibold">Smiley Team</div>
          <span class="ml-1 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold h-5 w-5">{{activeMember(team)}}</span>
        </div>
      </div>

      <!-- Table -->
      <section class="px-10 pb-16 pt-6">
        <div class="max-w-5xl">
          <div class="grid grid-cols-12 text-sm font-semibold text-slate-600 px-4">
            <div class="col-span-6">Name</div>
            <div class="col-span-4">Email</div>
            <div class="col-span-2">Status</div>
          </div>

          <div class="mt-3 space-y-3">
            <div v-for="member in team" class="grid grid-cols-12 items-center rounded-lg bg-slate-100 px-4 py-4">
                <TeamMember :name="member.name" :email="member.email" :active="member.active" :imgId="member.imgId"></TeamMember>
            </div>
          </div>
        </div>
      </section>
      <TeamFooter />
    </main>
  </div>
</template>
