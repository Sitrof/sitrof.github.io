function switchTheme() {
  var check = document
  .getElementById('theme_css')
  .classList[0] === 'light';

  var element = document.getElementById('theme_css');


  if (check) {
   element.href = 'themes/dark.css';
   element.classList.remove('light')
   element.classList.add('dark');
  } else {
   element.href = 'themes/light.css';
   element.classList.remove('dark');
   element.classList.add('light');
  }

}
