<script setup lang="ts">
import { ref } from 'vue'

const categories = ref([
  {
    id: 1,
    name: 'Fiction',
    icon: 'mdi-book-open',
    children: [
      { id: 2, name: 'Science Fiction' },
      { id: 3, name: 'Fantasy' },
      { id: 4, name: 'Mystery' }
    ]
  },
  {
    id: 5,
    name: 'Non-Fiction',
    icon: 'mdi-book',
    children: [
      { id: 6, name: 'Biography' },
      { id: 7, name: 'Self-Help' },
      { id: 8, name: 'Cookbooks' }
    ]
  },
  {
    id: 6,
    name: 'Non-Fiction',
    icon: 'mdi-book',
    children: []
  }
])

const selection: any[] = []

</script>

<template>
  <v-navigation-drawer border="none" class="category-navigation-drawer bg-background" width="400" fixed>
    <v-card class="ma-10 category-navigation-wapper rounded-lg" over>
      <v-card-title class="">Categories</v-card-title>

      <v-treeview :items="categories"
                  v-model="selection"
                  item-title="name"
                  item-key="id"
                  open-all
                  active-color="green"
      />

    </v-card>
  </v-navigation-drawer>
</template>

<style scoped lang="sass">
.category-navigation-wapper
  height: calc(100% - 80px)
  overflow: auto
</style>
