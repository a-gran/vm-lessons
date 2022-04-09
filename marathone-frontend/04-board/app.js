const board = document.querySelector('#board')
const colors = [
  '#c3ce74',
  '#4ad8e4',
  '#8db349',
  '#e22e67',
  '#c712ec',
  '#cdb7b5',
  '#c1e119',
]
const SQUARES_NUMBER = 2000

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  // square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseover', setColor)

  // square.addEventListener('mouseleave', () => removeColor(square))
  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

// function getRandomColor() {
//   const index = Math.floor(Math.random() * colors.length)
//   return colors[index]
// }

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
