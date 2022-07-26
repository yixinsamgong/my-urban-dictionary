import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import UserpageContainer from './components/userpageContainer';
import DatabaseContainer from './components/databaseContainer';
import Form from './components/Form';
import Profile from './components/profile';
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Switch, Route, Redirect, useHistory, NavLink } from 'react-router-dom';


function AuthenticatedApp({ currentUser, setCurrentUser, fullname }) {
    const history = useHistory()

    // const [search, setSearch] = useState("")
    // const [words, setWords] = useState([])



    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(res => {
                if (res.ok) {
                    setCurrentUser(null)
                    history.push('/')
                }
            })
    }

    return (
        <div>
            <Title><NavLink to="/" style={({ "textDecoration": "none", "color": "#018A9F" })}>{fullname}'s Urban Dictionary</NavLink></Title>
            <NavBar handleLogout={handleLogout} setCurrentUser={setCurrentUser} currentUser={currentUser} />
            <Switch>

                <Route exact path="/">
                    <div>
                        <UserpageContainer setCurrentUser={setCurrentUser} currentUser={currentUser} />
                    </div>  
                </Route>

                <Route exact path="/database">
                    <div>
                        <DatabaseContainer setCurrentUser={setCurrentUser} currentUser={currentUser} />
                    </div>
                </Route>

                <Route exact path="/submit">
                    <div>
                        <Form setCurrentUser={setCurrentUser} currentUser={currentUser} id={currentUser.id} />
                    </div>
                </Route>

                {/* <Route exact path="/profile">
                    <div>
                        <Profile setCurrentUser={setCurrentUser} currentUser={currentUser} id={currentUser.id} />
                    </div>
                </Route> */}

                <Redirect to="/" />
            </Switch>
        </div>

    );
}       



const Title = styled.h3`
text-align: center;
font-family: 'Mouse Memoirs', sans-serif;
font-size: 50px;
color: #018A9F;  
transition: text-shadow 1s;
text-shadow: 5px 5px rgba(22, 33, 33, 0.2)
`

export default AuthenticatedApp;