import { FiberNode } from "./Fiber";

// This API will tag the children with the side-effect of the reconciliation
// itself. They will be added to the side-effect list as we pass through the
// children and the parent.
export function reconcileChildFibers( returnFiber: FiberNode, currentFirstChild: FiberNode, newChild: any, expirationTime: number ) {

}