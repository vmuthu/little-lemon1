import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import './App.css';

function App() {
  return (
    <div className='min-w-min-360 w-full flex flex-col align-center font-markazi'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
