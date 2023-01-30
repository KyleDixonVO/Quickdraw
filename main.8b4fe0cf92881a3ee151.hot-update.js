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
    constructor(stage, assetManager, userInterface) {
        this.STATE_ALIVE = 0;
        this.STATE_DEAD = 1;
        this.UI = userInterface;
        this.readyToShoot = true;
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
        this.readyToShoot = true;
        this.Stage.on("click", (e) => {
            console.log("shooting");
            if (this._BulletsLeft > 0 && this.readyToShoot == true && this.UI.gameStarted == true) {
                this.readyToShoot = false;
                console.log("fired a shot");
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
/******/ 	__webpack_require__.h = () => ("f40f6ebc7d21391710cb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.8b4fe0cf92881a3ee151.hot-update.js.map