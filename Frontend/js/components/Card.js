export default {
  template: `
    <article class="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div class="p-6">
        <!-- Header -->
        <div class="flex items-center gap-4">
          <img :src="avatar" alt="Employee Avatar"
               class="h-14 w-14 rounded-xl object-cover ring-1 ring-slate-200">
          <div>
            <h3 class="text-base font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
              {{ name }}
            </h3>
            <p class="text-sm text-slate-600">
              {{ position }} · <span class="text-slate-500">{{ team }}</span>
            </p>
          </div>
        </div>

        <!-- Tagovi vještina -->
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="skill in skills" :key="skill" class="px-2 py-0.5 text-xs rounded border border-slate-300 text-slate-600">
            {{ skill }}
          </span>
        </div>

        <!-- Kratki opis -->
        <p class="mt-3 text-sm text-slate-600">
          {{ bio }}
        </p>

        <!-- Akcije -->
        <div class="mt-5 flex items-center gap-2">
          <a :href="'mailto:' + email"
             class="inline-flex items-center justify-center h-9 px-3 rounded-md text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500/40">
            Email
          </a>
          <a :href="profile || '#'" class="inline-flex items-center justify-center h-9 px-3 rounded-md text-sm font-medium border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500/30">
            Profil
          </a>
        </div>

        <!-- Statistika -->
        <dl class="mt-5 grid grid-cols-3 gap-3 text-center">
          <div class="rounded-lg bg-slate-50 p-3 border border-slate-200">
            <dt class="text-[11px] uppercase tracking-wide text-slate-500">Projekti</dt>
            <dd class="mt-1 text-sm font-semibold text-slate-900">{{ project }}</dd>
          </div>
          <div class="rounded-lg bg-slate-50 p-3 border border-slate-200">
            <dt class="text-[11px] uppercase tracking-wide text-slate-500">Godine</dt>
            <dd class="mt-1 text-sm font-semibold text-slate-900">{{ year }}</dd>
          </div>
          <div class="rounded-lg bg-slate-50 p-3 border border-slate-200">
            <dt class="text-[11px] uppercase tracking-wide text-slate-500">Ocjena</dt>
            <dd class="mt-1 text-sm font-semibold text-slate-900">{{ rating }}</dd>
          </div>
        </dl>
      </div>
    </article>
  `,

  props: {
    name: String,
    position: String,
    team: String,
    email: String,
    avatar: String,
    skills: Array,   // <- ispravljeno (nije "skils")
    bio: String,     // <- dodato jer ga koristiš u template-u
    project: Number,
    year: Number,
    rating: Number,
    profile: String  // <- opcioni link
  }
}
