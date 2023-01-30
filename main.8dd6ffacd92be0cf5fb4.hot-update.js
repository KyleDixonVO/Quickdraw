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
const Snake_1 = __webpack_require__(/*! ./Snake */ "./src/Snake.ts");
const Bug_1 = __webpack_require__(/*! ./Bug */ "./src/Bug.ts");
const UserInterface_1 = __webpack_require__(/*! ./UserInterface */ "./src/UserInterface.ts");
const ScreenManager_1 = __webpack_require__(/*! ./ScreenManager */ "./src/ScreenManager.ts");
const Crosshair_1 = __webpack_require__(/*! ./Crosshair */ "./src/Crosshair.ts");
let stage;
let canvas;
let assetManager;
let crosshair;
let snake;
let bugPool = [];
let userInterface;
let screenManager;
let bugTimer;
let bugDelay;
let bugsEaten;
function onReady(e) {
    console.log(">> spritesheet loaded – ready to add sprites to game");
    screenManager = new ScreenManager_1.ScreenManager(stage, assetManager);
    screenManager.showIntro();
    userInterface = new UserInterface_1.UserInterface(stage, assetManager);
    crosshair = new Crosshair_1.Crosshair(stage, assetManager, "misc/Crosshair");
    snake = new Snake_1.Snake(stage, assetManager);
    for (let i = 0; i < Constants_1.ENEMY_MAX; i++) {
        bugPool.push(new Bug_1.Bug(stage, assetManager, snake));
    }
    stage.on("bugEaten", onGameEvent);
    stage.on("snakeKilled", onGameEvent);
    stage.on("snakeSpeedChange", onGameEvent);
    stage.on("gameStart", onGameEvent);
    stage.on("gameReset", onGameEvent);
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onAddBug() {
    for (let newBug of bugPool) {
        if (newBug.used == false) {
            newBug.used = true;
            newBug.showMe();
            break;
        }
    }
}
function onMoveSnake(e) {
    snake.rotateMe();
    snake.startMe();
}
function onGameEvent(e) {
    switch (e.type) {
        case "gameStart":
            screenManager.showGame();
            snake.showMe();
            snake.startSlowDown();
            bugsEaten = 0;
            bugDelay = Constants_1.ENEMY_START_DELAY;
            bugTimer = window.setInterval(onAddBug, bugDelay);
            stage.on("mousedown", onMoveSnake);
            break;
        case "gameReset":
            screenManager.showIntro();
            userInterface.resetMe();
            for (let bug of bugPool)
                bug.hideMe();
            snake.resetMe();
            snake.hideMe();
            break;
        case "bugEaten":
            bugsEaten++;
            snake.energizeMe();
            if ((bugsEaten % 10) == 0) {
                bugDelay = bugDelay + BUG_DELAY_INCREASE;
                window.clearInterval(bugTimer);
                bugTimer = window.setInterval(onAddBug, bugDelay);
            }
            userInterface.kills = bugsEaten;
            break;
        case "snakeKilled":
            window.clearInterval(bugTimer);
            screenManager.showGameOver();
            break;
        case "snakeSpeedChange":
            userInterface.speed = snake.speed;
            break;
    }
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    snake.update();
    crosshair.Update();
    for (let bug of bugPool) {
        if (bug.used)
            bug.update();
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
/******/ 	__webpack_require__.h = () => ("a4e5c655c02b9c5ee9c8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.8dd6ffacd92be0cf5fb4.hot-update.js.map