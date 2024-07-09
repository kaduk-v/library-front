<script setup lang="ts">
import BookListItem from '@/components/book/book-list-item.component.vue'
import { BookItem } from '@/utils/book.utils'

const books: BookItem[] = [
  {
    id: 1,
    image: 'https://picsum.photos/300/300?random=1',
    title: 'The Shining',
    author: 'Stephen King',
    description: 'A horror novel about a haunted hotel.',
    status: 'read'
  },
  {
    id: 2,
    image: 'https://picsum.photos/400/300?random=1',
    title: 'It',
    author: 'Stephen King',
    description: 'A novel about a shape-shifting entity that terrorizes children.',
    status: 'reading'
  },
  {
    id: 3,
    image: 'https://static.yakaboo.ua/media/catalog/product/i/m/img_24172.jpg',
    title: 'Pet Sematary',
    author: 'Stephen King',
    description: 'A horror story about a pet cemetery with the power to bring animals back to life.',
    status: 'borrowed'
  },
  {
    id: 4,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Карби',
    author: 'Макс Кідрук',
    description: 'Науково-фантастичний роман про штучний інтелект.',
    status: 'default'
  },
  {
    id: 5,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Зазирни у мої сни',
    author: 'Макс Кідрук',
    description: 'Психологічний трилер про дослідження людських снів.',
    status: 'reading'
  },
  {
    id: 6,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Доки світло не згасне назавжди',
    author: 'Макс Кідрук',
    description: 'Історія про кохання і науку в світі, де стирається межа між життям і смертю.',
    status: 'borrowed'
  },
  {
    id: 7,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Лісова пісня',
    author: 'Леся Українка',
    description: 'Драма-феєрія про кохання Мавки і Лукаша.',
    status: 'read'
  },
  {
    id: 8,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Бояриня',
    author: 'Леся Українка',
    description: 'Історична драма про долю української жінки в московському полоні.',
    status: 'borrowed'
  },
  {
    id: 9,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Камінний господар',
    author: 'Леся Українка',
    description: 'Драма про Дон Жуана і його стосунки з жінками.',
    status: 'borrowed'
  },
  {
    id: 10,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'The Silence of the Lambs',
    author: 'Thomas Harris',
    description: 'A thriller about FBI agent Clarice Starling and the cannibalistic serial killer Hannibal Lecter.',
    status: 'default'
  },
  {
    id: 11,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Red Dragon',
    author: 'Thomas Harris',
    description: 'The story of FBI profiler Will Graham and his pursuit of the serial killer known as "The Tooth Fairy".',
    status: 'reading'
  },
  {
    id: 12,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Hannibal',
    author: 'Thomas Harris',
    description: 'The continuation of the story of Hannibal Lecter and Clarice Starling.',
    status: 'borrowed'
  },
  {
    id: 13,
    image: 'https://picsum.photos/200/300?random=1',
    title: '11/22/63',
    author: 'Stephen King',
    description: 'A time-travel novel about the assassination of John F. Kennedy.',
    status: 'default'
  },
  {
    id: 14,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Doctor Sleep',
    author: 'Stephen King',
    description: 'The sequel to The Shining, following the story of Danny Torrance as an adult.',
    status: 'reading'
  },
  {
    id: 15,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'The Institute',
    author: 'Stephen King',
    description: 'A thriller about a secret organization that abducts children with special abilities.',
    status: 'borrowed'
  },
  {
    id: 16,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Не озирайся і мовчи',
    author: 'Макс Кідрук',
    description: 'Науково-фантастичний роман про подорож у часі.',
    status: 'default'
  },
  {
    id: 17,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Твердиня',
    author: 'Макс Кідрук',
    description: 'Історія про екстремальну експедицію в Антарктиду.',
    status: 'reading'
  },
  {
    id: 18,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Коли зникне світло',
    author: 'Макс Кідрук',
    description: 'Фантастичний трилер про глобальну катастрофу.',
    status: 'borrowed'
  },
  {
    id: 19,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Кассандра',
    author: 'Леся Українка',
    description: 'Драма про пророчицю Кассандру, яка не була почута своїм народом.',
    status: 'default'
  },
  {
    id: 20,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Оргія',
    author: 'Леся Українка',
    description: 'Драма про боротьбу митців за свободу творчості в умовах тиранії.',
    status: 'reading'
  }
]

</script>

<template>
  <v-row class="mr-7 ml-7">
    <v-col v-for="book in books"
           :key="book.id"
           cols="12"
           sm="6"
           md="4"
           lg="3"
           xl="2"
    >
      <BookListItem :book="book" />
    </v-col>
  </v-row>
</template>

<style scoped lang="sass">
</style>
