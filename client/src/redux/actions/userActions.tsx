import { userTypes } from "./types"
export const handleLogin = (UserId: any) => {
    return {
        type: userTypes.HANDLE_LOGIN,
        payload: UserId,
     
    }
}


export const handleLogout = () => {
    return {
        type: userTypes.HANDLE_LOGOUT
    }
}
export const fetchUserRequest = () => {
    return {
        type: userTypes.FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (userData: any) => {
    return {
        type: userTypes.FETCH_USER_SUCCESS,
        payload: userData
    }
}

export const fetchUserFailure = (error: any) => {
    return {
        type: userTypes.FETCH_USER_FAILURE,
        payload: error
    }
}

