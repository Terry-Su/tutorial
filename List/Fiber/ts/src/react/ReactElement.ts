export type ReactElementType = string | Function

export class ReactElement {
  type: ReactElementType
  props: any

  constructor( type: ReactElementType, props: any ) {
    this.type = type
    this.props = props
  }
}

export function createElement( type: ReactElementType, props: any ) {
  return new ReactElement( type, props )
}