class PrintEditionItem {

    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    
    }
    set state (stateI){
        if (stateI<=0) {this._state = 0;}
        else if (stateI>=100) {this._state = 100;}
        else {this._state = stateI;}
    }
    get state(){
        return this._state;
    }    
    fix() {      
        this.state=this._state*1.5;        
    }    
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor (name){
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        for(let item in this.books) {
            if(this.books[item][type] === value) {
            return this.books[item];
            } 
        }
        return null;
    }

    giveBookByName(bookName){        
        for(let item of this.books) {
            if (item.name === bookName) {
                 return  this.books.splice(item, 1)[0];
            }
        }
        return null;
    }
}


