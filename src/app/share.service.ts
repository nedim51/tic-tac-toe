export class ShareService {

    public step = { class: 'cr', content: 'panorama_fish_eye', player: 1 };

    public message = undefined;

    public field;
    public FIELD;
    
    public clearField() {
        this.FIELD = [[,,],[,,],[,,]];
        this.field = [[{ class: '', content: '', errClass: 'cl-good'}, 
                       { class: '', content: '', errClass: 'cl-good'}, 
                       { class: '', content: '', errClass: 'cl-good'}],
                      [{ class: '', content: '', errClass: 'cl-good'}, 
                       { class: '', content: '', errClass: 'cl-good'}, 
                       { class: '', content: '', errClass: 'cl-good'}],
                      [{ class: '', content: '', errClass: 'cl-good'}, 
                       { class: '', content: '', errClass: 'cl-good'}, 
                       { class: '', content: '', errClass: 'cl-good'}]];
    }

    public add(i, j) {
        this.message = undefined;
        if (!(this.field[i][j].content) && !(this.field[i][j].class) && !(this.FIELD[i][j])) {
            if (this.step.content == 'panorama_fish_eye') {
                this.step.class = 'cr';
                this.step.content = 'clear';
                this.step.player = 1;
            }
            else if (this.step.content == 'clear') {
                this.step.content = 'panorama_fish_eye';
                this.step.class = 'zr';
                this.step.player = 2;
            }
            this.FIELD[i][j] = this.step.player;
            this.field[i][j].class = this.step.class;
            this.field[i][j].content = this.step.content;
         }  else {
            this.message = 'Эта клетка занята!';
            this.field[i][j].errClass = 'cl-no-good';
            setTimeout(() => {
                this.message = '';
                this.field[i][j].errClass = 'cl-good';
            }, 750);
        }
    }
}