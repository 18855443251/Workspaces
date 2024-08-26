import ThemeJson from '@/json/theme.json'
import state from './state'
export default {
    themeStyle() {
        return ThemeJson[state.theme]
    }
}