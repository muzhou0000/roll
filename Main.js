"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View;
(function (View) {
    var view = /** @class */ (function () {
        function view(controller, model) {
            this._app = new PIXI.Application(300, 300, { backgroundColor: 0xFFF5E4, transparent: false });
            document.body.appendChild(this._app.view);
            this._model = model;
            this._controller = controller;
            this.init();
        }
        view.prototype.init = function () {
            var _this = this;
            var texture = PIXI.Texture.fromImage('syougatsu_hatsuhinode_fujisan.png');
            var background = new PIXI.Sprite(texture);
            background.scale.set(0.5, 0.5);
            background.x = -2;
            background.y = 23;
            this._app.stage.addChild(background);
            var textStyle = new PIXI.TextStyle({ fill: 0xffffff, fontSize: 50,
                fontFamily: "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif",
            });
            var text = new PIXI.Text('大吉大利', textStyle);
            this._app.stage.addChild(text);
            text.anchor.set(0.5, 0.5);
            text.x = this._app.screen.width / 2;
            text.y = this._app.screen.height / 2 - 5;
            var btn = new PIXI.Graphics;
            btn.beginFill(0xffffff);
            btn.drawRoundedRect(0, 0, 90, 20, 5);
            btn.endFill();
            btn.x = text.x - 45;
            btn.y = text.y + 30;
            btn.buttonMode = true;
            btn.interactive = true;
            this._app.stage.addChild(btn);
            var texture2 = PIXI.Texture.fromImage('uchidenokoduchi_eto03_tora.png');
            var texture3 = PIXI.Texture.fromImage('eto_tora_daruma.png');
            var tiger = new PIXI.Sprite(texture2);
            tiger.scale.set(0.2, 0.2);
            tiger.x = 138;
            tiger.y = 142;
            this._app.stage.addChild(tiger);
            var str = [
                '大吉',
                '中吉',
                '小吉',
                '末吉',
                '小凶',
                '凶',
                '大凶',
            ];
            btn.on('click', function () {
                var ranNum = _this.click();
                if (ranNum > 3) {
                    tiger.texture = texture3;
                    tiger.x = 85;
                    tiger.y = 174;
                }
                else {
                    tiger.texture = texture2;
                    tiger.x = 138;
                    tiger.y = 142;
                }
                text.text = str[ranNum];
            });
        };
        view.prototype.click = function () {
            var roll = Math.floor(Math.random() * 7);
            return roll;
        };
        return view;
    }());
    View.view = view;
})(View || (View = {}));
///<reference path="./pixi.d.ts"/>
var Controller;
///<reference path="./pixi.d.ts"/>
(function (Controller) {
    var controller = /** @class */ (function () {
        function controller(model) {
            this._model = model;
        }
        return controller;
    }());
    Controller.controller = controller;
})(Controller || (Controller = {}));
///<reference path="./pixi.d.ts"/>
var Model;
///<reference path="./pixi.d.ts"/>
(function (Model) {
    var model = /** @class */ (function (_super) {
        __extends(model, _super);
        function model() {
            return _super.call(this) || this;
        }
        return model;
    }(PIXI.utils.EventEmitter));
    Model.model = model;
})(Model || (Model = {}));
///<reference path="./pixi.d.ts"/>
///<reference path="./view.ts"/>
///<reference path="./controller.ts"/>
///<reference path="./model.ts"/>
document.addEventListener("DOMContentLoaded", function () {
    new Main();
});
var Main = /** @class */ (function () {
    function Main() {
        this._model = new Model.model();
        this._controller = new Controller.controller(this._model);
        this._view = new View.view(this._controller, this._model);
    }
    return Main;
}());
//# sourceMappingURL=Main.js.map