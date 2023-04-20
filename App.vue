<template>
  <CompHeader />
  <router-view />
  <CompFooter />
</template>

<script>
// @ is an alias to /src
import CompHeader from "@/components/CompHeader.vue";
import CompFooter from "@/components/CompFooter.vue";
export default {
  name: "HomeView",
  components: {
    CompHeader,
    CompFooter,
  },
};
</script>
