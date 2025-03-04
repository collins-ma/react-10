const Forum = () => {
    return (
      <div className="forum-container">
        <div className="forum-header">
          <h1>Welcome to the Forum</h1>
          <p>Engage in discussions and share your thoughts!</p>
        </div>
        <div className="forum-post">
          <h2 className="post-title">How to Learn React?</h2>
          <p className="post-content">
            React is a JavaScript library for building user interfaces. Start by
            understanding components, state, and props.
          </p>
          <button className="reply-button">Reply</button>
        </div>
        <div className="forum-post">
          <h2 className="post-title">Best Practices in Node.js</h2>
          <p className="post-content">
            Writing clean and maintainable code in Node.js is essential. Follow
            best practices like using async/await, proper error handling, and
            modular code.
          </p>
          <button className="reply-button">Reply</button>
        </div>
      </div>
    );
  };
  
  export default Forum;
  