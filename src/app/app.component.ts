import {Component, OnInit} from '@angular/core';
import {BookService} from './service/book.service';
import {Book} from './model/book/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly LOCALSTORE_KEY: string = 'savedBooks';
  title = 'Book Store';
  books: Book[];
  selectedTitle: string;  // model to solve selection
  savedBooks: Book[] = [];
  selectedBook: Book;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.savedBooks = JSON.parse(localStorage.getItem(this.LOCALSTORE_KEY)) || [];
  }

  isBookSelected(book: Book) {
    return this.selectedBook === book;
  }

  // TODO get the closest if enter was hit
  // TODO solve the arrow binding to the result list on the UI
  onSearchChange(text: string): void {
    if (text === '') {
      this.books = [];
    } else if (text.length > 2) {
      this.selectedBook = null;
      this.bookService.getBooks(text).subscribe(result => {
        this.books = result;
      });
    }
  }

  onBookSelected(book: Book) {
    this.selectedTitle = book.volumeInfo.title;
    this.selectedBook = book;
    this.books = [];
  }

  onBookAddedToCart(): void {
    const contains = this.savedBooks.some(book => book.id === this.selectedBook.id);

    if (!contains) {
      this.savedBooks.push(this.selectedBook);
      localStorage.setItem(this.LOCALSTORE_KEY, JSON.stringify(this.savedBooks));
    }
  }

  onSavedBookDeleted(deletedBook: Book): void {
    this.savedBooks = this.savedBooks.filter((book) => book.id !== deletedBook.id);
    localStorage.setItem(this.LOCALSTORE_KEY, JSON.stringify(this.savedBooks));
  }

  onClearSavedBooks(): void {
    this.savedBooks = [];
    localStorage.clear();
  }
}
