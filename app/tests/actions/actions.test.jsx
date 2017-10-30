var expect = require('expect');
var actions = require('Actions');

describe('Actions', () => {
  it('should genarate setSearchText action gemerator', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText : 'search some text'
    }

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);

  });
})
