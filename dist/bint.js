import Branch from './branch';
var BinaryTree = (function () {
    function BinaryTree(compareFunction) {
        this._compareFunction = compareFunction || (function (a, b) { return a - b; });
        this._length = 0;
        this._root = null;
    }
    Object.defineProperty(BinaryTree.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: true,
        configurable: true
    });
    BinaryTree.prototype.add = function (value) {
        if (this._root === null) {
            this._root = new Branch(value);
            return ++this._length;
        }
        var branch = this._root;
        while (true) {
            var dif = this._compareFunction(branch.value, value);
            if (dif > 0) {
                // Fall to the left
                if (branch.left === null) {
                    branch.left = new Branch(value);
                    return ++this._length;
                }
                else {
                    branch = branch.left;
                }
            }
            else if (dif < 0) {
                if (branch.right === null) {
                    branch.right = new Branch(value);
                    return ++this._length;
                }
                else {
                    branch = branch.right;
                }
            }
            else {
                return this._length;
            }
        }
    };
    BinaryTree.prototype.contains = function (value) {
        if (this._root === null)
            return false;
        var branch = this._root;
        while (true) {
            var dif = this._compareFunction(branch.value, value);
            if (dif === 0) {
                return true;
            }
            else if (dif > 0) {
                if (branch.left === null)
                    return false;
                branch = branch.left;
            }
            else if (dif < 0) {
                if (branch.right === null)
                    return false;
                branch = branch.right;
            }
            else {
                return false;
            }
        }
    };
    return BinaryTree;
}());
export { BinaryTree };
