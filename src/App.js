import React, {useState} from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Here is the list of users: https://reqres.in/api/users

function App() {
   const [users, setUsers] = useState([]);
   const [isLoading, setLoading] = useState(true);

    React.useEffect( ()=> {
        fetch('https://reqres.in/api/users').then(res => res.json()).then (json => { //тут ми переклали данні на зрозумілу мову json
            setUsers(json.data); //тут витягли конкретно data
        })
            .catch( (err) => { //тут відловлюємо помилку, на випадок, якщо не зможемо витягнути users
                console.warn(err);
                alert('Error fetching users');
            })
            .finally( () => setLoading(false)); //тут ми змінюємо скелетон на тих юзерів, яких отримали
    }, []);
  return (
    <div className="App">
      <Users items={users} isLoading={isLoading}/>
      {/* <Success /> */}
    </div>
  );
}

export default App;
