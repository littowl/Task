
import { Box, Dialog, DialogContent, DialogActions, DialogTitle, Button, TextField, Card, CardContent, CardActions, InputBase, IconButton, Paper, Typography } from "@mui/material"
import ObjectForm from "../components/ObjectCard"
import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'
import ObjectCard from "../components/ObjectCard"
import {useState} from 'react'

const CreateObjectForm = () => {
    const isAuth = useSelector(state => state.user.authentificated)
    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const [objects, setObjects] = useState([])

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const createObject = () => {
        setObjects([...objects, {
            id: Date.now(),
            name: name
        }])
        setOpen(false)
    }
    const removeObject = (objectId) => {
        setObjects(objects.filter((item, id) => item.id !== objectId))
    }
    
    const changeObject = () => {

    }
    return (
        <Box>
            {isAuth ? 
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '90vh'}}>
                <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                    {objects.map(item => <ObjectCard key={item.id} item={item} remove={removeObject} objects={objects}/> )}
                </Box>
                <Button onClick={handleOpen}>Создать объект</Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Создание нового объекта</DialogTitle>
                    <DialogContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <TextField sx={{marginBottom: "10px"}} required id="outlined-required" label="Введите имя объекта"
                            onChange={(e) => setName(e.target.value)}
                        />
                        
                    </DialogContent>
                    <DialogActions><Button onClick={createObject}>Создать</Button></DialogActions>
                    
                </Dialog>
            </Box>
            :
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'}}>
                    <Typography>Для доступа к данной странице вы должны быть авторизованы.</Typography>
                    <Link to='/auth'><Button>Перейти на страницу авторизации</Button></Link>
            </Box>
            }
            
        </Box>
    )
}

export default CreateObjectForm