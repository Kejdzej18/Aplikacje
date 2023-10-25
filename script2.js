class Shiritori {
    constructor() {
        this.words = [];
    }
    play(word) {
        let check = this.check(word);
        if(check.check) {
            this.words.push(word);
            return { check: check.check, message: 'Słowo dodane do tablicy' };
        }
        else return { check: check.check, message: 'Gra zakończona! ' + check.reason };
    }
    check(word) {
        if(this.words.indexOf(word) == -1) {
            let lastWord;
            if(this.words.length >= 1) {
                lastWord = this.words[this.words.length - 1];
                let lastSign = lastWord[lastWord.length - 1];
                let firstSign = word[0];
                if(lastSign == firstSign) return { check: true };
                return { check: false, reason: 'Słowo "' + word + '" nie rozpoczyna się od litery ' + firstSign + '!' };
            }
            return { check: true };
        }
        return { check: false, reason: 'Słowo "' + word + '" już było użyte!' };
    }
    restart() {
        this.words = [];
    }
    getWords() {
        return this.words;
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const shiritori = new Shiritori();
    let form = document.forms[0];
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let play = shiritori.play(form.word.value);
        form.word.value = '';
        document.querySelector('#message').innerHTML = play.message;
        document.querySelector('#words').innerHTML = shiritori.words;
    });
});