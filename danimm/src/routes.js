import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Description from '@/components/Description.vue'
import Portfolio from '@/components/Portfolio.vue'

const routes = [
  { path: '/', component: Home, name: '/' },
  { path: '/about', component: About, name: 'about' },
  { path: '/description', component: Description, name: 'description' },
  { path: '/portfolio', component: Portfolio, name: 'portfolio' }
]

export default routes
