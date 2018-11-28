import { ReactElement } from "../react/ReactElement";
import { HtmlElementReact } from "../__typings__";
import { createContainer, updateContainer } from "../react-reconciler/ReactFiberReconciler";
import { FiberRoot } from "../react-reconciler/ReactFiberRoot";


export class ReactRoot {
  _internalRoot: FiberRoot
  constructor( container: HtmlElementReact ) {
    this._internalRoot = createContainer( container )
  }

  render( children ) {
    updateContainer( children, this._internalRoot )
  }
}

const ReactDOM = {
  render( element: ReactElement, container: HtmlElementReact ) {
    if ( container._reactRootContainer == null ) {
      container._reactRootContainer = new ReactRoot( container )
    }
    container._reactRootContainer.render()
  } 
}

export default ReactDOM

