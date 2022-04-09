class Programmer {
  constructor(name) {
    this.name = name

  }

  code() {
    console.log(`${this.name} is coding...`)
  }
}

class Frontend extends Programmer {
  angular() {
    console.log(`${this.name} is creating Angular app..`)
  }
}

class Backend extends Programmer {
  nodejs() {
    console.log(`${this.name} is programming on Nodejs...`)
  }
}

class Fullstack extends Frontend {
  // дублирование кода
  nodejs() {
    console.log(`${this.name} is programming on Nodejs...`)
  }
}

const programmer = new Programmer('Programmer')
programmer.code()

const frontend = new Frontend('Alex')
frontend.code()
frontend.angular()

const backend = new Backend('Max')
backend.code()
backend.nodejs()

const fullstack = new Fullstack('Oleg')
fullstack.code()
fullstack.angular()
fullstack.nodejs()

