let initialState = {
    friendsList: [
    {id: 1, name: 'Dmitriy', lastName: 'Alexin', img: 'http://fentezi-mir.ru/images/1/angel_326.jpg'},
    {id: 2, name: 'Andrew', lastName: 'Ochevin', img: 'https://avatarko.ru/img/kartinka/2/cherep_kapyushon_uzhasy_1606.jpg'},
    {id: 3, name: 'Dasha', lastName: 'Britva', img: 'http://komotoz.ru/kartinki/images/kartinki_pro_lubov/kartinki_pro_lubov_17.jpg'}
]
}


const friendsReducer = (state = initialState, action) => {

    return state;
}

export default friendsReducer;