
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import CheckOut from './components/CheckOut';



import Gallery from './components/Gallery'
import Tutorial from './components/Tutorial';
import Chat from './components/Chat';
import Shop from './components/Shop';
import Forum from './components/Forum';
import Profile from './components/Profile';
import { Routes, Route ,Navigate} from 'react-router-dom';



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login/>}/>
        
        <Route index element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />

        <Route path="profile" element={<Profile />} />
        <Route path="forum" element={<Forum/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="tutorial" element={<Tutorial/>} />
        <Route path="chat" element={<Chat/>} />
        <Route path="checkOut" element={<CheckOut/>} />
        <Route path="gallery" element={<Gallery/>} />
         








       
      </Route>
    </Routes>
  );
}

export default App;