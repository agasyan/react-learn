# react-3 (progate.com)

Topic:
- Make a web using react-1 and react-2 knowledge

## Step
2. Let's create the Lesson component using the steps below: Import React, Declare the Lesson class, Declare the render method and Export
3. Display the Lesson component in Main.js, which is in react-lesson/src/components.
The constant assigned with the lesson information, lessonItem, has already been defined
4. The array with the lesson information, lessonList, is prepared for you in react-lesson/src/components/Main.js.
Using the array and the map method, display all of the lessons.
`Lesson.js`
```Javascript
import React from 'react';

class Lesson extends React.Component {
  render() {
    return (
      <div className='lesson-card'>
        <div className='lesson-item'>
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default Lesson;

```
```Javascript
{lessonList.map((lessonItem) => {
            return (
              <Lesson 
                name={lessonItem.name}
                image={lessonItem.image}
              />
            )
          })}
```
5. Modal in `main.js`
6. Close the modal 
```Javascript
let modal;
    
    // Prepare the if statement
    if (this.state.isModalOpen) {
      modal = (<div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button className='modal-close-btn'>
              Close
            </button>
          </div>
        </div>)
    }

```

7. Open and close
Final code `lesson.js`
```Javascript
import React from 'react';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickLesson() {
    this.setState({isModalOpen: true});
  }
  
  // Declare the handleClickClose method
  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            {/* Add the onClick event */}
            <button
              className='modal-close-btn'
              onClick={() => {this.handleClickClose()}}
            >
              Close
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className='lesson-card'>
        <div
          className='lesson-item'
          onClick={() => {this.handleClickLesson()}}
        >
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
        {modal}
      </div>
    );
  }
}

export default Lesson;
```