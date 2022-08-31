
<template>
   <div class="post">
      <card :userId="usernames[card.userId]"
            :title="card.title"
            :body="card.body"
            :email="usernames[card.userId]"></card>
      <div class="post__comments">
         <div v-for="comment in comments" class="post__comment">
            <user-block :userId="comment.name"
                        :title="comment.body"
                        :email="comment.email"
                        :className="'post__padding'"></user-block>
         </div>
      </div>
   </div>
</template>

<script>


import usernames from '../utils/usernames.json';

export default {
   data() {
      return {
         card: Object,
         comments: Array,
         usernames
      }
   },
   components: { 
      card: () => import('./card.vue'),
      userBlock: () => import ('./userBlock.vue')
   },
   methods: {
      getPost(id) {
         this.axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(r => {
            this.card = r.data;
         })
      },
      getComments(id) {
         this.axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + id).then(r => {
            console.log(r.data)
            this.comments = r.data;
         }) 
      }
   },
   created() {
      let id = this.$route.params.pathMatch
      this.getPost(id);
      this.getComments(id);
   }
}
</script>