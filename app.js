const html = require('choo/html')
const app = require('choo')()
const expose = require('choo-expose')
const log = require('choo-log')
const DRS = require('genie-drs')
const splashView = require('./views/splashView')
const drsView = require('./views/drsView')
const store = require('./store')

app.use(expose())
app.use(log())
app.use(store)

app.route('/', mainView)

function mainView (state, emit) {
  let view
  if (state.drs) {
    view = drsView(state, emit)
  } else {
    view = splashView(state, emit)
  }

  return html`
    <body>
      ${view}
    </body>
  `
}

app.mount('body')
