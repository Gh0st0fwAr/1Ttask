<template>
   <div class="overview">
      <div @click="processSort" class="overview__sort">
         <font-awesome-icon :class="{'overview__arrow--active' : sortDirection}" class="overview__arrow" :icon="'arrow-down'">            
         </font-awesome-icon>
         <div class="overview__icon">AZ</div>
      </div>
      <div class="overview__filterwrapper">
         <label class="overview__label">
            <input v-model="filter" type="text" name="" id="" class="overview__filter">
            <div class="overview__title">Filter</div>
         </label>
      </div>
      <div class="overview__news">
         <router-link :tag="'div'" :to="'/posts/' + card.id" v-for="card in filteredCards" class="overview__link">
            <card :userId="card.userId" :title="card.title"></card>
         </router-link>
      </div>
   </div>
</template>

<script>

import usernames from '../utils/usernames.json';

export default {
   data() {
      return {
         cards: [],
         filteredCards: [],
         sortDirection: true,
         filter: '',
         usernames
      }
   },
   props: {
      customPosts: Array
   },
   components: {
      card: () => import('./card.vue')
   },
   watch: {
      filter: {
         immediate: false,
         handler: function() {
            this.filteredCards = this.cards.filter(card => {
               console.log(card.userId.toString().indexOf(this.filter))
               return card.userId.toString().indexOf(this.filter) !== -1
            })
         }
      }
   },
   methods: {
      processSort() {
         this.sortDirection = !this.sortDirection;
         this.sortPosts();
      },
      sortPosts() {
            if (this.sortDirection) {
               this.filteredCards.sort(function(a, b) {
                  if (a['title'] > b['title']) {return -1;}
                  if (a['title'] < b['title']) {return 1;}
                  return 0
               })
            } else {
               this.filteredCards.sort(function(a, b) {
                  if (a['title'] < b['title']) {return -1;}
                  if (a['title'] > b['title']) {return 1;}
                  return 0
               })
            }
         },
      getPosts() {
         this.axios.get('https://jsonplaceholder.typicode.com/posts').then(r => {
            console.log(r);
            this.processUsernames(r.data)
            
         })
      },
      processUsernames(data) {
         let cards = data;
         cards.forEach(card => {
            card.userId = this.usernames[card.userId]
         })
         this.customPosts.forEach(post => {
            cards.unshift(post);
         })
         this.cards = cards;
         this.filteredCards = cards;
      }
   },
   created() {
      this.getPosts();
   }
}
</script>