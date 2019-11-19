// @flow

import moxios from 'moxios'
import {setSearchTerm, addAPIData, getAPIDetails } from '../actionCreators'

const billions = {
      "title": "Billions",
    "year": "2016–",
            "description": "U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby \"Axe\" Axelrod in a battle between two powerful New York figures.",
            "poster": "b.jpg",
            "imdbID": "tt4270492",
            "trailer": "_raEUMLL-ZI"
}

test('setSearchTerm', () => {
    expect(setSearchTerm('New York')).toMatchSnapshot();
})

test('addAPIData', () => {
    expect(addAPIData(billions)).toMatchSnapshot();
})

test('getAPIDetails', (done: Function) => {
    moxios.withMock(() => {
        const dispatchMock = jest.fn();
        const thunk = getAPIDetails(billions.imdbID)
        thunk(dispatchMock)
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: billions
            }).then(() => {
                expect(request.url).toEqual(`http://localhost:3000/${billions.imdbID}`)
                expect(dispatchMock).toBeCalledWith(addAPIData(billions))
                done()
            })
        })
    })
})
// tosnapshot is a json structure and that's what action creators return