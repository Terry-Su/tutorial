import { FiberNode } from "../react-reconciler/Fiber";

export default class Component {
  props: any
  constructor( props ) {
    this.props = props
  }
  currentFiber: FiberNode
  flushedFiber: FiberNode
  workInProgress: FiberNode
}