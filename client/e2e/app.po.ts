export class ClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('public-timelines div')).getText();
  }
}

export class MyTimelinesPage {
  navigateTo() {
    return browser.get('/my-timelines');
  }

  getParagraphText() {
    return element(by.css('my-timelines div')).getText();
  }
}