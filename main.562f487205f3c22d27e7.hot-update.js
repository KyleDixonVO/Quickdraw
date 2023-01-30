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
    for (let i = 0; i < Constants_1.BUG_MAX; i++) {
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
            bugDelay = Constants_1.BUG_START_DELAY;
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
                bugDelay = bugDelay + Constants_1.BUG_DELAY_INCREASE;
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


/***/ }),

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
    energizeMe() {
        if (this._speed < Constants_1.SNAKE_MAX_SPEED) {
            this._speed++;
            this._sprite.dispatchEvent(this.eventSpeedChange);
        }
        console.log("Snake energized: " + this.speed);
        window.clearInterval(this.slowDownTimer);
        this.slowDownTimer = window.setInterval(() => this.onSlowDown(), Constants_1.SNAKE_SLOW_DELAY);
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
    resetMe() {
        this._sprite.gotoAndStop("snake/alive");
        this._sprite.x = 300;
        this._sprite.y = 300;
        this._sprite.rotation = 0;
        this._speed = Constants_1.SNAKE_MAX_SPEED;
        this._state = Character_1.Character.STATE_IDLE;
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
/******/ 	__webpack_require__.h = () => ("e3262632bf2ab52ea80c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.562f487205f3c22d27e7.hot-update.js.map