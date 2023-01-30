"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/ScreenManager.ts":
/*!******************************!*\
  !*** ./src/ScreenManager.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScreenManager = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class ScreenManager {
    constructor(stage, assetManager, player) {
        this.bulletsLeft = 6;
        this.stage = stage;
        this.bulletsLeft = player._BulletsLeft;
        this.introScreen = new createjs.Container();
        this.introScreen.addChild(assetManager.getSprite("sprites", "misc/TitleScreen", 0, 0));
        this.gameOverScreen = new createjs.Container();
        this.gameOverScreen.addChild(assetManager.getSprite("sprites", "misc/Background", 0, 0));
        let gameOverSprite = assetManager.getSprite("sprites", "misc/gameOver", 160, 200);
        this.gameOverScreen.addChild(gameOverSprite);
        this.gameScreen = assetManager.getSprite("sprites", "misc/Background", 0, 0);
        this.bullet0 = assetManager.getSprite("sprites", "misc/Bullet", Constants_1.STAGE_WIDTH - 32, 40);
        stage.addChild(this.bullet0);
        this.bullet1 = assetManager.getSprite("sprites", "misc/Bullet", this.bullet0.x - 44, 40);
        stage.addChild(this.bullet1);
        this.bullet2 = assetManager.getSprite("sprites", "misc/Bullet", this.bullet1.x - 44, 40);
        stage.addChild(this.bullet2);
        this.bullet3 = assetManager.getSprite("sprites", "misc/Bullet", this.bullet2.x - 44, 40);
        stage.addChild(this.bullet3);
        this.bullet4 = assetManager.getSprite("sprites", "misc/Bullet", this.bullet3.x - 44, 40);
        stage.addChild(this.bullet4);
        this.bullet5 = assetManager.getSprite("sprites", "misc/Bullet", this.bullet4.x - 44, 40);
        stage.addChild(this.bullet5);
        this.eventStartGame = new createjs.Event("gameStart", true, false);
        this.eventResetGame = new createjs.Event("gameReset", true, false);
    }
    showIntro() {
        this.hideAll();
        this.stage.addChildAt(this.introScreen, 0);
        this.stage.on("click", (e) => {
            this.stage.dispatchEvent(this.eventStartGame);
        }, this, true);
    }
    showGame() {
        this.hideAll();
        this.stage.addChildAt(this.gameScreen, 0);
    }
    showGameOver() {
        this.hideAll();
        this.stage.addChildAt(this.gameOverScreen, 0);
        this.stage.on("click", (e) => {
            this.stage.dispatchEvent(this.eventResetGame);
        }, this, true);
    }
    showAmmo() {
        console.log(this.bulletsLeft);
        switch (this.bulletsLeft) {
            case 6:
                this.stage.addChild(this.bullet0);
                this.stage.addChild(this.bullet1);
                this.stage.addChild(this.bullet2);
                this.stage.addChild(this.bullet3);
                this.stage.addChild(this.bullet4);
                this.stage.addChild(this.bullet5);
                break;
            case 5:
                this.stage.addChild(this.bullet0);
                this.stage.addChild(this.bullet1);
                this.stage.addChild(this.bullet2);
                this.stage.addChild(this.bullet3);
                this.stage.addChild(this.bullet4);
                this.stage.removeChild(this.bullet5);
                break;
            case 4:
                this.stage.addChildAt(this.bullet0, 0);
                this.stage.addChildAt(this.bullet1, 0);
                this.stage.addChildAt(this.bullet2, 0);
                this.stage.addChildAt(this.bullet3, 0);
                this.stage.removeChild(this.bullet4);
                this.stage.removeChild(this.bullet5);
                break;
            case 3:
                this.stage.addChildAt(this.bullet0, 0);
                this.stage.addChildAt(this.bullet1, 0);
                this.stage.addChildAt(this.bullet2, 0);
                this.stage.removeChild(this.bullet3);
                this.stage.removeChild(this.bullet4);
                this.stage.removeChild(this.bullet5);
                break;
            case 2:
                this.stage.addChildAt(this.bullet0, 0);
                this.stage.addChildAt(this.bullet1, 0);
                this.stage.removeChild(this.bullet2);
                this.stage.removeChild(this.bullet3);
                this.stage.removeChild(this.bullet4);
                this.stage.removeChild(this.bullet5);
                break;
            case 1:
                this.stage.addChildAt(this.bullet0, 0);
                this.stage.removeChild(this.bullet1);
                this.stage.removeChild(this.bullet2);
                this.stage.removeChild(this.bullet3);
                this.stage.removeChild(this.bullet4);
                this.stage.removeChild(this.bullet5);
                break;
            case 0:
                this.stage.removeChild(this.bullet0);
                this.stage.removeChild(this.bullet1);
                this.stage.removeChild(this.bullet2);
                this.stage.removeChild(this.bullet3);
                this.stage.removeChild(this.bullet4);
                this.stage.removeChild(this.bullet5);
                break;
        }
    }
    hideAll() {
        this.stage.removeChild(this.introScreen);
        this.stage.removeChild(this.gameOverScreen);
        this.stage.removeChild(this.gameScreen);
        this.stage.removeChild(this.bullet0);
        this.stage.removeChild(this.bullet1);
        this.stage.removeChild(this.bullet2);
        this.stage.removeChild(this.bullet3);
        this.stage.removeChild(this.bullet4);
        this.stage.removeChild(this.bullet5);
    }
}
exports.ScreenManager = ScreenManager;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("832e2dbde41407a7dca7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.bfa915d0c58856d04032.hot-update.js.map