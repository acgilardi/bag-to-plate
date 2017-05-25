import { BagToPlatePage } from './app.po';

describe('bag-to-plate App', () => {
  let page: BagToPlatePage;

  beforeEach(() => {
    page = new BagToPlatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
