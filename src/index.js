import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return (
            <div>
                Hello Stupid Hackathon
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));