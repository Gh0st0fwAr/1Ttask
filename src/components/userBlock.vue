
<template>
   
   <div :class="className" class="user">
      <div class="user__avatar">
         <img src="https://loremflickr.com/73/73/cat">
      </div>
      <div class="user__block">
         <div class="user__name">{{ userId }}</div>
         <div v-if="email" class="user__email">{{ email }}</div>
         <div class="user__title">{{ title }}</div>
      </div>
   </div>
      
</template>

<script>
export default {
   props: {
      userId: Number | String,
      email: Number | String,
      title: String,
      className: String
   }
}
</script>