export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const SET_REDIRECT_URL = 'SET_REDIRECT_URL';

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}