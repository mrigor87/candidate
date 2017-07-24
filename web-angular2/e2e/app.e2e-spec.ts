import { WebAngularPage } from './app.po';

describe('web-angular App', () => {
  let page: WebAngularPage;

  beforeEach(() => {
    page = new WebAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
