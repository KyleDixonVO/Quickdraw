"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Player {
    constructor(stage, assetManager) {
        this.STATE_ALIVE = 0;
        this.STATE_DEAD = 1;
        this._BulletsLeft = Constants_1.BULLET_MAX;
        this.Stage = stage;
        this._Health = Constants_1.PLAYER_HEALTH;
        this._State = this.STATE_ALIVE;
        this.eventPlayerDead = new createjs.Event("playerDead", true, false);
    }
    get health() {
        return this._Health;
    }
    set health(value) {
        this._Health = value;
    }
    get state() {
        return this._State;
    }
    set state(value) {
        this._State = value;
    }
    get bulletsLeft() {
        return this._BulletsLeft;
    }
    set bulletsLeft(value) {
        this._BulletsLeft = value;
    }
    Update() {
        console.log(this.bulletsLeft);
        this.Stage.on("mousedown", (e) => {
            if (this._BulletsLeft < 0) {
                this._BulletsLeft--;
            }
        });
        if (this._Health == 0) {
            console.log("Player Dead");
            this.Stage.dispatchEvent(this.eventPlayerDead);
        }
    }
}
exports.Player = Player;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3f163b5482ca1428012c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.fa01486d42fff85e5a1d.hot-update.js.map