import { Box, Dialog, DialogContent, DialogActions, DialogTitle, Button, TextField, Card, CardContent, CardActions, InputBase, IconButton, Paper, Typography } from "@mui/material"
import { useState } from "react"

const ObjectCard = ({item, remove, objects}) => {
   
    const [edit, setEdit] = useState(false)
    const [editObject, setEditObject] = useState("")

    const handleOK = (obj) => {
        const copy = Object.assign([], objects)       
        copy.map(item => {
             if (item.id === obj.id) item.name = editObject
            
         })
        setEdit(false)
    }
    
    return (
        <Card sx={{margin: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}} key={item.id}>
            <CardContent>
                {edit ? 

                    <Paper>
                        <InputBase label={item.name} onChange={(e) => setEditObject(e.target.value)} /> 
                        <IconButton type="button" onClick={() => handleOK(item)}>OK</IconButton>
                    </Paper>

                : item.name}
            </CardContent>
            <CardActions>
                <Button onClick={() => setEdit(!edit)}>
                    {edit ? <Typography>Отмена</Typography> : <Typography>Редактировать</Typography>}
                </Button>
                <Button onClick={remove.bind(this, item.id)}>Удалить</Button>
            </CardActions>
        </Card>
        
    )
}

export default ObjectCard