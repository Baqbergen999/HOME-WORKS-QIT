const book = {
    title: "Гарри Поттер",
    author: "Михайл Василий",
    pages: 300,
    isRead: false,
    readBook() {
        console.log(`Сіз "${this.author}" жазған "${this.title}" кітабын оқып жатырсыз.`); 
    },
    toggleReadStatus() { 
        this.isRead = !this.isRead; 
        console.log(`Оқу күйі жаңартылды: ${this.isRead}.`); 
    }
};

book.readBook();
book.toggleReadStatus();
book.toggleReadStatus();
book.title = "Harry Potter";
book.author = "Mikhail Vasily";
book.readBook();