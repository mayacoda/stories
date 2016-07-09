import {ClientPage, MyTimelinesPage} from './app.po';

describe('client App', () => {
  let page: ClientPage;

  beforeEach(() => {
    page = new ClientPage();
  });

  it('should instantiate PublicTimelines', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Public Timelines go here');
  });
});

describe('My Timelines page', () => {
  let page: MyTimelinesPage;

  beforeEach(() => {
    page = new MyTimelinesPage();
  });

  it('should instantiate MyTimelinesComponent', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('My Timelines go here');
  })
});
