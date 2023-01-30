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
        stage.addChildAt(this._sprite, stage.numChildren - 1);
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
    }
}
exports.Crosshair = Crosshair;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e2df4f7fba68c711aaaf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.56fb56688cc5406c044e.hot-update.js.map