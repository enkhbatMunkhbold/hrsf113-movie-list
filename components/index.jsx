import App from './app.js';

var movies = [
     {id: 0, title: 'Terminator'},
     {id: 1, title: 'Avator'},
     {id: 2, title: 'Memory Games'},
     {id: 3, title: 'American Sniper'},
     {id: 4, title: 'You Got A Mail'} 
];

ReactDOM.render(<App movies={movies}/>, document.getElementById('app'));