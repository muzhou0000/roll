namespace View {
    export class view {
        private _app: PIXI.Application;
        private _controller: Controller.controller;
        private _model: Model.model;

        private _scale:number=0;


        constructor(controller: Controller.controller, model: Model.model) {

            this._app = new PIXI.Application(300, 300, { backgroundColor: 0xD1E292 });
            document.body.appendChild(this._app.view);

            this._model = model;
            this._controller = controller;
            this.init();

        }
        private init(): void {

            let text:PIXI.Text=new PIXI.Text('大吉大利',{fill:0xffffff});
            text.x=75;
            text.y=50;
            text.pivot.set(0.5,0.5);
            this._app.stage.addChild(text);

            let btn:PIXI.Graphics=new PIXI.Graphics();
            btn.beginFill(0xffffff);
            btn.drawRoundedRect(0,0,100,100,5);
            btn.endFill();
            btn.buttonMode=true;
            btn.interactive=true;
            btn.x=text.x;
            btn.y=text.y+50;
            this._app.stage.addChild(btn);
            btn.on('click',()=>{
                text.text=this.click();
            });
        }
        private click():string{
            let str:string[]=[
                '大吉',
                '中吉',
                '小吉',
                '末吉',
                '小凶',
                '凶',
                '大凶',
            ];

            let roll:string=str[Math.floor(Math.random() * (str.length))];

            return roll;

        }

   }
}