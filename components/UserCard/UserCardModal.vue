<template>
  <v-card class="pa-3" width="300">
    <v-img
      class="mx-auto"
      :src="userData.photo_100"
      :alt="userData.last_name"
      height="100px"
      width="100px"
    ></v-img>
    <v-card-title>{{ userData.first_name }} {{ userData.last_name }}</v-card-title>

    <p>id: {{ userData.id }}</p>
    <p>Статус: {{ userData.status || 'не указан' }}</p>
    <p>
      Школа: {{ userData?.schools ? userData?.schools[0]?.name || 'не указана' : 'не указана' }}
    </p>

    <v-divider></v-divider>
  </v-card>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { UserData } from '@/store/index'

export default {
  name: 'UserCardModal',
  props: {
    userData: {
      type: Object as PropType<UserData>,
      required: true,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
</style>