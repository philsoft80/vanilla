import { browser, element, by } from 'protractor';

export class PlanoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pn-root h1')).getText();
  }
}
