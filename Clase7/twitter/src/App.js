// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/NavBar'
import TweetForm from './components/TweetForm'
import Tweet from './components/Tweet'
import Trends from './components/Trends'
import Following from './components/Following'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <TweetForm />
          <Tweet />
          <div class="col-md-3">
            <Trends />
            <Following />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
