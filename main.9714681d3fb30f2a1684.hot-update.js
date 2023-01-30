"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/ScreenManager.ts":
/*!******************************!*\
  !*** ./src/ScreenManager.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScreenManager = void 0;
class ScreenManager {
    constructor(stage, assetManager) {
        this.stage = stage;
        this.introScreen = new createjs.Container();
        this.introScreen.addChild(assetManager.getSprite("sprites", "misc/TitleScreen", 0, 0));
        this.introScreen.addChild(bugSprite);
        this.gameOverScreen = new createjs.Container();
        this.gameOverScreen.addChild(assetManager.getSprite("sprites", "misc/backgroundGame", 0, 0));
        let gameOverSprite = assetManager.getSprite("sprites", "misc/gameOver", 70, 240);
        this.gameOverScreen.addChild(gameOverSprite);
        this.gameScreen = assetManager.getSprite("sprites", "misc/Background", 0, 0);
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
    hideAll() {
        this.stage.removeChild(this.introScreen);
        this.stage.removeChild(this.gameOverScreen);
        this.stage.removeChild(this.gameScreen);
    }
}
exports.ScreenManager = ScreenManager;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a101f928b7a7b4ac142c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9714681d3fb30f2a1684.hot-update.js.map