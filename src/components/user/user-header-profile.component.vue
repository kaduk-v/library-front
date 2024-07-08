<script setup lang="ts">

import { ref } from 'vue'

const avatar = ref('https://demos.themeselection.com/materio-vuetify-vuejs-admin-template-free/demo/assets/avatar-1-sTigs3cJ.png')

const actions = [
  { title: 'Add book', value: 1, icon: 'mdi-book-open-page-variant-outline' },
  { title: 'Add categoty', value: 2, icon: 'mdi-playlist-plus' },
  { title: 'Add author', value: 2, icon: 'mdi-account-plus-outline' }
]
</script>

<template>
  <v-badge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
    bordered
  >
    <v-avatar class="cursor-pointer" color="primary" size="48px">
      <v-img :src="avatar" />

      <!-- SECTION Menu -->
      <v-menu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <v-list>
          <!-- 👉 User Avatar & Name -->
          <v-list-item>
            <template #prepend>
              <v-list-item-action start>
                <v-badge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <v-avatar color="primary" variant="tonal">
                    <v-img :src="avatar" />
                  </v-avatar>
                </v-badge>
              </v-list-item-action>
            </template>

            <v-list-item-title class="font-weight-semibold">
              Vova Kaduk
            </v-list-item-title>

            <v-list-item-subtitle>Admin</v-list-item-subtitle>
          </v-list-item>

          <v-divider class="my-2" />

          <!-- 👉 Actions -->
          <v-list-item
            v-for="(item, i) in actions"
            :key="i"
            :value="item"
            :prepend-icon="item.icon"
            color="primary"
          >
            <v-list-item-title v-text="item.title" />
          </v-list-item>

          <v-divider class="my-2" />

          <!-- 👉 Logout -->
          <v-list-item to="/login">
            <template #prepend>
              <v-icon
                class="me-2"
                icon="mdi-logout"
                size="22"
              />
            </template>

            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- !SECTION -->

    </v-avatar>
  </v-badge>
</template>


<style scoped>

</style>
