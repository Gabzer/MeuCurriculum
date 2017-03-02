import { Meucurriculum3bootstrapPage } from './app.po';

describe('meucurriculum3bootstrap App', function() {
  let page: Meucurriculum3bootstrapPage;

  beforeEach(() => {
    page = new Meucurriculum3bootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
