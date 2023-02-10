import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const containerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    width: '60vw',
    margin: '0 auto'
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  },[])

  console.log(users);


  return (
    <div className="App">
      <header className="App-header">
        <div style={containerStyles} className="products__container">
          {
            users.map(user => {
              return <UserCard user={user}></UserCard>
            })
          }
        </div>
        {/* <Counter></Counter> */}
      </header>
    </div>
  );
}

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const handleCount = () => setCount(count + 1);
//   return (
//     <div>
//       <h2>Counter : {count}</h2>
//       <button onClick={handleCount}>Increase state value</button>
//     </div>
//   );
// };


function UserCard(props) {
  const nameStyles = {
    color: '#FFFFFF',
    border: 'solid 2px maroon',
    borderRadius: '.5rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column'
  }
  return (
    <div style={nameStyles} className="productCard">
      <h2>{props.user.name}</h2>
      <h3>UserID : {props.user.id}</h3>
    </div>
  );
};

export default App;
