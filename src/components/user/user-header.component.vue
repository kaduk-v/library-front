<script setup lang="ts">
const actions = [
  { title: 'Add book', value: 1, icon: 'mdi-book-open-page-variant-outline' },
  { title: 'Add categoty', value: 2, icon: 'mdi-playlist-plus' },
  { title: 'Add author', value: 2, icon: 'mdi-account-plus-outline' }
]
</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props: menu }">
      <v-list>
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
          subtitle="john@google.com"
          title="John Leider"
        >
          <template v-slot:append>
            <v-btn
              icon="mdi-menu-down"
              size="small"
              variant="text"
              v-bind="menu"
            ></v-btn>
          </template>
        </v-list-item>
      </v-list>

    </template>

    <v-divider></v-divider>

    <v-list :lines="false" density="comfortable" nav>
      <v-list-item
        v-for="(item, i) in actions"
        :key="i"
        :value="item"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped>

</style>
