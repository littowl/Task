import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AuthorizationForm = () => {
    const dispatch = useDispatch() // используем useDispatch для того, чтобы пользоваться редьюсером
    const userData = useSelector(state => state.user) // с помощью useSelector из глобального состояния получаем данные уже зареганного пользователя
    const [login, setLogin] = useState("") // состояние логина
    const [password, setPassword] = useState("") // состояние пароля
    const [error, setError] = useState(false) // состояние ошибки при авторизации
    const navigate = useNavigate() // для переадресации пользователя при успешной авторизации

    const handleClick = () => {
        // если логин или пароль неверные, то выдаём ошибку
        if (userData.login !== login || userData.password !== password) {
            setError(true)
            // иначе помечаем юзера авторизованным и перенаправляем на страничку с таблицей
        } else {
            dispatch(setUser({
                authentificated: true   
            }))
            navigate('/table')
        }
        

    }
    return (
        <Box component="form" 
        sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}> 
            <Typography sx={{marginBottom: "20px"}}>Заполните форму авторизации:</Typography>
            {/* тут вводим логин */}
            <TextField sx={{marginBottom: "10px"}} required id="outlined-required" label="Введите логин"
                onChange={(e) => setLogin(e.target.value)}
            />
            {/* а тут вводим пароль */}
            <TextField sx={{marginBottom: "20px"}} required id="outlined-required" label="Введите пароль"
                onChange={(e) => setPassword(e.target.value)}
            />
            {/* кнопка для входа */}
            <Button variant="outlined" onClick={handleClick} sx={{marginBottom: "20px"}}>Войти</Button>
            <Link to='/'><Button>Перейти на страницу регистрации</Button></Link>
            {/* если возникла ошибка, то уведомляем пользователя */}
            {error && <Typography color="red">Введённые данные неверны!</Typography>}
        </Box>
    )
}

export default AuthorizationForm