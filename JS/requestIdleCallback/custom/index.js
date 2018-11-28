/**
 * The user agent's main thread often becomes idle until either:
 * 1. the next frame begins
 * 2. another pending task becomes eligible to run
 * 3. user input is received
 */
const box1 = document.getElementById( 'box1' )

const move = () => {
  box1.style.left = box1.getBoundingClientRect().left + 6 + 'px'
}

let start

function run( timestamp ) {
  console.log( timestamp )
  if ( ! start ) {
    start = timestamp
  }

  const process = timestamp - start
  if ( process < 2000 ) {
    move()
    window.requestAnimationFrame( run )
  }
}

// window.requestAnimationFrame( run )


setInterval( () => {
  window.requestAnimationFrame( time => console.log( time ) )
}, 1000 )