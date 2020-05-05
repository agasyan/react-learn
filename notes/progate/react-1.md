# react-1 (progate.com)

Topic:

- JSX
- Basic React
- State

## Code

### JSX
`app.js`
```Javascript
import React from 'react';

class App extends React.Component {
  render() {
    // Define the name constant
    const name = 'Ken the Ninja';
    
    // Define the imgUrl constant
    const imgUrl = 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/kentheninja.png';
    
    return (
      <div>
        {/* Use the name constant name to display "Ken the Ninja" */}
        <h1>{name}</h1>
        
        {/* Use the imgUrl constant to display the image */}
        <img src = {imgUrl}/>
        
      </div>
    );
  }
}

export default App;

```

### State
```Javascript
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  // Create the handleClick method here
  handleClick() {
    this.setState({count: this.state.count+1});
  }
  
  render() {
    return (
      <div>
        <h1>
          {this.state.count}
        </h1>
        {/* Add an onClick event in the <button> tag */}
        <button onClick = {() => {this.handleClick()}}>+</button>
        
      </div>
    );
  }
}

export default App;

```