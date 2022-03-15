import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Quiz from './Components/Pages/Quiz/Quiz';
import Result from './Components/Pages/Result/Result';
import Signup from './Components/Pages/Signup/Signup';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
