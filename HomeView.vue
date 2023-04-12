<template>
  <main>
    <CompSlider />
    <CompContent />
    <CompKategori />
  </main>
</template>

<script>
import CompKategori from "@/components/Anasayfa/CompKategori.vue";
import CompSlider from "@/components/Anasayfa/CompSlider.vue";
import CompContent from "@/components/Anasayfa/CompContent.vue";

export default {
  name: "HomeView",
  components: {
    CompSlider,
    CompContent,
    CompKategori,
  },
};
</script>
