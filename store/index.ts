import { GetterTree, ActionTree, MutationTree } from 'vuex'
const jsonp = require('jsonp-promise')
const tokenVk = process.env.VK_TOKEN


export interface UserData {
  id: number,
  first_name: string,
  last_name: string,
  photo_100: string,
  status?: string
}
export const state = () => ({
  things: [] as string[],
  searchText: '' as string,
  offsetForPagination: Number,
  pagedUsers: [] as UserData[]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {

  g_paged_users: (state): UserData[] => state.pagedUsers.filter((u: UserData) => u.first_name.toLowerCase().includes(state.searchText) || u.last_name.toLowerCase().includes(state.searchText)),

  g_search_text: (state): string => state.searchText
}

export const mutations: MutationTree<RootState> = {

  m_change_search_text: (state, searchText) => (state.searchText = searchText.toLowerCase()),

  m_update_users(state, users) {
    state.pagedUsers = users
  },
}

export const actions: ActionTree<RootState, RootState> = {

  async a_fetch_users({ commit }, offsetForPagination) {
    try {
      const res = await jsonp(`https://api.vk.com/method/users.search?birth_day=16&birth_month=10&birth_year=1995&offset=${offsetForPagination}&count=12&fields=photo_100,universities,schools,status&access_token=${tokenVk}&v=5.131`).promise
      commit('m_update_users', res.response.items)
      return res.response.items
    } catch (e) { console.log(e) }
  },
}