import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Quiz from './Components/Pages/Quiz/Quiz';
import Result from './Components/Pages/Result/Result';
import Signup from './Components/Pages/Signup/Signup';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PublicRoute from './Components/PublicRoute/PublicRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/signup" element={<PublicRoute ><Signup /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/quiz" element={<PrivateRoute><Quiz /></PrivateRoute>} />
            <Route path="/result" element={<PrivateRoute><Result /></PrivateRoute>} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
