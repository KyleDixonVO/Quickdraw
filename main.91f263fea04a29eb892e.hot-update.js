"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Enemy.ts":
/*!**********************!*\
  !*** ./src/Enemy.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Enemy = void 0;
const Character_1 = __webpack_require__(/*! ./Character */ "./src/Character.ts");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Enemy extends Character_1.Character {
    constructor(stage, assetManager, player) {
        super(stage, assetManager, "outlaw/Outlaw");
        this.player = player;
        this._used = false;
        this.eventKilled = new createjs.Event("enemyKilled", true, false);
    }
    get used() {
        return this._used;
    }
    set used(value) {
        this._used = value;
    }
    showMe() {
        let width = this._sprite.getBounds().width;
        this._speed = 2;
        this._sprite.x = (0, Toolkit_1.randomMe)(50, 550);
        this._sprite.y = (0, Toolkit_1.randomMe)(280, 550);
        this.startMe();
        this.stage.addChild(this._sprite);
        this._used = true;
    }
    postionMe(valueX, valueY) {
    }
    hideMe() {
        super.hideMe();
        this._sprite.gotoAndStop("outlaw/Outlaw");
        this._used = false;
        this._state = Character_1.Character.STATE_IDLE;
    }
    killMe() {
        this._state = Character_1.Character.STATE_DEAD;
        this.stopMe();
        this._sprite.gotoAndPlay("outlaw/Outlaw");
        this._sprite.on("animationend", (e) => {
            this.hideMe();
        }, this, true);
        this._sprite.dispatchEvent(this.eventKilled);
    }
    update() {
        super.update();
        if (this._state == Character_1.Character.STATE_IDLE)
            return;
        let width = this._sprite.getBounds().width;
        let height = this._sprite.getBounds().height;
        if ((this._sprite.x < -width) ||
            (this._sprite.x > (Constants_1.STAGE_WIDTH + width)) ||
            (this._sprite.y < -height) ||
            (this._sprite.y > (Constants_1.STAGE_HEIGHT + height))) {
            console.log("Enemy off stage - removed!");
            this.hideMe();
        }
        this._sprite.on("mousedown", () => {
            if (this.player.hadBullets != true)
                return;
            if (this._state == Character_1.Character.STATE_DEAD)
                return;
            console.log("collision!");
            this.killMe();
        });
    }
}
exports.Enemy = Enemy;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8ca512b042a00779c701")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.91f263fea04a29eb892e.hot-update.js.map