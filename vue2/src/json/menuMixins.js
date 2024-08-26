import menus from '@/common/js/menus'
import { compare, macthOjbValue } from '@/utils/dict'

export const menuMixins = {
  data() {
    return {
      menuList: [],
      authorityCodes: []
    }
  },
  mounted() {
    this.checkMenu()
  },
  methods: {
    checkMenu() {
      let menuButton = sessionStorage.getItem('menuButton')
      let menuList = []
      if(menuButton === '1' ){
        let authorityList = JSON.parse(sessionStorage.getItem('userInfo')).authorityList
        menuList = authorityList.filter((item)=>{
          return item.transId === sessionStorage.getItem('currentMenu')
        })
      }else{
        menuList = macthOjbValue(
          sessionStorage.getItem('currentMenu'),
          menus.list,
          'menuList'
        )
      }
      this.menuList = menuList.sort(compare('authorityCode'))
      this.authorityCodes = menuList.map(item => {
        return item.authorityCode
      })
    }
  }
}
