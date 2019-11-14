import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, i am new here!', likesCount: 42},
                {id: 2, message: 'Best app in the world.', likesCount: 21},
                {id: 3, message: 'It was cool!', likesCount: 23}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dmitriy', img: 'http://fentezi-mir.ru/images/1/angel_326.jpg'},
                {id: 2, name: 'Andrew', img: 'https://avatarko.ru/img/kartinka/2/cherep_kapyushon_uzhasy_1606.jpg'},
                {id: 3, name: 'Sasha', img: 'https://i.pinimg.com/736x/d9/86/a9/d986a9476263f1e9399e2f0f6020f6da.jpg'},
                {id: 4, name: 'Dasha', img: 'http://komotoz.ru/kartinki/images/kartinki_pro_lubov/kartinki_pro_lubov_17.jpg'},
                {id: 5, name: 'Nastya', img: 'http://zabavnik.club/wp-content/uploads/top_kartinki_na_avu_1_10083522.jpg'}
            ],
            messagesData: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are u feeling?'},
                {id: 3, message: 'It was cool!'}
            ],
            newMessageText: 'Bla-bla'
        },
        friendsPage: {
                friendsList: [
                {id: 1, name: 'Dmitriy', lastName: 'Alexin', img: 'http://fentezi-mir.ru/images/1/angel_326.jpg'},
                {id: 2, name: 'Andrew', lastName: 'Ochevin', img: 'https://avatarko.ru/img/kartinka/2/cherep_kapyushon_uzhasy_1606.jpg'},
                {id: 3, name: 'Dasha', lastName: 'Britva', img: 'http://komotoz.ru/kartinki/images/kartinki_pro_lubov/kartinki_pro_lubov_17.jpg'}
            ]
        },
        sidebarPage : {}
        
    },
    _callSubscriber() {
        console.log('State was changed')
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
        
       
        this._callSubscriber(this._state);
        
    }
}


window.store = store;


export default store;