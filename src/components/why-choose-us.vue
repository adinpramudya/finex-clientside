<template>
  <div class="px-4 lg:mx-[116px] rounded-lg py-[30px] bg-sunglow lg:flex lg:justify-between">
    <div class="flex flex-col w-full lg:w-1/3">
      <div class="flex items-center">
        <icons name="security" width="45" height="45" class="mr-2"></icons>
        <h1 class="font-bold m-0">Keamanan</h1>
      </div>
      <p class="mt-5 text-justify">
        70% dana nasabah kami disimpan di PT Kliring Berjangka Indonesia (KBI) yang keamanannya
        dijamin oleh Pemerintah Republik Indonesia. Sedangkan 30% sisanya disimpan di rekening
        terpisah pada bank terdaftar yang diawasi oleh regulator di Indonesia, yaitu BAPPEBTI (Badan
        Pengawas Perdagangan Berjangka Komoditi)
      </p>
    </div>
    <div class="flex flex-col w-full my-12 lg:my-0 lg:w-1/3 lg:mx-12">
      <div class="flex items-center">
        <icons name="comfort" width="45" height="45" class="mr-2"></icons>
        <h1 class="font-bold m-0">Kenyamanan</h1>
      </div>
      <p class="mt-5 text-justify">
        Informasi fundamental dan analisa teknikal yang selalu terupdate membantu Anda dalam
        mengambil keputusan transaksi. Serta layanan Support dari profesional kami yang siap
        membantu 24/7.
      </p>
    </div>
    <div class="flex flex-col w-full lg:w-1/3">
      <div class="flex items-center">
        <icons name="easly" width="45" height="45" class="mr-2"></icons>
        <h1 class="font-bold m-0">Kemudahan</h1>
      </div>
      <p class="mt-5 text-justify">
        Proses registrasi, deposit (penambahan dana), withdrawal (penarikan dana) dan transaksi
        semua dapat dilakukan secara online. Anda dapat melakukannya dengan mudah dimanapun dan
        kapanpun.
      </p>
    </div>
  </div>
</template>

<script>
import icons from './icons.vue'
export default {
  components: {
    icons
  }
}
</script>
