import {Component, OnInit} from '@angular/core';
import {BookService} from './service/book.service';
import {Book} from './model/book/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  books: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    // TODO test to check bookservice
    this.bookService.getBooks('nathan').subscribe(result => {
      this.books = result;
    });
  }
}
