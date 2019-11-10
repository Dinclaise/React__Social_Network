import React from 'react';
import {Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
      <div className='app-wrapper'>
            <Header />
            
            <Navbar state={props.state.friendsPage} />
        
        <div className='app-wrapper-content'>
            <Route path='/profile' 
                render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
            <Route path='/dialogs' 
                render={() => <Dialogs state={props.state.dialogsPage}/>}/>
            <Route path='/news' render={() => <News />}/>
            <Route path='/music' render={() => <Music />}/>
            <Route path='/settings' render={() => <Settings />}/>
        </div>
            <Sidebar />
      </div>
    
  );
}

export default App;
