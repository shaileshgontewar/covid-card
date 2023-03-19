import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Post from "./component/post";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Post />
      <Footer />
    </div>
  );
}

export default App;
