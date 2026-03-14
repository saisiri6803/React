import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Feed from './pages/Feed';
import Matches from './pages/Matches';
import Login from './pages/Login';
import ThemeInitializer from './components/ThemeInitializer';
import Profile from './components/Profile';

function App() {
  return (
    <Provider store={store}>
      <ThemeInitializer />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
