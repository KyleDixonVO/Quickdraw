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
        this.txtScore = new createjs.BitmapText("0", assetManager.getSpriteSheet("glyphs"));
        this.txtScore.x = 177;
        this.txtScore.y = 13;
        this.txtScore.letterSpacing = 2;
        stage.addChild(this.txtScore);
        this.speedBar = assetManager.getSprite("sprites", "misc/speedBar", 41, 15);
        stage.addChild(this.speedBar);
        this.resetMe();
    }
    set kills(value) {
        this._kills = value;
        this.txtScore.text = String(this._kills);
    }
    set health(value) {
        this._health = value;
        let factor = value / Constants_1.PLAYER_HEALTH;
        this.speedBar.scaleX = factor;
    }
    resetMe() {
        this.kills = 0;
        this.health = Constants_1.PLAYER_HEALTH;
        this.speedBar.scaleX = 1;
    }
}
exports.UserInterface = UserInterface;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("471c84aca24b8739d095")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.65ad15316be0954e6887.hot-update.js.map