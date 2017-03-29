declare class BinaryTree {
    private _compareFunction;
    private _length;
    private _root;
    constructor(compareFunction?: (a: any, b: any) => number);
    readonly length: number;
    add(value: any): number;
    contains(value: any): boolean;
}
export { BinaryTree };
