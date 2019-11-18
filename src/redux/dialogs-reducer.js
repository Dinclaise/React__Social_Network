
const ADD_MESS = 'ADD-MESS';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';


let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESS: {
          let newMessage = {
                message: state.newMessageText,
                id: 4
            };

            return {
              ...state, newMessageText: '',
              messagesData: [...state.messagesData, newMessage]
            }
            
            
            // stateCopy.messagesData = [...state.messagesData];
            // stateCopy.messagesData.push(newMessage)
            // stateCopy.newMessageText = '';
        }
        case UPDATE_NEW_MESSAGE: {
          return {
              ...state, newMessageText: action.newTextMes
          }
            // stateCopy.newMessageText = action.newTextMes;
        }
        default:
            return state;
    }
}


export const addMessageCreator = () => {
    return {
      type: ADD_MESS
    }
  }
 
export const updateNewMessageCreator = (message) => {
    return {
      type: UPDATE_NEW_MESSAGE, newTextMes: message
    }
  }

export default dialogsReducer;