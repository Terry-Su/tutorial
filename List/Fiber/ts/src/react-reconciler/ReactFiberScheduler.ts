import { FiberNode } from "./Fiber";
import { FiberRoot } from "./ReactFiberRoot";
import { Sync, NoWork } from "./ReactFiberExpirationTime";
import { setCurrentFiber } from "./ReactCurrentFiber";
import { beginWork } from "./ReactFiberBeginWork";


let nextFlushedRoot: FiberRoot
let nextFlushedExpirationTime: number = NoWork


let isRendering: boolean = false

// The next work in progress fiber that we're currently working on.
let nextUnitOfWork

// The timea t which we're currently rendering 
let nextRenderExpirationTime = NoWork

export function requestCurrentTime(): number {
  return 
}

export function computeExpirationForFiber( currentTime: number, fiber ): number {
  return
}


export function scheduleWorkToRoot( fiber: FiberNode, expirationTime: number ): FiberRoot {
  return
}

export function addRootToSchedule( root: FiberRoot, expirationTime: number ) {

}

export function findHighestPriorityRoot() {

}

export function resetStack() {

}

export function performUnitOfWork( workInProgress: FiberNode ) {
  const { alternate: current } = workInProgress

  setCurrentFiber(workInProgress)

  let next
  
  next = beginWork( current, workInProgress, nextRenderExpirationTime )
}

export function workLoop( isYieldy: boolean ) {
  performUnitOfWork(nextUnitOfWork)
}

export function renderRoot( root: FiberRoot, isYieldy: boolean, isExpired: boolean  ) {
  resetStack()
  workLoop( isYieldy )  
}

export function performWorkOnRoot( root: FiberRoot, expirationTime: number, isExpired: boolean ) {
  isRendering = true

  const isYieldy = false
  renderRoot(root, isYieldy, isExpired);

  isRendering = false
}

export function performWork( minExpirationTime: number, dl: number ) {
  // Keep working on roots until there's no more work, or until we reach
  // the deadline.
  findHighestPriorityRoot()
  
  performWorkOnRoot(nextFlushedRoot, nextFlushedExpirationTime, true);
  findHighestPriorityRoot()
}

export function performSyncWork() {
  performWork( Sync, null )
}

export function requestWork( root: FiberRoot, expirationTime: number ) {
  addRootToSchedule( root, expirationTime )

  performSyncWork()
}

export function scheduleWork( fiber: FiberNode, expirationTime: number ) {
  const root = scheduleWorkToRoot( fiber, expirationTime )

  const { expirationTime: rootExpirationTime } = root
  requestWork( root, rootExpirationTime )
}