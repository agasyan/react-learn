# react-2 (progate.com)

Topic:
- Component
- Props

## Code
`Language.js` and `app.js` to call
---
1. `Language.js` is _language_ component
```Javascript
import React from 'react';

class Language extends React.Component {
  render() {
    return (
      <div className='language-item'>
        {/* change the code below to display name prop */}
        <div className='language-name'>{this.props.name}</div>
        
        {/* change value of src attribute to display image prop */}
        <img 
          className='language-image'
          src={this.props.image}
        />
        
      </div>
    );
  }
}

export default Language;
```
2. `app.js` to display the component
```Javascript
import React from 'react';
import Language from './Language';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>List of Languages</h1>
        <div className='language'>
          <Language 
            name='HTML & CSS'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
          />
          <Language 
            name='JavaScript'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
          />
          <Language 
            name='React'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
          />
        </div>
      </div>
    );
  }
}

export default App;
```
3. Simplify using map on `app.js`
```Javascript
import React from 'react';
import Language from './Language';

class App extends React.Component {
  render() {
    // paste the code provided in the instruction below
    const languageList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
      },
      {
        name: 'Ruby',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg'
      },
      {
        name: 'Ruby on Rails',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg'
      },
      {
        name: 'Python',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg'
      }
    ];

    return (
      <div>
        <h1>List of Language</h1>
        <div className='language'>
          {/* remove the code from here */}
          {/* up to here */}
          {/* use the map method to display the Language components */}
          
          {languageList.map((languageItem) => {
            return (
              // Call the Language component and pass props to it
              <Language 
                name={languageItem.name}
                image={languageItem.image}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
```
