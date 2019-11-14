// you can name it .test.jsx if you feel like it, jest picks up both
import React from 'react';
import { shallow } from 'enzyme'
import preload from '../../data.json'
import Search from '../Search'
import ShowCard from '../ShowCard'

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
        the commented out code will fail if you change the child ShowCard since the tree
        doesn't match

        - To fix this use enzyme shallow like in the uncommented test. You must include the serializer in the package.json under jest
*/




test('Search should render correct amount of shows', () => {
    const component = shallow(<Search />)
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
})

test('Search should render correct amount of shows based on search term', () => {
    const searchWord = 'black'
    const component = shallow(<Search />)
    component.find('input').simulate('change', { target: { value: searchWord } })
    const showCount = preload.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0)
    expect(component.find(ShowCard).length).toEqual(showCount.length)
})
