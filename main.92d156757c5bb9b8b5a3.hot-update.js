"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! createjs */ "./node_modules/createjs/builds/1.0.0/createjs.min.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const AssetManager_1 = __webpack_require__(/*! ./AssetManager */ "./src/AssetManager.ts");
const Enemy_1 = __webpack_require__(/*! ./Enemy */ "./src/Enemy.ts");
const UserInterface_1 = __webpack_require__(/*! ./UserInterface */ "./src/UserInterface.ts");
const ScreenManager_1 = __webpack_require__(/*! ./ScreenManager */ "./src/ScreenManager.ts");
const Crosshair_1 = __webpack_require__(/*! ./Crosshair */ "./src/Crosshair.ts");
let stage;
let canvas;
let assetManager;
let enemyPool = [];
let crosshair;
let userInterface;
let screenManager;
let enemyTimer;
let enemyDelay;
let enemiesKilled;
function onReady(e) {
    console.log(">> spritesheet loaded – ready to add sprites to game");
    screenManager = new ScreenManager_1.ScreenManager(stage, assetManager);
    screenManager.showIntro();
    userInterface = new UserInterface_1.UserInterface(stage, assetManager);
    crosshair = new Crosshair_1.Crosshair(stage, assetManager, "misc/Crosshair");
    for (let i = 0; i < Constants_1.ENEMY_MAX; i++) {
        enemyPool.push(new Enemy_1.Enemy(stage, assetManager));
    }
    stage.on("enemyKilled", onGameEvent);
    stage.on("snakeKilled", onGameEvent);
    stage.on("snakeSpeedChange", onGameEvent);
    stage.on("gameStart", onGameEvent);
    stage.on("gameReset", onGameEvent);
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onAddEnemy() {
    for (let newEnemy of enemyPool) {
        if (newEnemy.used == false) {
            newEnemy.used = true;
            newEnemy.showMe();
            break;
        }
    }
}
function onGameEvent(e) {
    switch (e.type) {
        case "gameStart":
            screenManager.showGame();
            enemiesKilled = 0;
            enemyDelay = Constants_1.ENEMY_START_DELAY;
            enemyTimer = window.setInterval(onAddEnemy, enemyDelay);
            break;
        case "gameReset":
            screenManager.showIntro();
            userInterface.resetMe();
            for (let enemy of enemyPool)
                enemy.hideMe();
            break;
        case "enemyKilled":
            enemiesKilled++;
            if ((enemiesKilled % 10) == 0) {
                if (enemyDelay <= 0) {
                    enemyDelay = 0;
                }
                else {
                    enemyDelay = enemyDelay - Constants_1.ENEMY_DELAY_DECREASE;
                }
                window.clearInterval(enemyTimer);
                enemyTimer = window.setInterval(onAddEnemy, enemyDelay);
            }
            userInterface.kills = enemiesKilled;
            break;
        case "playerKilled":
            window.clearInterval(enemyTimer);
            screenManager.showGameOver();
            break;
        case "snakeSpeedChange":
            userInterface.speed = snake.speed;
            break;
    }
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    crosshair.Update();
    for (let enemy of enemyPool) {
        if (enemy.used)
            enemy.update();
    }
    stage.update();
}
function main() {
    canvas = document.getElementById("game-canvas");
    canvas.width = Constants_1.STAGE_WIDTH;
    canvas.height = Constants_1.STAGE_HEIGHT;
    stage = new createjs.StageGL(canvas, { antialias: true });
    assetManager = new AssetManager_1.AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    assetManager.loadAssets(Constants_1.ASSET_MANIFEST);
    canvas.style.cursor = "none";
}
main();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0fc8a7a29dadb3f4f05d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.92d156757c5bb9b8b5a3.hot-update.js.map