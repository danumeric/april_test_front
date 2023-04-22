<template>
  <v-container class="main-content d-flex flex-column">
    <v-switch
      v-model="isDisplayAsRows"
      color="teal-darken-4"
      :label="isDisplayAsRows ? 'Строки' : 'Плитки'"
      inset
    ></v-switch>
    <v-dialog v-model="isModalOpen" width="auto">
      <v-card
        ><UserCardModal :user-data="pagedUsers.find((u) => u.id === idSelectedUser)" />
        <v-card-actions>
          <v-btn color="primary" block @click="isModalOpen = false">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row v-if="pagedUsers.length !== 0" justify="center" align="center">
      <v-col
        v-for="userData in pagedUsers"
        :key="userData.id"
        cols="12"
        :sm="isDisplayAsRows ? 12 : 6"
        :md="isDisplayAsRows ? 12 : 4"
        :lg="isDisplayAsRows ? 12 : 3"
      >
        <UserCard
          :is-display-as-rows="isDisplayAsRows"
          class="mx-auto"
          :user-data="userData"
          @openModalUser="(id) => openModalUser(id)"
        />
      </v-col>
    </v-row>
    <div v-if="pagedUsers.length === 0" class="my-10 text-center">
      Ничего не найдено, измените условия поиска
    </div>
    <v-spacer></v-spacer>
    <v-pagination
      v-model="currentPage"
      class="mt-3 mb-1"
      :length="10"
      :total-visible="5"
    ></v-pagination>
  </v-container>
</template>

<script lang="ts">
import { UserData } from '@/store/index'

export default {
  name: 'IndexPage',
  data() {
    return {
      currentPage: 1 as number,
      isModalOpen: false as boolean,
      idSelectedUser: 0 as number,
      isDisplayAsRows: false as boolean,
    }
  },
  computed: {
    pagedUsers(): UserData[] {
      return this.$store.getters.g_paged_users
    },
  },
  watch: {
    currentPage(newPage) {
      this.$store.dispatch('a_fetch_users', (newPage - 1) * 10)
    },
  },
  created() {
    this.$store.dispatch('a_fetch_users', 0)
  },
  methods: {
    openModalUser(id: number) {
      this.idSelectedUser = id
      this.isModalOpen = true
    },
  },
}
</script>
<style lang="scss" scoped>
.main-content {
  padding-top: 4rem;

  @media (min-width: 960px) {
    padding-top: 5rem;
  }
}
</style>
