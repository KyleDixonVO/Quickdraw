"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/UserInterface.ts":
/*!******************************!*\
  !*** ./src/UserInterface.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserInterface = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class UserInterface {
    constructor(stage, assetManager) {
        this.stage = stage;
        this.sprite = assetManager.getSprite("sprites", "misc/userInterface", 10, 10);
        stage.addChild(this.sprite);
        this.txtBugs = new createjs.BitmapText("0", assetManager.getSpriteSheet("glyphs"));
        this.txtBugs.x = 177;
        this.txtBugs.y = 13;
        this.txtBugs.letterSpacing = 2;
        stage.addChild(this.txtBugs);
        this.speedBar = assetManager.getSprite("sprites", "misc/speedBar", 41, 15);
        stage.addChild(this.speedBar);
        this.resetMe();
    }
    set kills(value) {
        this._kills = value;
        this.txtBugs.text = String(this._kills);
    }
    set speed(value) {
        this._speed = value;
        let factor = value / Constants_1.PLAYER_HEALTH;
        this.speedBar.scaleX = factor;
    }
    resetMe() {
        this.kills = 0;
        this.speed = SNAKE_MAX_SPEED;
        this.speedBar.scaleX = 1;
    }
}
exports.UserInterface = UserInterface;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a40f7db0bdb581c752ce")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.10c8ad0f237373d6834d.hot-update.js.map