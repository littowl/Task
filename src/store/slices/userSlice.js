import { createSlice } from "@reduxjs/toolkit"

// параметры пользователя
const initialState = {
    login: "",
    password: "",
    authentificated: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // устанавливаем юзера
        setUser(state, action) { 
            state.login = action.payload.login
            state.password = action.payload.password
            state.authentificated = action.payload.authentificated
        },
        // убираем юзера
        removeUser(state) {
            state.login = ""
            state.password = ""
            state.authentificated = false
        }
    }
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer