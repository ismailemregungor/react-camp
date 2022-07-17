import './App.css';

import User from './components/User';

const friends = [
  {
    id: 1,
    name: 'Emre',
  },
  {
    id: 2,
    name: 'Sude',
  },
  {
    id: 3,
    name: 'Ömer',
  },
];

function App() {
  return (
    <>
      <User
        // name="İsmail Emre"
        surname="Güngör"
        isLoggedIn={true}
        age={23}
        friends={friends}
        address={{
          title: 'Kocaeli/Darıca',
          zip: 41700,
        }}
      />
    </>
  );
}

export default App;
