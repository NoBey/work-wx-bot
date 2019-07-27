import React,{ useState, Component } from 'react';
import ReactDOM from 'react-dom';
import {Window, WindowContent, WindowHeader, Button, Toolbar} from 'react95';

function Example() {
 
  
    return (
      <Window style={{ width: '100%' 
    }}>
      <WindowHeader
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>企业微信bot</span>
        <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square>
          <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
        </Button>
      </WindowHeader>
      <Toolbar>
        <Button variant="menu" size="sm">
          File
        </Button>
        <Button variant="menu" size="sm">
          Edit
        </Button>
        <Button variant="menu" size="sm" disabled>
          Save
        </Button>
      </Toolbar>
      <WindowContent>
        <ul>
          <li>something here</li>
          <li>something here</li>
          <li>something here</li>
          <li>something here</li>
        </ul>
      </WindowContent>
    </Window>

    )
     
  }
  

class App extends Component {

    render() {
        return (
        <div>
           <Example/>
        </div>
           
        );
    }
}


ReactDOM.render(
    <App/>, document.getElementById('app'));