<template>
  <div>
    <div class="bg-white rounded-2xl p-5 mb-5">
      <h3 class="text-netral-150 text-lg font-bold mb-5">Layanan</h3>
      <div class="flex gap-x-10 justify-between">
        <ServiceCard
          icon="img/icons/doctor.svg"
          title="Dokter"
          text="Total Dokter"
          count="55"
        />
        <ServiceCard
          icon="img/icons/hearth.svg"
          title="Layanan"
          text="Total Layanan"
          count="21"
        />
        <ServiceCard
          icon="img/icons/chart.svg"
          title="Cek Stunting"
          text="Total Cek Stunting"
          count="20"
        />
        <ServiceCard
          icon="img/icons/activity.svg"
          title="KMS Online"
          text="Total KMS Online"
          count="15"
        />
      </div>
    </div>
    <div class="flex justify-between">
      <div>
        <div class="bg-white rounded-2xl p-5 mb-5">
          <h3 class="text-netral-150 text-lg font-bold mb-5">
            Ringkasan Aktifitas
          </h3>
        </div>
        <div class="bg-white rounded-2xl p-5">
          <h3 class="text-netral-150 text-lg font-bold mb-5">
            Pratinjau Lembaga
          </h3>
        </div>
      </div>
      <div class="bg-white rounded-2xl p-5">
        <h3 class="text-netral-150 text-lg font-bold mb-5">Ulasan</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
