import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(setUser({
            login: login,
            password: password
        }))
        navigate('auth')

    }
    return (
        <Box component="form" 
        sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}> 
            <Typography sx={{marginBottom: "20px"}}>Заполните форму регистрации:</Typography>
            <TextField sx={{marginBottom: "10px"}} required id="outlined-required" label="Введите логин"
                onChange={(e) => setLogin(e.target.value)}
            />
            <TextField sx={{marginBottom: "20px"}} required id="outlined-required" label="Введите пароль"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="outlined" onClick={handleClick}>Регистрация</Button>
        </Box>
    )
}

export default RegistrationForm