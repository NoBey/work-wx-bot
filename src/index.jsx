import React,{ useState, Component } from 'react';
import ReactDOM from 'react-dom';

function Example() {
    const [count, setCount] = useState(0)
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    )
  }
  

class App extends Component {

    render() {
        return (
            <Example/>
        );
    }
}


ReactDOM.render(
    <App/>, document.getElementById('app'));