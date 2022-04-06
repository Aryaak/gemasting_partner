<template>
  <nav class="p-10 flex flex-col justify-center relative">
    <div>
      <img src="~/assets/img/logo/app.svg" alt="App Logo" class="mb-20" />
    </div>
    <ul class="flex flex-col gap-y-10">
      <li
        class="cursor-pointer flex items-center gap-x-5 font-bold text-primary"
      >
        <img
          src="~/assets/img/icons/dashboard-active.svg"
          alt="Dashboard Icon"
        />
        <span>Dashboard</span>
      </li>
      <li class="cursor-pointer flex items-center gap-x-5 text-netral-50">
        <img src="~/assets/img/icons/chart-disable.svg" alt="Activity Icon" />
        <span>Aktifitas</span>
      </li>
      <li class="cursor-pointer flex items-center gap-x-5 text-netral-50">
        <img
          src="~/assets/img/icons/notification-disable.svg"
          alt="Notification Icon"
        />
        <span>Notifikasi</span>
      </li>
      <li class="cursor-pointer flex items-center gap-x-5 text-netral-50">
        <img src="~/assets/img/icons/profile-disable.svg" alt="Profile Icon" />
        <span>Profil</span>
      </li>
    </ul>
  </nav>
</template>

