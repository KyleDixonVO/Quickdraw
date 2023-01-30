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
    constructor(stage, assetManager, animation) {
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
    }
}
exports.Crosshair = Crosshair;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("994324fbb2d1238f9c0f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.662535a813763dd2e388.hot-update.js.map