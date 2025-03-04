const Profile = () => {
    return (
      <div className="profile-container">
        <div className="profile-card">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="profile-image"
          />
          <h2 className="profile-name">John Doe</h2>
          <p className="profile-bio">
            Software Engineer | Tech Enthusiast | Passionate about coding
          </p>
          <button className="profile-button">Follow</button>
        </div>
      </div>
    );
  };
  
  export default Profile;