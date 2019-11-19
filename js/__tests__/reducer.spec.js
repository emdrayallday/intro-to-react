import reducers from '../reducers';

test('reducers', () => {
  let state;
  state = reducers({searchTerm:'',apiData:{tt2085059:{rating:'6.4',title:'Black Mirror',year:'2011–',description:'A television anthology series that shows the dark side of life and technology.',poster:'bm.jpg',imdbID:'tt2085059',trailer:'jDiYGjp5iFg'}}}, {type:'SET_SEARCH_TERM',payload:'black'});
  expect(state).toEqual({searchTerm:'black',apiData:{tt2085059:{rating:'6.4',title:'Black Mirror',year:'2011–',description:'A television anthology series that shows the dark side of life and technology.',poster:'bm.jpg',imdbID:'tt2085059',trailer:'jDiYGjp5iFg'}}});
});

/** redux dev tools writes tests for you, by clicking on tests tab in the dev tools section after doing stuff through app */