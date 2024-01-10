import Id from "./Id"

export interface EntityProps {
  id?: string
}

export default abstract class Entity<T> {
  readonly id: Id
  readonly props: any

  constructor(props?: any) {
    this.id = new Id(props?.id)
    this.props = { ...props, id: this.id.value }
  }

  isEqual(entity: Entity<T>): boolean {
    return this.id.value === entity.id.value
  }

  isDifferent(entity: Entity<T>): boolean {
    return !this.isEqual(entity)
  }

  clone(newProps: any, ...args: any[]): T {
    return new (this.constructor as any)(
      { ...this.props, ...newProps },
      ...args
    )
  }
}
