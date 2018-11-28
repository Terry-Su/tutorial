import { HtmlElementReact } from "../__typings__";
import { createHostRootFiber, FiberNode } from "./Fiber";
import { NoWork } from "./ReactFiberExpirationTime";

export type FiberRoot = {
  current: FiberNode,
  expirationTime: number
}

export function createFiberRoot( container: HtmlElementReact ): FiberRoot {
  const uninitializedFiber = createHostRootFiber()
  const root = {
    current: uninitializedFiber,
    expirationTime: NoWork

  }
  uninitializedFiber.stateNode = root
  return root
}