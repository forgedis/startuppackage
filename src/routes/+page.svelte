<script>
  // Mock perks
  let entitled = [
    { id: 1, company: 'Apify', name: '4000 credits', details: 'For building scenarios on standard plan' },
    { id: 2, company: 'DYPE', name: 'CIT preparation', details: 'One-time service' }
  ];

  let used = [
    { id: 3, company: 'StartupX', name: 'AWS Credits', details: '5000 USD cloud credits' }
  ];

  function claim(perk) {
    // remove from entitled
    entitled = entitled.filter(p => p.id !== perk.id);
    // add to used
    used = [...used, perk];
  }

  function restart(perk) {
    // remove from used
    used = used.filter(p => p.id !== perk.id);
    // add to entitled
    entitled = [...entitled, perk];
  }
</script>

<div class="max-w-6xl mx-auto p-8 space-y-12">
  <!-- Entitled perks -->
  <section>
    <h2 class="text-xl font-semibold mb-4">Entitled</h2>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each entitled as perk}
        <div class="rounded-lg border bg-white p-4 shadow hover:shadow-md transition">
          <p class="text-sm text-gray-500">{perk.company}</p>
          <h3 class="text-lg font-bold">{perk.name}</h3>
          <p class="text-sm text-gray-600 mt-2">{perk.details}</p>
          <button
            class="mt-4 w-full rounded-md bg-blue-600 text-white py-2 hover:bg-blue-700"
            on:click={() => claim(perk)}>
            Claim
          </button>
        </div>
      {/each}
    </div>
  </section>

  <!-- Used perks -->
  <section>
    <h2 class="text-xl font-semibold mb-4">Used</h2>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each used as perk}
        <div class="rounded-lg border bg-gray-50 p-4 shadow-inner">
          <p class="text-sm text-gray-500">{perk.company}</p>
          <h3 class="text-lg font-bold">{perk.name}</h3>
          <p class="text-sm text-gray-600 mt-2">{perk.details}</p>
          <div class="mt-4 flex justify-between items-center">
            <span class="inline-block rounded bg-green-100 text-green-700 px-3 py-1 text-sm">Used</span>
            <button
              class="rounded-md bg-gray-200 text-gray-800 px-3 py-1 text-sm hover:bg-gray-300"
              on:click={() => restart(perk)}>
              Restart
            </button>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>
