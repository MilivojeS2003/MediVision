<script setup></script>

<template>
  <div class="w-full min-h-screen flex bg-white text-slate-900">
    <!-- Sidebar -->
    <aside class="w-56 bg-slate-100/80 border-r border-slate-200 px-6 py-6 flex flex-col">
      <div class="text-2xl font-semibold tracking-wide text-slate-700">Demo</div>
      <div class="mt-8 grid gap-4">
        <div class="h-14 w-14 rounded-lg bg-slate-300"></div>
        <div class="h-14 w-14 rounded-lg bg-slate-300"></div>
        <div class="h-14 w-14 rounded-lg bg-slate-300"></div>
        <div class="h-14 w-14 rounded-lg bg-slate-300"></div>
      </div>
    </aside>

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
          <span class="ml-1 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold h-5 w-5">5</span>
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
            <!-- row -->
            <div class="grid grid-cols-12 items-center rounded-lg bg-slate-100 px-4 py-4">
              <div class="col-span-6 flex items-center gap-4">
                <div class="h-12 w-12 rounded-xl overflow-hidden bg-slate-300">
                  <img class="h-full w-full object-cover" src="https://i.pravatar.cc/80?img=68" alt="James Doe" />
                </div>
                <div class="text-lg font-semibold">James Doe</div>
              </div>
              <div class="col-span-4 text-slate-600">james@doe.com</div>
              <div class="col-span-2 font-semibold text-emerald-500">Active</div>
            </div>

            <div class="grid grid-cols-12 items-center rounded-lg bg-slate-100 px-4 py-4">
              <div class="col-span-6 flex items-center gap-4">
                <div class="h-12 w-12 rounded-xl overflow-hidden bg-slate-300">
                  <img class="h-full w-full object-cover" src="https://i.pravatar.cc/80?img=32" alt="Sarah Doe" />
                </div>
                <div class="text-lg font-semibold">Sarah Doe</div>
              </div>
              <div class="col-span-4 text-slate-600">sarah@doe.com</div>
              <div class="col-span-2 font-semibold text-emerald-500">Active</div>
            </div>

            <div class="grid grid-cols-12 items-center rounded-lg bg-slate-100 px-4 py-4">
              <div class="col-span-6 flex items-center gap-4">
                <div class="h-12 w-12 rounded-xl overflow-hidden bg-slate-300">
                  <img class="h-full w-full object-cover" src="https://i.pravatar.cc/80?img=5" alt="Steven Doe" />
                </div>
                <div class="text-lg font-semibold">Steven Doe</div>
              </div>
              <div class="col-span-4 text-slate-600">steven@doe.com</div>
              <div class="col-span-2 font-semibold text-emerald-500">Active</div>
            </div>

            <div class="grid grid-cols-12 items-center rounded-lg bg-slate-100 px-4 py-4">
              <div class="col-span-6 flex items-center gap-4">
                <div class="h-12 w-12 rounded-xl overflow-hidden bg-slate-300">
                  <img class="h-full w-full object-cover" src="https://i.pravatar.cc/80?img=47" alt="Jen Doe" />
                </div>
                <div class="text-lg font-semibold">Jen Doe</div>
              </div>
              <div class="col-span-4 text-slate-600">jen@doe.com</div>
              <div class="col-span-2 font-semibold text-emerald-500">Active</div>
            </div>

            <div class="grid grid-cols-12 items-center rounded-lg bg-slate-100 px-4 py-4">
              <div class="col-span-6 flex items-center gap-4">
                <div class="h-12 w-12 rounded-xl overflow-hidden bg-slate-300">
                  <img class="h-full w-full object-cover" src="https://i.pravatar.cc/80?img=12" alt="Joe Doe" />
                </div>
                <div class="text-lg font-semibold">Joe Doe</div>
              </div>
              <div class="col-span-4 text-slate-600">joe@doe.com</div>
              <div class="col-span-2 font-semibold text-emerald-500">Active</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
