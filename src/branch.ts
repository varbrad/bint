class Branch {
  public left: Branch
  public right: Branch
  public value: any

  constructor(value: any) {
    this.left = null
    this.right = null
    this.value = value
  }
}

export default Branch
