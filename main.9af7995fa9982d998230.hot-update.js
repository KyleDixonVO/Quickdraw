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
    constructor(stage) {
        this.STATE_ALIVE = 0;
        this.STATE_DEAD = 1;
        this.dispatchedEvent = false;
        this.shooting = false;
        this.readyToShoot = true;
        this.hadBullets = true;
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
    Shoot() {
        this.readyToShoot = false;
        if (this.shooting == false) {
            console.log("Waiting for mousedown");
            this.Stage.on("mousedown", () => {
                this._BulletsLeft--;
                this.shooting = true;
                if (this._BulletsLeft > 0 && this.readyToShoot == false) {
                    this.hadBullets = true;
                    console.log("had a bullet");
                }
                else {
                    this._BulletsLeft = 0;
                    this.hadBullets = false;
                    console.log("no bullet");
                }
            }, this, true);
        }
    }
    resetMe() {
        this._Health = Constants_1.PLAYER_HEALTH;
        this._BulletsLeft = Constants_1.BULLET_MAX;
    }
    Update() {
        if (this.readyToShoot == true) {
            this.Shoot();
        }
        this.Stage.on("pressup", () => {
            console.log("mouseup");
            this.readyToShoot = true;
            this.shooting = false;
        }, this, true);
        if (this._Health <= 0 && this.dispatchedEvent == false) {
            this.dispatchedEvent = true;
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
/******/ 	__webpack_require__.h = () => ("0ef11b6bb96497a6e529")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9af7995fa9982d998230.hot-update.js.map