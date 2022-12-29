import { Component } from 'react';
import HeartsList from './components/HeartsList';
import Header from './components/Header';

// import logo from './logo.svg';
import './App.css';

// const message = 'cool cud';


// function App() {
//   return (
//     <>
//       <Header />
//       <HeartsList />
//     </>

//   )
// }

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <HeartsList />
      </>
    );
  }
}

export default App;