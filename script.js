import getDayInfo from "./Date.js";

const upButton = document.querySelector('.up')
const input = document.querySelector('.dateInput')
const output = document.querySelector('.dateOutput')

const goUp = () => {
  window.scrollTo(0, 0);
}

const toggleUp = () => {

  if (window.pageYOffset < 200) {
    if (!upButton.classList.contains('hidden')) { upButton.classList.add('hidden') }
  } else {
    if (upButton.classList.contains('hidden')) { upButton.classList.remove('hidden') }
  }
}

upButton.addEventListener('click', goUp)

document.addEventListener('scroll', toggleUp)
input.addEventListener('change', () => getDayInfo(input.value, output))