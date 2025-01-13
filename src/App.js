import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Settingbi from './pages/Settingbi';
import Settingpwd from './pages/Settingpwd';
import User from './pages/User';
import Workout from './pages/Workout';
import Video from './pages/Video';
import NewWorkout from './pages/NewWorkout';
import Subscription from './pages/Subscription';
import Chat from './pages/Chat';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/settingbi" element={<Settingbi />} />
    <Route path="/settingpwd" element={<Settingpwd />} />
    <Route path="/user" element={<User />} />
    <Route path="/workout" element={<Workout />} />
    <Route path="/video" element={<Video />} />
    <Route path="/newworkout" element={<NewWorkout />} />
    <Route path="/subscription" element={<Subscription />} />
    <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;

