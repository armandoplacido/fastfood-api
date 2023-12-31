import { UniqueEntityID } from './unique-entity-id'

export abstract class Entity<EntityProps> {
  private _id: UniqueEntityID
  protected props: EntityProps

  get id(): UniqueEntityID {
    return this._id
  }

  protected constructor(props: EntityProps, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID()
  }

  public equals(entity: Entity<any>) {
    if (entity === this) {
      return true
    }

    if (entity.id === this._id) {
      return true
    }

    return false
  }
}
