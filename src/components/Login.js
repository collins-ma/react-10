import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

// Hardcoded users array (In real-world use, you'd call an API or database)
const users = [
  { username: 'collins', password: 'collo254' },
  { username: 'Rodriguez', password: 'rodri254' },
  { username: 'admin', password: 'admin123' },
];

const Login = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [username, password]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the user exists in the hardcoded users array
        const foundUser = users.find(user => user.username === username);

        if (foundUser) {
            // Compare passwords
            if (foundUser.password === password) {
                // Password matches, navigate to home page
                setAuth({ accessToken: 'hardcodedToken' }); // Mocked token
                setUserName('');
                setPassword('');
                navigate('/home');
            } else {
                setErrMsg('Incorrect password');
                errRef.current.focus();
            }
        } else {
            setErrMsg('User not found');
            errRef.current.focus();
        }
    };

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUserName(e.target.value)}
                    value={username}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    <Link to="/register">Sign Up</Link>
                </span>
            </p>
        </section>
    );
};

export default Login;