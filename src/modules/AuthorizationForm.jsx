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
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        if (userData.login !== login || userData.password !== password) {
            setError(true)
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
            <TextField sx={{marginBottom: "10px"}} required id="outlined-required" label="Введите логин"
                onChange={(e) => setLogin(e.target.value)}
            />
            <TextField sx={{marginBottom: "20px"}} required id="outlined-required" label="Введите пароль"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="outlined" onClick={handleClick}>Войти</Button>
            <Link to='/'><Button>Перейти на страницу регистрации</Button></Link>
            {error && <Typography>Введённые данные неверны!</Typography>}
        </Box>
    )
}

export default AuthorizationForm