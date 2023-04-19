const signUp = document.querySelector('#signUp')
const signIn = document.querySelector('#signIn')
const container = document.querySelector('#container')

signUp.addEventListener('click', () => {
  container.classList.add('right-panel-active')
})

signIn.addEventListener('click', () => {
    container.classList.remove('right-panel-active')
})