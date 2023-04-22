<template>
  <v-card
    :class="isDisplayAsRows ? 'd-flex px-2' : 'pt-4 pb-2 px-1'"
    :max-width="isDisplayAsRows ? '95%' : 300"
  >
    <v-img
      :class="isDisplayAsRows ? 'f-flex align-center justify-center my-auto' : 'mx-auto'"
      :src="userData.photo_100"
      :alt="userData.last_name"
      class="flex-grow-0"
      :height="isDisplayAsRows ? '50px' : '100px'"
      :width="isDisplayAsRows ? '50px' : '100px'"
    ></v-img>

    <v-card-title :class="{ 'text-subtitle-1': isDisplayAsRows }"
      >{{ userData.first_name }}<br v-if="$vuetify.breakpoint.name === 'xs' && isDisplayAsRows" />
      {{ userData.last_name }}</v-card-title
    ><v-spacer></v-spacer>
    <v-divider v-if="!isDisplayAsRows"></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="orange-lighten-2" variant="text" @click="$emit('openModalUser', userData.id)">{{
        $vuetify.breakpoint.name === 'xs' && isDisplayAsRows ? '...' : 'подробнее'
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { PropType } from 'vue'
import { UserData } from '@/store/index'
export default {
  name: 'UserCard',
  props: {
    userData: {
      type: Object as PropType<UserData>,
      required: true,
      default: () => {},
    },
    isDisplayAsRows: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>