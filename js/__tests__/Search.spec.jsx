// you can name it .test.jsx if you feel like it, jest picks up both
import React from 'react';
//import renderer from 'react-test-renderer'
import Search from '../Search'
import { shallow } from 'enzyme'

// test('Search renders correctly', () => {
//     const component = renderer.create(<Search />)
//     const tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
// })

test('Search renders correctly', () => {
    const component = shallow(<Search />)
    expect(component).toMatchSnapshot()
})

/*
    What happened?
    - Brought in Search Component on line 4
    - Rendered it out with no additional params
    - Took the component, made it to a JSON structure
    - Jest can do snapshot testing, the first time you run it, it will just accept it as the correct version
    - Then in the future, it will test if it's changed
    - The snapshot is stored in __snapshots__
    - What happens if you want it to change?
        - Run jest again with -u and it will update the snapshot

    *** The snapshots are suppose to be checked into git b/c they are apart 
        of the testing suite

    
    *** An issue is if I change ShowCard that renders search, search test will fail
    
*/