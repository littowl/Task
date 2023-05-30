
import { Box, Dialog, DialogContent, DialogActions, DialogTitle, Button, TextField, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'
import ObjectCard from "../components/ObjectCard"
import {useState} from 'react'

const CreateObjectForm = () => {
    const isAuth = useSelector(state => state.user.authentificated) // с помощью этого узнаём состояние авторизации пользователя
    const [open, setOpen] = useState(false) // модалка открыта/закрыта
    const [name, setName] = useState("") // имя объекта
    const [objects, setObjects] = useState([]) // массив всех объектов

    const handleOpen = () => setOpen(true) // открыли модалку
    const handleClose = () => setOpen(false) // закрыли модалку

    // создаём объект - добавляем к objects введённое имя объекта и id
    const createObject = () => {
        setObjects([...objects, {
            id: Date.now(),
            name: name
        }])
        setOpen(false) // закрываем модалку
    }

    // удаляем объект 
    const removeObject = (objectId) => {
        setObjects(objects.filter((item, id) => item.id !== objectId))
    }
    
    return (
        <Box>
            {isAuth ? //проверяем авторизацию, если авторизован, то отрисовываем интерфейс
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '90vh'}}>
                <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                    {/* отрисовываем все объекты, 
                    в компоненту ObjectCard прокидываем текущий объект,
                     функцию удаления и весь массив объектов */}
                    {objects.map(item => <ObjectCard key={item.id} item={item} remove={removeObject} objects={objects}/> )}
                </Box> 
                {/* кпопка открытия модалки с формой создания */}
                <Button onClick={handleOpen}>Создать объект</Button>
                {/* модалка */}
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Создание нового объекта</DialogTitle>
                    <DialogContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        {/* вводим имя, помещаем его в setName */}
                        <TextField sx={{marginBottom: "10px"}} required id="outlined-required" label="Введите имя объекта"
                            onChange={(e) => setName(e.target.value)}
                        />
                        
                    </DialogContent>
                    {/* создаём объект, вызывая createObject */}
                    <DialogActions><Button onClick={createObject}>Создать</Button></DialogActions>
                    
                </Dialog>
            </Box>
            : // если не авторизован, то говорим авторизоваться
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'}}>
                    <Typography>Для доступа к данной странице вы должны быть авторизованы.</Typography>
                    <Link to='/auth'><Button>Перейти на страницу авторизации</Button></Link>
            </Box>
            }
            
        </Box>
    )
}

export default CreateObjectForm