import { HostRoot, WorkTag } from "../shared/ReactWorkTags";
import { UpdateQueue } from "./ReactUpdateQueue";

export class FiberNode {
  // The tag identifying the type of fiber
  tag: WorkTag

  type: string | Function

  // a fiber root or a instance of component?
  stateNode: any

  child: FiberNode
  sibling: FiberNode
  // the fiber returned after processing the current one
  return: FiberNode

  // the arguments of a function
  // when the incoming pendingProps are equal to
  // moizedProps, it indicates the previous output
  // can be reused
  pendingProps: any
  memoizedProps: any

  // A queue of state updates and callbacks
  updateQueue: UpdateQueue<any>

  // the state used to create the output
  memoizedState: any

  // it can be either a:
  // 1. work-in-progress fiber
  // 2. flushed fiber
  alternate

  constructor( tag, pendingProps ) {
    this.tag = tag

    this.pendingProps = pendingProps
  }
}

export function createFiber( tag: WorkTag, pendingProps ) {
  return new FiberNode( tag, pendingProps )
}


export function createHostRootFiber() {
  return createFiber( HostRoot, null )
}