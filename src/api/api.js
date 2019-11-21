import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "981280cc-0d55-4a57-9b83-46df5630ab4f"
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize = 15) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        }).then(response => response.data)
}, 
    followUser(userId) {
        return instance.post(`follow/${userId}`);
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`);
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
}


