import {  Link } from "react-router-dom";


const Home = () => {
   

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/chat">Go to the chat page</Link>
            <br />
            <Link to="/profile">Go to the Profile Page</Link>
            <br />
            <Link to="/tutorial">Go to the Tutorial</Link>
            <br />
            <Link to="/checkOut">Go to the CheckOut</Link>
            <br />
            <Link to="/gallery">Go to the Gallery</Link>
            <br />
            <Link to="/forum">Go to the Forum page page</Link>
           
        </section>
    )
}

export default Home
