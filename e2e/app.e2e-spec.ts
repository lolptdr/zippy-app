import { ZippyAppPage } from './app.po';

describe('zippy-app App', function() {
  let page: ZippyAppPage;

  beforeEach(() => {
    page = new ZippyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
