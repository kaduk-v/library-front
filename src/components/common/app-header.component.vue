<script setup lang="ts">
import { ref } from 'vue'
import LibraryManager from '@/components/library-manager.conponent.vue'

const isLibraryManagerOpened = ref(false)
const openLibraryManager = () => isLibraryManagerOpened.value = !isLibraryManagerOpened.value

</script>

<template>
  <v-app-bar app class="app-header">
    <v-app-bar-title>
      <v-icon>mdi-library</v-icon>

      <template v-if="$vuetify.display.mdAndUp">
        <span>Library</span>
      </template>
    </v-app-bar-title>

    <v-btn prepend-icon="mdi-magnify" variant="outlined" class="search-btn">
      <span>Search...</span>
    </v-btn>

    <v-spacer></v-spacer>

    <template v-if="$vuetify.display.mdAndDown">
      <v-btn icon="mdi-menu" variant="text" />
    </template>

    <v-btn icon="mdi-plus" @click="openLibraryManager" variant="text" />
    <v-btn icon="mdi-account" variant="text" />
  </v-app-bar>

  <LibraryManager :opened="isLibraryManagerOpened" @update:opened="value => isLibraryManagerOpened = value"/>
</template>

<style scoped lang="sass">
.app-header
  display: flex
  align-items: stretch

.search-btn
  margin: 0 16px

</style>
