import Branch from './branch'

class BinaryTree {
  private _compareFunction: (a: any, b: any) => number
  private _length: number
  private _root: Branch

  constructor(compareFunction?: (a: any, b: any) => number) {
    this._compareFunction = compareFunction || ((a: any, b: any) => a - b)
    this._length = 0
    this._root = null
  }

  get length(): number {
    return this._length
  }

  public add(value: any): number {
    if (this._root === null) {
      this._root = new Branch(value)
      return ++this._length
    }

    let branch: Branch = this._root
    while (true) {
      const dif = this._compareFunction(branch.value, value)
      if (dif > 0) {
        // Fall to the left
        if (branch.left === null) {
          branch.left = new Branch(value)
          return ++this._length
        } else {
          branch = branch.left
        }
      } else if (dif < 0) {
        if (branch.right === null) {
          branch.right = new Branch(value)
          return ++this._length
        } else {
          branch = branch.right
        }
      } else {
        return this._length
      }
    }
  }

  public contains(value: any): boolean {
    if (this._root === null) return false

    let branch: Branch = this._root
    while (true) {
      const dif = this._compareFunction(branch.value, value)
      if (dif === 0) {
        return true
      } else if (dif > 0) {
        if (branch.left === null) return false
        branch = branch.left
      } else if (dif < 0) {
        if (branch.right === null) return false
        branch = branch.right
      } else {
        return false
      }
    }
  }
}

export { BinaryTree }
