import Vue from 'vue'
import Application from './components/Application.vue'
 
new Vue({
   render: h => h(Application)
 }).$mount('#app')
 
function greeter(person: string) {
    return "Hello, " +person;
}
 
var ka = greeter('ka');
console.log(ka);