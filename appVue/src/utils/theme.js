// Theme management utility
class ThemeManager {
    constructor() {
        this.currentTheme = 'default';
        this.themePath = '/src/assets/styles/themes/';
    }

    // Get available themes
    getThemes() {
        return [
            { name: 'default', label: 'Default' },
            { name: 'dark', label: 'Dark' },
            { name: 'light', label: 'Light' }
        ];
    }

    // Set theme
    setTheme(themeName) {
        // Remove previously loaded theme
        const existingTheme = document.getElementById('app-theme');
        if (existingTheme) {
            existingTheme.remove();
        }

        // Load new theme
        // if (themeName !== 'default') {
            const link = document.createElement('link');
            link.id = 'app-theme';
            link.rel = 'stylesheet/less';
            link.type = 'text/css';
            link.href = `${this.themePath}${themeName}.less`;
            console.log(link.href, '哈哈哈');
            document.head.appendChild(link);
        // }

        // Update current theme
        this.currentTheme = themeName;
        localStorage.setItem('app-theme', themeName);

        // Update CSS variables for dynamic theme switching
        this.updateCSSVariables(themeName);
    }

    // Update CSS variables based on theme
    updateCSSVariables(themeName) {
        const root = document.documentElement;
        console.log(themeName, '哈哈1')
        if (themeName === 'dark') {
            root.style.setProperty('--color-background', '#cf0c0cff');
            root.style.setProperty('--color-background-d', '#de0808ff');
            root.style.setProperty('--color-text', '#de1919ff');
            root.style.setProperty('--color-text-d', '#cd1d1dff');
        } else if (themeName === 'light') {
            root.style.setProperty('--color-background', '#dbce16ff');
            root.style.setProperty('--color-background-d', '#c2dd27ff');
            root.style.setProperty('--color-text', '#a9d223ff');
            root.style.setProperty('--color-text-d', '#a0d32aff');
        } else {
            root.style.setProperty('--color-background', '#3b42beff');
            root.style.setProperty('--color-background-d', '#4019cbff');
            root.style.setProperty('--color-text', '#1725a3ff');
            root.style.setProperty('--color-text-d', '#171b8bff');
        }
    }

    // Load saved theme
    loadSavedTheme() {
        const savedTheme = localStorage.getItem('app-theme') || 'default';
        this.setTheme(savedTheme);
    }
}

export default new ThemeManager();