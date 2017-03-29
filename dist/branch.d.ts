declare class Branch {
    left: Branch;
    right: Branch;
    value: any;
    constructor(value: any);
}
export default Branch;
