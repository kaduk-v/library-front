<script setup lang="ts">
import UserProfile from '@/components/user/user-header-profile.component.vue'
import { VuetifyTheme } from '@/plugins/vuetify'
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const darkTheme = ref(false)

const toggleTheme = () => {
  darkTheme.value = !darkTheme.value
  theme.global.name.value = theme.global.current.value.dark ? VuetifyTheme.Light : VuetifyTheme.Dark
}

const themeIcon = computed(() => {
  return darkTheme.value ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
})

const isActionsMenuOpened = ref(false)

</script>

<template>
  <v-app-bar class="app-header pl-10 pr-10" elevation="5" density="comfortable">
    <template v-slot:prepend>
      <v-icon size="30" color="secondary">mdi-library</v-icon>
    </template>

    <v-app-bar-title class="title">Library</v-app-bar-title>

    <v-btn prepend-icon="mdi-magnify" variant="tonal" class="search-btn">
      <span>Search...</span>
    </v-btn>

    <v-spacer></v-spacer>

    <template v-if="$vuetify.display.mdAndDown">
      <v-btn icon="mdi-format-list-bulleted" variant="flat" class="mr-4"/>
    </template>

    <v-btn @click="toggleTheme" :icon="themeIcon" variant="flat" class="mr-4"/>

    <UserProfile />
  </v-app-bar>
</template>

<style scoped lang="sass">
.app-header
  padding: 10px

  .title
    color: orangered

</style>
