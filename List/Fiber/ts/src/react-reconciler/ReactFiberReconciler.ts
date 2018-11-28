import { HtmlElementReact } from "../__typings__";
import { createFiberRoot, FiberRoot } from "./ReactFiberRoot";
import { ReactElement } from "../react/ReactElement";
import { requestCurrentTime, computeExpirationForFiber, scheduleWork } from "./ReactFiberScheduler";
import { FiberNode } from "./Fiber";
import { createUpdate, enqueueUpdate } from "./ReactUpdateQueue";


export function scheduleRootUpdate( current: FiberNode, element: ReactElement, expirationTime: number ) {
  const update = createUpdate( expirationTime )

  update.payload = { element: element }

  enqueueUpdate( current, update )
  scheduleWork( current, expirationTime )
  return expirationTime
}


export function updateContainerAtExpirationTime( element: ReactElement, container: FiberRoot,  expirationTime: number ) {
  const { current } = container
  return scheduleRootUpdate( current, element, expirationTime )
}


export function createContainer( container: HtmlElementReact ):FiberRoot {
  return createFiberRoot( container ) 
}

export function updateContainer( element: ReactElement, container: FiberRoot ) {
  const { current } = container
  const currentTime = requestCurrentTime()
  const expirationTime = computeExpirationForFiber( currentTime, current )
  return updateContainerAtExpirationTime(
    element,
    container,
    expirationTime
  )
}

