export default class Todo {
  id?: string
  value: string
  completed: boolean

  constructor({
    id,
    value,
    completed,
  }: {
    id?: string,
    value: string,
    completed: boolean
  }) {
    this.id = id
    this.value = value
    this.completed = completed
  }
}
