import { AngularFormDemoPage } from './app.po';

describe('angular-form-demo App', () => {
  let page: AngularFormDemoPage;

  beforeEach(() => {
    page = new AngularFormDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
