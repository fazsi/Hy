// Import modul yang diperlukan
const { Plugin, StatusBarButton, ThemeManager } = require('@acode/extension-kit');

// Buat objek plugin
const themePlugin = new Plugin({
  name: 'ThemePlugin',
  description: 'Plugin untuk mengganti tema ACode.',
});

// Fungsi untuk menerapkan tema gelap
function applyDarkTheme() {
  ThemeManager.setTheme('dark');
}

// Fungsi untuk menerapkan tema terang
function applyLightTheme() {
  ThemeManager.setTheme('light');
}

// Tambahkan tombol di bilah status untuk mengganti tema
const darkThemeButton = new StatusBarButton('Tema Gelap', applyDarkTheme);
const lightThemeButton = new StatusBarButton('Tema Terang', applyLightTheme);

// Tambahkan tombol ke bilah status ACode
themePlugin.addStatusBarButton(darkThemeButton);
themePlugin.addStatusBarButton(lightThemeButton);

// Daftarkan plugin
themePlugin.register();