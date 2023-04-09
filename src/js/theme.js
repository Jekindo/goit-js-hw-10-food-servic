const themeToggle = document.querySelector('#theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

setTheme();

themeToggle.addEventListener('change', onThemeChange);

function onThemeChange(evt) {
  document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.DARK);

  if (evt.currentTarget.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function setTheme() {
  const checkedTheme = localStorage.getItem('theme');

  if (!checkedTheme) {
    document.body.classList.add(Theme.LIGHT);
    return;
  }

  if (checkedTheme === Theme.DARK) {
    themeToggle.checked = true;
    document.body.classList.add(checkedTheme);
  }
}
