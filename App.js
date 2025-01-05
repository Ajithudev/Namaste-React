// const heading = React.createElement('h1', { id: 'heading', 'some': 'data' }, 'Hello World from React');

const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child' },
        [
            React.createElement('h1', {}, 'In parent child div1'), React.createElement('h2', {}, 'In parent child div1 h2')
        ]
    ),
    React.createElement('div', { id: 'child2' },
        [
            React.createElement('h1', {}, 'In parent child div2'), React.createElement('h2', {}, 'In parent child div2 h2')
        ]
    )
    ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);