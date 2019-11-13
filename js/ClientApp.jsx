// Import is statically used so it can be used by our tools for tree shaking
// Only include code that will be ran

import React from 'react'
import { render } from 'react-dom'

const ce = React.createElement

const MyTitle = function (props) {
    return (
        <div><h1 style={{ color: props.color }}>{props.title}</h1></div>
    )
}

const MyFirstComponent = function () {
    return (
        <div>
            <MyTitle title="Game of Thrones" color="YellowGreen" />
            <MyTitle title="Stranger Things" color="peru" />
            <MyTitle title="Rick and Morty" color="blue" />
        </div>
    )
}

render(ce(<MyFirstComponent />), document.getElementById('app'));