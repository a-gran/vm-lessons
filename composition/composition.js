// функции для создания объектов

// основной объект
function createProgrammer(name) {
  const programmer = { name }

  return {
    ...programmer,
    ...canCode(programmer)
  }
}

// основной метод
function canCode({ name }) {
  return {
    code: () => console.log(`${name} is coding...`)

  }
}

// функции, расширяющие методы основного объекта
function canAngular({ name }) {
  return {
    angular: () => console.log(`${name} is creating Angular app..`)

  }
}

function canNodejs({ name }) {
  return {
    nodejs: () => console.log(`${name} is programming on Nodejs...`)

  }
}

function canPython({ name }) {
  return {
    python: () => console.log(`${name} is programming on Python...`)

  }
}

function canReactAndVue({ name }) {
  return {
    react: () => console.log(`${name} is creating react app...`),
    vue: () => console.log(`${name} is creating vue app...`)

  }
}

// расширение базового объекта с помощью доп. методов
// применение КОМПОЗИЦИИ
function createFrontend(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canAngular(programmer)
  }
}

function createBackend(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canNodejs(programmer)
  }
}

function createFullstack(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canAngular(programmer),
    ...canNodejs(programmer)
  }
}

function createMegaProger(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canAngular(programmer),
    ...canNodejs(programmer),
    ...canPython(programmer)
  }
}

function createSuperMegaProger(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canAngular(programmer),
    ...canNodejs(programmer),
    ...canPython(programmer),
    ...canReactAndVue(programmer)
  }
}

// создание объектов и вызов их методов
const programmer = createProgrammer('Programmer')
programmer.code()

const frontend = createFrontend('Frontend')
frontend.code()
frontend.angular()

const backend = createBackend('Max')
backend.code()
backend.nodejs()

const fullstack = createFullstack('John')
fullstack.code()
fullstack.angular()
fullstack.nodejs()

const megaproger = createMegaProger('Vasilisk')
megaproger.code()
megaproger.angular()
megaproger.nodejs()
megaproger.python()

const supermegaproger = createSuperMegaProger('Tom')
supermegaproger.code()
supermegaproger.angular()
supermegaproger.nodejs()
supermegaproger.python()
supermegaproger.react()
supermegaproger.vue()