
import Home from '@/components/Home.vue'
import mainPage from '@/components/mainPage.vue'
import form from '@/components/form.vue'
import post from '@/components/post.vue'

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
         {
            path: '/',
            name: 'Main',
            component: mainPage
         },
         {
            path: '/form',
            name: 'Form',
            component: form
         },
         {
            path: '/posts/*',
            name: 'Post',
            component: post
         }
      ],
   },
   

]

export default routes;