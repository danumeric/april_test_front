<template>
  <v-app dark>
    <HeaderMain />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer class="d-flex flex-column" :absolute="!fixed" app>
      <span>&copy; april_test_front {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      fixed: false,
    }
  },
}
</script>
<style lang="scss">
.container {
  height: 100%;
}
</style>
