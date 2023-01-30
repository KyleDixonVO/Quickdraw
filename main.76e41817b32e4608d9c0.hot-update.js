"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Crosshair.ts":
/*!**************************!*\
  !*** ./src/Crosshair.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Crosshair = void 0;
class Crosshair {
    constructor(stage, assetManager, animation, player) {
        this.player = player;
        this._sprite = assetManager.getSprite("sprites", animation, 300, 300);
        this.stage = stage;
        stage.addChild(this._sprite);
    }
    get sprite() {
        return this._sprite;
    }
    GetMousePosition() {
        this.mouseX = this.stage.mouseX;
        this.mouseY = this.stage.mouseY;
    }
    SetCrosshairPosition() {
        this._sprite.x = this.mouseX;
        this._sprite.y = this.mouseY;
    }
    Update() {
        this.GetMousePosition();
        this.SetCrosshairPosition();
        let numberChildren = this.stage.numChildren;
        if (this.stage.getChildIndex(this._sprite) < numberChildren - 1) {
            this.stage.swapChildren(this._sprite, this.stage.children[numberChildren - 1]);
        }
    }
}
exports.Crosshair = Crosshair;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d4dedca4e4405d1fc89e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.76e41817b32e4608d9c0.hot-update.js.map