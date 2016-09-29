import { PlanoPage } from './app.po';

describe('plano App', function() {
  let page: PlanoPage;

  beforeEach(() => {
    page = new PlanoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pn works!');
  });
});
