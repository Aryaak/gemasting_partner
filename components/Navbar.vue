<template>
  <nav class="py-6 px-10 flex justify-between items-center">
    <h1 class="text-netral-150 text-3xl font-bold">Dashboard</h1>
    <form
      class="
        border-1
        px-5
        py-3
        flex
        gap-x-3
        rounded-xl
        items-center
        border-netral-50
      "
    >
      <button>
        <img src="~/assets/img/icons/search-disable.svg" alt="Search Icon" />
      </button>
      <input
        type="text"
        placeholder="Cari sesuatu..."
        class="outline-none pr-5"
      />
    </form>
    <div>
      <div class="flex items-center gap-x-5">
        <img
          src="~/assets/img/logo/institution-disable.svg"
          alt="Profile Logo"
        />
        <div>
          <h3 class="text-netral-150 text-lg font-bold">RS. Siti Fatimah</h3>
          <p class="text-netral-50">Staff admin</p>
        </div>
        <img
          src="~/assets/img/icons/arrow-down-disable.svg"
          alt="Arrow Down Icon"
          class="ml-20 cursor-pointer"
        />
      </div>
    </div>
  </nav>
</template>

