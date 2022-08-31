
<template>
   <div class="form">
      <div class="form__row">
         <label>
            <div class="form__title">Name</div>
            <input v-model="name" type="text" class="form__input">
         </label>
      </div>
      <div class="form__row">
         <label>
            <div class="form__title">Title</div>
            <input v-model="title" type="text" class="form__input">
         </label>
      </div>
      <div class="form__textarea">
         <div class="form__title">Text</div>
         <textarea v-model="body" type="text" cols="45" rows="10" class="form__textarea"></textarea>
      </div>
      <div class="form__submit">
         <button @click="submit" class="form__button">Submit</button>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         name: '',
         title: '',
         body: ''
      }
   },
   methods: {
      submit() {
         let formData = {
            userId: this.name,
            title: this.title,
            body: this.body
         }
         this.axios.post('https://jsonplaceholder.typicode.com/posts', formData).then(r => {
            this.$emit('new-post', r.data)
            this.name = this.title = this.body = '';
         })
      }
   }
}
</script>