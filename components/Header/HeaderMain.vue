<template>
  <v-app-bar fixed class="header" color="teal-darken-4">
    <v-app-bar-title class="ml-md-4"
      ><h2 class="text-h6 text-md-h5">Профили VK</h2>
    </v-app-bar-title>
    <v-spacer></v-spacer><v-spacer></v-spacer>
    <v-text-field
      label="Поиск по имени и фамилии"
      bg-color="teal-darken-4"
      prepend-inner-icon="mdi-magnify"
      color="teal-darken-4"
      class="mr-md-4"
      hide-details="auto"
      @input="changeSearchText"
      >{{ searchText }}</v-text-field
    >
  </v-app-bar>
</template>
 <script lang="ts">
export default {
  name: 'HeaderMain',
  computed: {
    searchText(): string {
      return this.$store.getters.g_search_text
    },
  },

  methods: {
    changeSearchText(newSearchedText: string) {
      this.$store.commit('m_change_search_text', newSearchedText)
    },
  },
}
</script>
