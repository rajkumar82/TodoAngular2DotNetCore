import { TodoangularnetcorePage } from './app.po';

describe('todoangularnetcore App', function() {
  let page: TodoangularnetcorePage;

  beforeEach(() => {
    page = new TodoangularnetcorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
