var themeSwitcher = document.getElementById("switch")

if (localStorage.getItem("themeChanged") == false) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches == true) {
    setTheme("theme-dark")
  } else if (
    window.matchMedia("(prefers-color-scheme: light)").matches == true
  ) {
    setTheme("theme-light")
  } else {
    setTheme("theme-default")
  }
}

themeSwitcher.addEventListener("input", (e) => {
  localStorage.setItem("themeChanged", true)
  toggleTheme()
})

function setTheme(themeName) {
  localStorage.setItem("theme", themeName)
  document.documentElement.className = themeName
}

function toggleTheme() {
  if (themeSwitcher.value == 0) {
    setTheme("theme-default")
  } else if (themeSwitcher.value == 1) {
    setTheme("theme-light")
  } else {
    setTheme("theme-dark")
  }
}

function applyTheme() {
  if (localStorage.getItem("theme") === "theme-default") {
    setTheme("theme-default")
    themeSwitcher.value = 0
  } else if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-light")
    themeSwitcher.value = 1
  } else {
    setTheme("theme-dark")
    themeSwitcher.value = 2
  }
}

applyTheme()
