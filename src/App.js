import React from 'react';
import {Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { authAPI } from './api/api';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import {withRouter, Redirect} from 'react-router-dom';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { withSuspense } from './hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader />
        }
        
        return (
            <div className='app-wrapper'>

                    <HeaderContainer />
                    <Navbar />
                
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:userId?' 
                            render={withSuspense(ProfileContainer) }/>
                                                
                        <Route path='/dialogs' 
                            render={withSuspense(DialogsContainer) }/>

                        <Route path='/users' 
                            render={() => <UsersContainer /> }/>

                        <Route path='/news' render={() => <News />}/>
                        <Route path='/music' render={() => <Music />}/>
                        <Route path='/settings' render={() => <Settings />}/>

                        <Route path='/login' render={() => <Login />}/>
                    </div>

                    <Sidebar />
            </div>
            
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);

const NetworkJSApp = (props) => {
    return (
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
    )
}

export default NetworkJSApp
