!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.bint=t.bint||{})}(this,function(t){"use strict";var e=function(){function t(t){this.left=null,this.right=null,this.value=t}return t}(),n=function(){function t(t){this._compareFunction=t||function(t,e){return t-e},this._length=0,this._root=null}return Object.defineProperty(t.prototype,"length",{get:function(){return this._length},enumerable:!0,configurable:!0}),t.prototype.add=function(t){if(null===this._root)return this._root=new e(t),++this._length;for(var n=this._root;;){var r=this._compareFunction(n.value,t);if(r>0){if(null===n.left)return n.left=new e(t),++this._length;n=n.left}else{if(!(r<0))return this._length;if(null===n.right)return n.right=new e(t),++this._length;n=n.right}}},t.prototype.contains=function(t){if(null===this._root)return!1;for(var e=this._root;;){var n=this._compareFunction(e.value,t);if(0===n)return!0;if(n>0){if(null===e.left)return!1;e=e.left}else{if(!(n<0))return!1;if(null===e.right)return!1;e=e.right}}},t}();t.BinaryTree=n,Object.defineProperty(t,"__esModule",{value:!0})});
