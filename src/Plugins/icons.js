import Brand from '@/assets/icons/brand.svg'
import Home from 'feather-icons/dist/icons/home.svg'
import User from 'feather-icons/dist/icons/user.svg'
import Grid from 'feather-icons/dist/icons/grid.svg'
import Mail from 'feather-icons/dist/icons/mail.svg'
import Moon from 'feather-icons/dist/icons/moon.svg'
import Sun from 'feather-icons/dist/icons/sun.svg'
import Github from 'feather-icons/dist/icons/github.svg'
import Instagram from 'feather-icons/dist/icons/instagram.svg'
import Dribbble from 'feather-icons/dist/icons/dribbble.svg'

const icons = {
  install(Vue) {
    Vue.component('BrandIcon', Brand)
    Vue.component('HomeIcon', Home)
    Vue.component('UserIcon', User)
    Vue.component('GridIcon', Grid)
    Vue.component('MailIcon', Mail)
    Vue.component('MoonIcon', Moon)
    Vue.component('SunIcon', Sun)
    Vue.component('GithubIcon', Github)
    Vue.component('InstagramIcon', Instagram)
    Vue.component('DribbbleIcon', Dribbble)
  }
}

export default icons
