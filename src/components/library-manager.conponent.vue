<script setup lang="ts">
import AuthorForm from '@/components/author/author-form.component.vue'
import BookForm from '@/components/book/book-form.component.vue'
import CategoryForm from '@/components/category/category-form.component.vue'
import { ref, computed } from 'vue'

const props = defineProps([ 'opened' ])
const emit = defineEmits([ 'update:opened' ])
const tab = ref(null)

const dialog = computed({
  get() {
    return props.opened
  },
  set(value) {
    emit('update:opened', value)
  }
})

const closeDialog = () => dialog.value = !dialog.value
</script>

<template>
  <div class="text-center pa-4">
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          prepend-icon="mdi-cog"
          size="small"
          text="Settings"
          v-bind="activatorProps"
        />
      </template>

      <v-card>
          <v-toolbar>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-close" @click="closeDialog" />
          </v-toolbar>

        <v-tabs v-model="tab" bg-color="primary">
          <v-tab value="book" prepend-icon="mdi-note-plus-outline">Add book</v-tab>
          <v-tab value="author" prepend-icon="mdi-account-plus-outline">Add author</v-tab>
          <v-tab value="category" prepend-icon="mdi-playlist-plus">Add category</v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="book">
            <BookForm />
          </v-tabs-window-item>

          <v-tabs-window-item value="author">
            <AuthorForm />
          </v-tabs-window-item>

          <v-tabs-window-item value="category">
            <CategoryForm />
          </v-tabs-window-item>
        </v-tabs-window>

      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>
