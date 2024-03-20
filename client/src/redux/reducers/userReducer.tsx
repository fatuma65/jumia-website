import {userTypes} from'../actions/types'

const initialState = {
    UserId: null,
    isLoggedIn: false,
    loading: false,
    userData: {},
    error: null,
    username: ''

}

const userStateReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case userTypes.HANDLE_LOGIN: 
            return {
                ...state, 
                UserId: action.payload,
                isLoggedIn: true,
            }
            case userTypes.HANDLE_USERNAME:
                return {
                    ...state,
                    username: action.payload
                }
        case userTypes.HANDLE_LOGOUT:
            return {
                ...state,
                UserId: null,
                isLoggedIn: false,
                userData: {}
            }
     
           case userTypes.FETCH_USER_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                userData: action.payload,
                loading: false,
                error: null,
                isLoggedIn: true
            }
            case userTypes.FETCH_USER_REQUEST:
                return {
                    userData: null,
                    loading: true,
                    error: null
                }
            case userTypes.FETCH_USER_FAILURE:
                return {
                    userData: null,
                    loading: false,
                    error: action.payload,
                    isLoggedIn: false
                }
        default:
            return state
    }
}
export default userStateReducer