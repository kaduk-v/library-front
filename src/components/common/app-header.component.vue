<script setup lang="ts">
import UserHeader

'@/components/common/user-header'
import { ref } from 'vue'


const isActionsMenuOpened = ref(false)

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

    <UserHeader />
  </v-app-bar>
</template>

<style scoped lang="sass">
.app-header
  display: flex
  align-items: stretch

.search-btn
  margin: 0 16px

</style>
