import { FiberNode } from "./Fiber";
import { HostRoot, ClassComponent } from "../shared/ReactWorkTags";
import { UpdateQueue, processUpdateQueue } from "./ReactUpdateQueue";
import { readLazyComponentType } from "./ReactFiberLazyComponent";

export function reconcileChildFibers(
  current: FiberNode,
  workInProgress: FiberNode,
  nextChildren: any,
  renderExpirationTime: number
): FiberNode {
  return;
}

export function reconcileChildren(
  current: FiberNode,
  workInProgress: FiberNode,
  nextChildren: any,
  renderExpirationTime: number
) {
  workInProgress.child = reconcileChildFibers(
    workInProgress,
    current,
    nextChildren,
    renderExpirationTime
  );
}

export function updateHostRoot(
  current: FiberNode,
  workInProgress: FiberNode,
  renderExpirationTime: number
) {
  const {
    updateQueue,
    pendingProps: nextProps,
    memoizedState: nextState
  } = workInProgress;

  processUpdateQueue(
    workInProgress,
    updateQueue,
    nextProps,
    null,
    renderExpirationTime
  );

  const nextChildren = nextState.element;
  reconcileChildren(
    current,
    workInProgress,
    nextChildren,
    renderExpirationTime
  );
  return workInProgress.child;
}

export function beginWork(
  current: FiberNode,
  workInProgress: FiberNode,
  renderExpirationTime: number
) {
  switch (workInProgress.tag) {
    case HostRoot:
      return updateHostRoot(current, workInProgress, renderExpirationTime);
    case ClassComponent:
      const Component = workInProgress.type;
      const unresolvedProps = workInProgress.pendingProps;
      const resolvedProps =
        workInProgress.elementType === Component
          ? unresolvedProps
          : resolveDefaultProps(Component, unresolvedProps);
      return updateClassComponent(
        current,
        workInProgress,
        Component,
        resolvedProps,
        renderExpirationTime
      );
  }
}
