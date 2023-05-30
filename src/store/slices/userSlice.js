import { createSlice } from "@reduxjs/toolkit"

// параметры пользователя
const initialState = {
    login: "",
    password: "",
    authentificated: false
}

const userSlice = createSlice({
    name: 'user', //имя слайса
    initialState, //параметры юзера (слайса), определили их выше
    reducers: {
        // устанавливаем юзера
        setUser(state, action) { 
            // из payload вытаскиваем передаваемое значение и присваиваем юзеру
            state.login = action.payload.login
            state.password = action.payload.password
            state.authentificated = action.payload.authentificated
        },
        // убираем юзера
        removeUser(state) {
            // обнуляем все
            state.login = ""
            state.password = ""
            state.authentificated = false
        }
    }
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer