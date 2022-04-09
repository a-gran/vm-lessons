import EventEmitter from 'events'

const emmitter = new EventEmitter()

// emmitter.on('anything', (data) => {
//   console.log('ON: anything', data)
// })

// emmitter.emit('anything', { a: 1 })

// setTimeout(() => {
//   emmitter.emit('anything', { c: 3 })
// }, 1500)

class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log('[Subscribe ...]')
    this.on(eventName, cb)
  }

  dispatch(eventName, data) {
    console.log('[Dispatching...]')
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher()

dis.subscribe('aa', (data) => {
  console.log('ON: aa', data)
})

dis.dispatch('aa', { aa: 22 })
