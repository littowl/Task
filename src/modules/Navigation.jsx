import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { removeUser } from "../store/slices/userSlice"

// тут навигация
const Navigation = () => {
    const dispatch = useDispatch() // используем useDispatch для того, чтобы пользоваться редьюсером
    return (
        <header>
            <nav>
                {/* ссылки на странички; removeUser разлогинивает пользователя*/}
                <Link to='/auth'><Button onClick={() => dispatch(removeUser)}>Выйти</Button></Link>
                <Link to='/table'><Button>Таблица</Button></Link>
                <Link to='/object'><Button>Создание объекта</Button></Link>
            </nav>
        </header>
    )
}

export default Navigation