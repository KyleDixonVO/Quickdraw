"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Character.ts":
/*!**************************!*\
  !*** ./src/Character.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Character = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Character {
    constructor(stage, assetManager, animation) {
        this._speed = Constants_1.SNAKE_MAX_SPEED;
        this._state = Character.STATE_IDLE;
        this.stage = stage;
        this.xDisplace = 0;
        this.yDisplace = 0;
        this._sprite = assetManager.getSprite("sprites", animation, 300, 300);
    }
    set speed(value) {
        this._speed = value;
    }
    get speed() {
        return this._speed;
    }
    get state() {
        return this._state;
    }
    get sprite() {
        return this._sprite;
    }
    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    toDegrees(radians) {
        return radians * (180 / Math.PI);
    }
    showMe() {
        this.stage.addChild(this._sprite);
    }
    hideMe() {
        this._sprite.stop();
        this.stage.removeChild(this._sprite);
    }
    rotateMe(degrees) {
        if (this._state == Character.STATE_DEAD)
            return;
        this._sprite.rotation = degrees;
    }
    startMe() {
        if (this._state == Character.STATE_DEAD)
            return;
        let radians = this.toRadians(this._sprite.rotation);
        this.xDisplace = Math.cos(radians) * this._speed;
        this.yDisplace = Math.sin(radians) * this._speed;
        this._sprite.play();
        this._state = Character.STATE_MOVING;
    }
    stopMe() {
        if (this._state == Character.STATE_DEAD)
            return;
        this._sprite.stop();
        this._state = Character.STATE_IDLE;
    }
    update() {
        if ((this._state == Character.STATE_DEAD) || (this._state == Character.STATE_IDLE))
            return;
        this._sprite.x += this.xDisplace;
        this._sprite.y += this.yDisplace;
    }
}
exports.Character = Character;
Character.STATE_IDLE = 1;
Character.STATE_MOVING = 2;
Character.STATE_DEAD = 3;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("897616526de090056c80")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.fd072febbcb080e8633d.hot-update.js.map