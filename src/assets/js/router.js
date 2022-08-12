import homepage from '../../components/homepage.vue'
import VueRouter from 'vue-router'
import details from '../../components/details.vue'
import list from '../../components/list.vue'
import my from '../../components/my.vue'
import shoppingcart from '../../components/shoppingcart.vue'
var router = new VueRouter({
    routes:[
        {
            path:'/homepage',
            component:homepage
        },
        {
            path:'/shoppingcart',
            component:shoppingcart
        },
        {
            path:'/list',
            component:list
        },
        {
            path:'/my',
            component:my
        },
        {
            path:'/details',
            component:details
        },
        {
            path:"/*",
            redirect:'/homepage'
        }
    ]
})
export default router;