import './App.css';

const name = 'ie';
const surName = 'g';
const isLoggedIn = true;

function App() {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Benim adım ${name}, soyadım ${surName}`
          : 'Giriş yapılamadı!'}
      </h1>
    </>
  );
}

export default App;
