namespace View {
    export class view {
        private _app: PIXI.Application;
        private _controller: Controller.controller;
        private _model: Model.model;


        constructor(controller: Controller.controller, model: Model.model) {

            this._app = new PIXI.Application(905, 1065, { backgroundColor: 0xD1E292 });
            document.body.appendChild(this._app.view);

            this._model = model;
            this._controller = controller;
            this.init();
        }


        private init(): void {}

   }
}