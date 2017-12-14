import {HttpClient} from '@angular/common/http';
import {Book} from '../model/book/book.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  readonly BOOKS_API_BASE_URL: string = 'https://www.googleapis.com:443';
  readonly BOOKS_API_VOLUME_QUERY: string = '/books/v1/volumes?q=';
  readonly BOOKS_API_MAX_RESULT_PARAM: string = '&maxResults=10';

  constructor(private httpService: HttpClient) {
  }

  getBooks(searchTerm: string): Observable<Book[]> {
    if (searchTerm === '') {
      return of([]);
    }

    // query response is limited to 10 books by default
    return this.httpService.get
    (
      this.BOOKS_API_BASE_URL +
      this.BOOKS_API_VOLUME_QUERY +
      searchTerm +
      this.BOOKS_API_MAX_RESULT_PARAM
    ).map(result => result['items']);
  }
}
