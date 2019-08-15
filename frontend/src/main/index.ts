import Vue from 'vue'
import VueRouter from 'vue-router'
import Application from './components/Application.vue'
import RecipeListPage from './pages/RecipeListPage.vue'
import RecipeDetailsPage from './pages/RecipeDetailsPage.vue'


Vue.use(VueRouter);

const Home  = {
  template: '<div>Home Tests</div>'
}

const routes = [
  { path: '/', component: Home},
  { path: '/recipe', component: RecipeListPage },
  { path: '/recipe/:id/details', component: RecipeDetailsPage} 
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  render: h => h(Application),
  router
}).$mount('#app')


function greeter(person: string) {
    return "Hello, " +person;
}
 
var ka = greeter('ka');
console.log(ka);