import Name from "../../shared/value-objects/Name"
import Price from "../../shared/value-objects/Price"
import Entity, { EntityProps } from "../../shared/value-objects/Entity"

export interface CourseProps extends EntityProps {
  name: string
  price: number
}

export default class Course extends Entity<Course> {
  readonly name: Name
  readonly price: Price

  constructor(props: CourseProps) {
    super(props)
    this.name = new Name(props.name)
    this.price = new Price(props.price)
  }
}
