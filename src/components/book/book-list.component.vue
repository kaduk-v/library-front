<script setup lang="ts">
const books = [
  {
    id: 1,
    image: 'https://picsum.photos/300/300?random=1',
    title: 'The Shining',
    author: 'Stephen King',
    description: 'A horror novel about a haunted hotel.',
    status: 'read' // Status can be 'default', 'reading', 'borrowed'
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
    status: 'default'
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
  <v-row class="mr-7 ml-7">
    <v-col v-for="book in books"
           :key="book.id"
           cols="12"
           sm="6"
           md="4"
           lg="4"
           xl="2"
    >
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

        <v-card-actions class="bg-grey">
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
    </v-col>
  </v-row>
</template>

<style scoped lang="sass">
.chip-container
  position: absolute
  top: 0
  left: 0
  right: 0
  display: flex
  justify-content: end
  padding: 5px
  color: rgba(0, 128, 0, 0.5)

.reading
  color: rgba(0, 128, 0, 0.6)

.read
  color: rgba(128, 0, 128, 0.43)

.borrowed
  color: rgba(255, 0, 0, 0.56)

</style>
