let current
let phase

export function setCurrentFiber( fiber ) {
  current = fiber
  phase = null
}