import { Tory.OsPage } from './app.po';

describe('tory.os App', () => {
  let page: Tory.OsPage;

  beforeEach(() => {
    page = new Tory.OsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
