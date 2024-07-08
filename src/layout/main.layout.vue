<script setup lang="ts">
import BookFilter from '@/components/book/book-filter.component.vue'
import BookList from '@/components/book/book-list.component.vue'
import CategoryNavigation from '@/components/category/category-side-navigation.component.vue'
import AppHeader from '@/components/common/app-header.component.vue'
</script>

<template>
    <AppHeader />
    <CategoryNavigation />

    <v-main class="">
      <BookFilter />
      <BookList />
    </v-main>
</template>

<style scoped>

</style>
