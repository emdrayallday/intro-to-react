const MyTitle = function (props) {
    return (
        React.createElement('div', null,
            React.createElement('h1', { style: { color: props.color } }, props.title)
        )
    )
}

// The MyFirstComponent is a class, the createElement is just creating a div
const MyFirstCompoonent = function () {
    return React.createElement('div', null,
        React.createElement(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
        React.createElement(MyTitle, { title: 'asdf', color: 'GreenYellow' }),
        React.createElement(MyTitle, { title: 'asdfasdf', color: 'LimeGreen' }),
        React.createElement(MyTitle, { title: 'rhy', color: 'peru' })
    )
}
// In here, the createElement is creating an INSTANCE of MyFirstComponent
ReactDOM.render(
    React.createElement(MyFirstCompoonent),
    document.getElementById('app')
)

// This means that you can create components of other components