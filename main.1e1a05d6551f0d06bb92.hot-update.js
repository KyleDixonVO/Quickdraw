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
        this.healthBar = assetManager.getSprite("sprites", "misc/speedBar", 41, 15);
        stage.addChild(this.healthBar);
        this.bullet0 = assetManager.getSprite("sprites", "misc/Bullet", Constants_1.STAGE_WIDTH - 32, 60);
        stage.addChild(this.bullet0);
        this.bullet1 = assetManager.getSprite("sprites", "misc/Bullet", this.bullet0.x - 32, 60);
        stage.addChild(this.bullet1);
        this.bullet2 = assetManager.getSprite("sprites", "misc/Bullet", this.bullet1.x - 32, 60);
        stage.addChild(this.bullet2);
        this.bullet3 = assetManager.getSprite("sprites", "misc/Bullet", this.bullet2.x - 32, 60);
        stage.addChild(this.bullet3);
        this.bullet4 = assetManager.getSprite("sprites", "misc/Bullet", this.bullet3.x - 32, 60);
        stage.addChild(this.bullet4);
        this.bullet5 = assetManager.getSprite("sprites", "misc/Bullet", this.bullet4.x - 32, 60);
        stage.addChild(this.bullet5);
        this.resetMe();
    }
    set kills(value) {
        this._kills = value;
        this.txtScore.text = String(this._kills);
    }
    set health(value) {
        this._health = value;
        let factor = value / Constants_1.PLAYER_HEALTH;
        this.healthBar.scaleX = factor;
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
/******/ 	__webpack_require__.h = () => ("fcd5dcea9100b797d444")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1e1a05d6551f0d06bb92.hot-update.js.map