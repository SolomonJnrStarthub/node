
import LandingPage from './components/pages/LandingPage'
import play from './components/pages/playlist'
import About from './components/pages/about'


export default   [
    {path:'/', component:LandingPage},
    {path:'/play',component:play},
    {path:'/about',component:About}
]