import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
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
        console.warn('Obsolete method! Please use profileAPI options.')
        return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status} );
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}


