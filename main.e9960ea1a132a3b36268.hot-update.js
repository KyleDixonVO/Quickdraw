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
const Player_1 = __webpack_require__(/*! ./Player */ "./src/Player.ts");
const UserInterface_1 = __webpack_require__(/*! ./UserInterface */ "./src/UserInterface.ts");
const ScreenManager_1 = __webpack_require__(/*! ./ScreenManager */ "./src/ScreenManager.ts");
const Crosshair_1 = __webpack_require__(/*! ./Crosshair */ "./src/Crosshair.ts");
let stage;
let canvas;
let assetManager;
let player;
let enemyPool = [];
let hitmarkPool = [];
let crosshair;
let userInterface;
let screenManager;
let reloadTimer;
let reloadDelay;
let bulletsMissing;
let reloadKey;
let reloading = false;
let enemyTimer;
let enemyDelay;
let enemiesKilled;
function onReady(e) {
    console.log(">> spritesheet loaded – ready to add sprites to game");
    userInterface = new UserInterface_1.UserInterface(stage, assetManager);
    player = new Player_1.Player(stage);
    screenManager = new ScreenManager_1.ScreenManager(stage, assetManager, player);
    screenManager.showIntro();
    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;
    for (let i = 0; i < Constants_1.ENEMY_MAX; i++) {
        enemyPool.push(new Enemy_1.Enemy(stage, assetManager, player));
    }
    for (let i = 0; i < Constants_1.HITMARK_MAX; i++) {
        hitmarkPool.push(new createjs.Sprite(assetManager.getSpriteSheet("sprites"), "hitmark/Hitmark"));
    }
    crosshair = new Crosshair_1.Crosshair(stage, assetManager, "misc/Crosshair", player);
    stage.on("enemyKilled", onGameEvent);
    stage.on("playerDead", onGameEvent);
    stage.on("playerDamaged", onGameEvent);
    stage.on("gameStart", onGameEvent);
    stage.on("gameReset", onGameEvent);
    stage.on("createHitmark", onGameEvent);
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onKeyDown(e) {
    if (e.key == " ") {
        reloadKey = true;
    }
    ;
}
function onKeyUp(e) {
    if (e.key == " ") {
        reloadKey = false;
    }
    ;
}
function reload() {
    player.bulletsLeft = 6;
    window.clearInterval(reloadTimer);
    reloading = false;
}
function hitmark(e) {
    e.gotoAndPlay("hitmark/Hitmark");
    e.on("animationend", () => { e.visible = false; stage.removeChild(e); });
}
function onReloadPress() {
    if (reloading == false) {
        reloading = true;
        bulletsMissing = Constants_1.BULLET_MAX - player.bulletsLeft;
        reloadDelay = Constants_1.BASE_RELOAD_DELAY + (Constants_1.DELAY_PER_ROUND * bulletsMissing);
        reloadTimer = window.setInterval(reload, reloadDelay);
    }
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
            userInterface.gameStarted = true;
            enemiesKilled = 0;
            enemyDelay = Constants_1.ENEMY_START_DELAY;
            enemyTimer = window.setInterval(onAddEnemy, enemyDelay);
            player.resetMe();
            break;
        case "gameReset":
            screenManager.showIntro();
            userInterface.resetMe();
            player.resetMe();
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
        case "playerDead":
            window.clearInterval(enemyTimer);
            screenManager.showGameOver();
            break;
        case "playerDamaged":
            userInterface.health = player.health;
            break;
        case "createHitmark":
            for (let newHitmark of hitmarkPool) {
                if (newHitmark.visible == false) {
                    newHitmark.visible = true;
                    newHitmark.x = stage.mouseX;
                    newHitmark.y = stage.mouseY;
                    hitmark(newHitmark);
                    break;
                }
            }
            break;
    }
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    crosshair.Update();
    player.Update();
    screenManager.showAmmo();
    for (let enemy of enemyPool) {
        if (enemy.used)
            enemy.update();
    }
    if (reloadKey == true) {
        onReloadPress();
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
/******/ 	__webpack_require__.h = () => ("667640a8bcde67d98b98")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e9960ea1a132a3b36268.hot-update.js.map