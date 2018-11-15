export class ShareService {

    public step = { class: 'cr', content: 'panorama_fish_eye' };

    public message = undefined;

    public field = this.clearField();
    // public field = [[,,],[,,],[,,]];

    public fieldItemObj = { class: '', content: '', backgroundColor: 'white' };
    
    public clearField() {
        return [[{ class: '', content: '', errClass: 'cl-good'}, 
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
        if (!(this.field[i][j].content) && !(this.field[i][j].class)) {
            if (this.step.content == 'panorama_fish_eye') {
                this.step.class = 'cr';
                this.step.content = 'clear';
            }
            else if (this.step.content == 'clear') {
                this.step.content = 'panorama_fish_eye';
                this.step.class = 'zr';
            }
            this.field[i][j].class = this.step.class;
            this.field[i][j].content = this.step.content;
         }  else {
            this.message = 'Эта клетка занята!';
            this.field[i][j].errClass = 'cl-no-good';
            setTimeout(() => {
                this.field[i][j].errClass = 'cl-good';
            }, 500);
        }
    }
}