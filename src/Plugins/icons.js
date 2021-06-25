import Brand from '@/assets/icons/brand.svg'
import Home from 'feather-icons/dist/icons/home.svg'
import User from 'feather-icons/dist/icons/user.svg'
import Grid from 'feather-icons/dist/icons/grid.svg'
import Mail from 'feather-icons/dist/icons/mail.svg'
import Moon from 'feather-icons/dist/icons/moon.svg'
import Sun from 'feather-icons/dist/icons/sun.svg'
import Share2 from 'feather-icons/dist/icons/share-2.svg'
import ChevronsRight from 'feather-icons/dist/icons/chevrons-right.svg'
import ChevronsLeft from 'feather-icons/dist/icons/chevrons-left.svg'

const icons = {
  install(Vue) {
    Vue.component('BrandIcon', Brand)
    Vue.component('HomeIcon', Home)
    Vue.component('UserIcon', User)
    Vue.component('GridIcon', Grid)
    Vue.component('MailIcon', Mail)
    Vue.component('MoonIcon', Moon)
    Vue.component('SunIcon', Sun)
    Vue.component('Share2Icon', Share2)
    Vue.component('ChevronsRightIcon', ChevronsRight)
    Vue.component('ChevronsLeftIcon', ChevronsLeft)
  }
}

export default icons
