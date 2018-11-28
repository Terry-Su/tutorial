import { createElement as h } from "../react/ReactElement";
import ReactDOM from "../react-dom/ReactDOM";
import { JSDOM } from 'jsdom'


function getWindow() {
  const dom = new JSDOM(``);
  return dom.window
}

describe( 'Test', () => {
  it( 'Test', () => {
    const { document } = getWindow()
    const container = document.createElement( 'div' )
    ReactDOM.render( h( 'div', {
      style: "background: blue;"
    } ), container )
  } )
} )