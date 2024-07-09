<script setup lang="ts">
import { BookItem } from '@/utils/book.utils'

defineProps<{
  book: BookItem
}>()

const markAsRead = (book) => {
  // Implement bookmark functionality
  console.log(`Bookmarked: ${book.title}`)
}
const markAsBorrowed = (book) => {
  // Implement like functionality
  console.log(`Liked: ${book.title}`)
}
const markAsReading = (book) => {
  // Implement mark as read functionality
  console.log(`Marked as read: ${book.title}`)
}
</script>

<template>
  <v-card class="mx-auto d-flex flex-column justify-space-between" height="450">
    <v-img :src="book.image"
           class="align-end"
           height="240px"
           min-height="240px"
           gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
           cover
    >
      <div class="chip-container ga-2">
        <v-chip v-if="book.status==='reading'" color="rgba(0, 128, 0, 0.5)" variant="elevated">
          <v-icon>mdi-book-open-page-variant-outline</v-icon>
        </v-chip>
        <v-chip v-if="book.status==='read'" color="rgba(128, 0, 128, 0.5)" variant="elevated">
          <v-icon>mdi-check-all</v-icon>
        </v-chip>
        <v-chip v-if="book.status==='borrowed'" color="rgba(255, 0, 0, 0.5)" variant="elevated">
          <v-icon>mdi-account-arrow-right</v-icon>
        </v-chip>
      </div>
      <v-card-title class="text-white" v-text="book.title" />
    </v-img>

    <v-card-subtitle class="mt-5">{{ book.author }}</v-card-subtitle>
    <v-card-text>{{ book.description }}</v-card-text>

    <v-card-actions class="book-actions">
      <v-btn icon @click="markAsReading(book)">
        <v-icon>mdi-book-open-page-variant-outline</v-icon>
      </v-btn>
      <v-btn icon @click="markAsRead(book)">
        <v-icon>mdi-check-all</v-icon>
      </v-btn>
      <v-btn icon @click="markAsBorrowed(book)">
        <v-icon>mdi-account-arrow-right</v-icon>
      </v-btn>

    </v-card-actions>
  </v-card>
</template>

<style scoped lang="sass">
.book-actions
  //background: rgba(0, 0, 0, .5)
</style>
