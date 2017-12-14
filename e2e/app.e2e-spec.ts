import { AppPage } from './app.po';

describe('book-store App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(`should display 'Book Store'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Book Store');
  });
});
