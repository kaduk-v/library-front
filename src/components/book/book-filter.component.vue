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
  { name: 'Доступно', icon: 'mdi-book-open-blank-variant-outline', status: BookStatus.Available },
]

const applyFilters = () => {
}
const removeFilter = () => {
}
</script>

<template>
  <v-container class="book-filter">
    <v-row>
      <v-col cols="12">
        <v-chip-group
          column
          multiple
          v-model="selectedFilters"
          @change="applyFilters"
        >
          <v-chip
            v-for="filter in filters"
            :key="filter.status"
            :value="filter.status"
            :prepend-icon="filter.icon"
            color="primary"
            rounded
            tonal
          >
            {{ filter.name }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped lang="sass">
.book-filter
  border-radius: 15px

</style>
