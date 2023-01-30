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
    constructor(stage, assetManager, player) {
        this.health = player.health;
        this.stage = stage;
        this.factor = 1;
        this.sprite = assetManager.getSprite("sprites", "misc/userInterface", 10, 10);
        stage.addChild(this.sprite);
        this.txtScore = new createjs.BitmapText("0", assetManager.getSpriteSheet("glyphs"));
        this.txtScore.x = 177;
        this.txtScore.y = 13;
        this.txtScore.letterSpacing = 2;
        stage.addChild(this.txtScore);
        this.healthBar = assetManager.getSprite("sprites", "misc/speedBar", 41, 15);
        stage.addChild(this.healthBar);
        this.resetMe();
    }
    set kills(value) {
        this._kills = value;
        this.txtScore.text = String(this._kills);
    }
    get health() {
        return this._health;
    }
    set health(value) {
        this._health = value;
        this.factor = value / Constants_1.PLAYER_HEALTH;
        this.healthBar.scaleX = this.factor;
    }
    resetMe() {
        this.kills = 0;
        this._health = Constants_1.PLAYER_HEALTH;
        this.healthBar.scaleX = 1;
    }
}
exports.UserInterface = UserInterface;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("843187cd6cf947d91c22")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.7853ff23b45ba59a8c16.hot-update.js.map