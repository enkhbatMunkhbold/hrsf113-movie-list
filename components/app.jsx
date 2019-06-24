
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { iputText: '' };
    }

    render() {
        return (
            <div>
            <h3>Movie List</h3>
                <ul>
                    {this.props.movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
                </ul>
            </div>
        );
    }
}

export default App;