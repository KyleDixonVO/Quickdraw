"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Snake.ts":
/*!**********************!*\
  !*** ./src/Snake.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Snake = void 0;
const Character_1 = __webpack_require__(/*! ./Character */ "./src/Character.ts");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Snake extends Character_1.Character {
    constructor(stage, assetManager) {
        super(stage, assetManager, "snake/alive");
        this.eventKilled = new createjs.Event("snakeKilled", true, false);
        this.eventSpeedChange = new createjs.Event("snakeSpeedChange", true, false);
    }
    onSlowDown() {
        this._speed = this._speed - 1;
        this._sprite.dispatchEvent(this.eventSpeedChange);
        if (this._speed <= 0) {
            this.killMe();
        }
    }
    startSlowDown() {
        this.slowDownTimer = window.setInterval(() => this.onSlowDown(), Constants_1.SNAKE_SLOW_DELAY);
    }
    rotateMe() {
        this.mouseX = this.stage.mouseX;
        this.mouseY = this.stage.mouseY;
        let radians = Math.atan2((this.mouseY - this._sprite.y), (this.mouseX - this._sprite.x));
        super.rotateMe(this.toDegrees(radians));
    }
    killMe() {
        this._state = Character_1.Character.STATE_DEAD;
        this.stopMe();
        this._sprite.on("animationend", function () {
            this._sprite.stop();
        }, this, true);
        this._sprite.gotoAndPlay("snake/dead");
        window.clearInterval(this.slowDownTimer);
        this._sprite.dispatchEvent(this.eventKilled);
    }
    update() {
        super.update();
        if ((Math.abs(this._sprite.x - this.mouseX) < 15) && (Math.abs(this._sprite.y - this.mouseY) < 15)) {
            this.stopMe();
        }
    }
}
exports.Snake = Snake;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5bf85039ecfdf2be2a73")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d405b946a58025514980.hot-update.js.map