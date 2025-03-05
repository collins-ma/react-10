import React from 'react';


const Tutorial = () => {
  return (
    <div className="tutorial-container">
      <h2 className="tutorial-title">Tutorials</h2>
      <div className="tutorial-list">
        {/* Tutorial Item 1 */}
        <div className="tutorial-item">
          <h3 className="tutorial-item-title">Tutorial 1: Introduction to React</h3>
          <p className="tutorial-item-description">
            This tutorial will guide you through the basics of React, including components, props, and state.
          </p>
          <a href="#" className="tutorial-item-link">Read More</a>
        </div>

        {/* Tutorial Item 2 */}
        <div className="tutorial-item">
          <h3 className="tutorial-item-title">Tutorial 2: Understanding JavaScript ES6</h3>
          <p className="tutorial-item-description">
            Learn about ES6 features such as arrow functions, destructuring, and classes in JavaScript.
          </p>
          <a href="#" className="tutorial-item-link">Read More</a>
        </div>

        {/* Tutorial Item 3 */}
        <div className="tutorial-item">
          <h3 className="tutorial-item-title">Tutorial 3: Styling with CSS Flexbox</h3>
          <p className="tutorial-item-description">
            Discover how to create flexible layouts using CSS Flexbox for responsive designs.
          </p>
          <a href="#" className="tutorial-item-link">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;