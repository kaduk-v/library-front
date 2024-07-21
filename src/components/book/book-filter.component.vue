<script setup lang="ts">

enum BookStatus {
  Available = 'available',
  Read = 'read',
  Reading = 'reading',
  Borrowed = 'borrowed',
}

const selectedFilters: string[] = [ 'Filter 1', 'Filter 2' ]
const filters = [
  { name: 'Читаю', icon: 'mdi-book-open-page-variant-outline', status: BookStatus.Reading },
  { name: 'Прочитано', icon: 'mdi-check-all', status: BookStatus.Read },
  { name: 'Позичено', icon: 'mdi-account-arrow-right', status: BookStatus.Borrowed },
  { name: 'Доступно', icon: 'mdi-book-open-blank-variant-outline', status: BookStatus.Available }
]

const applyFilters = () => {
}
const removeFilter = () => {
}
</script>

<template>
  <v-card class="ma-10 pa-5 rounded-lg">
    <v-chip-group
      column
      multiple
      selected-class="text-primary"
      v-model="selectedFilters"
      @change="applyFilters"
    >
      <v-chip
        v-for="filter in filters"
        :key="filter.status"
        :value="filter.status"
        :prepend-icon="filter.icon"
        rounded
        tonal
        class="pr-3 pl-5 mr-5"
      >
        {{ filter.name }}
      </v-chip>
    </v-chip-group>
  </v-card>
</template>

<style scoped lang="sass">
.book-filter
  border-radius: 10px

</style>
