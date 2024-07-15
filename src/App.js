import React, {useState} from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Here is the list of users: https://reqres.in/api/users

function App() {
   const [users, setUsers] = useState([]);
   const [invites, setInvites] = useState([]);
   const [isLoading, setLoading] = useState(true);
   const [searchValue, setSearchValue] = useState('');
   const [success, setSuccess] = useState(false);

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

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    }
    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !== id));
        } else {
            setInvites( (prev) => [...prev, id]);
        }
    };

    const onClickSendInvites = () => {
        setSuccess(true);
    }

  return (
    <div className="App">
        {
            success ? (
                <Success count={invites.length}/>
            ) : (
                <Users
                    onChangeSearchValue={onChangeSearchValue}
                    searchValue={searchValue}
                    items={users}
                    invites={invites}
                    onClickInvite={onClickInvite}
                    onClickSendInvites={onClickSendInvites}
                    isLoading={isLoading}/>
            )}
    </div>
  );
}

export default App;
