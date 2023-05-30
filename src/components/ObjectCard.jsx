import { Button, Card, CardContent, CardActions, InputBase, IconButton, Paper, Typography } from "@mui/material"
import { useState } from "react"

const ObjectCard = ({item, remove, objects}) => {
   
    const [edit, setEdit] = useState(false) // редактируем/не редактируем объект
    const [editObject, setEditObject] = useState("") //обновлённое имя объекта

    // подтверждаем изменение объекта 
    // (делаем копию массива объектов и меняем там имя объекта, к которому обращаемся по id)
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
                {edit ? //проверяем, редактируется ли объект
                // если редактируется, то отрисовываем инпут и кнопку
                    <Paper>
                        {/* вводим сюда имя, которое передаётся переменной editObject */}
                        <InputBase label={item.name} onChange={(e) => setEditObject(e.target.value)} /> 
                        {/* подтверждаем изменения */}
                        <IconButton type="button" onClick={() => handleOK(item)}>OK</IconButton>
                    </Paper>
                // если не редактируется, то отрисовываем только имя объекта
                : item.name}
            </CardContent>
            <CardActions>
                {/* кнопка "редактировать/отмена", жмём на нее и редачим */}
                <Button onClick={() => setEdit(!edit)}>
                    {edit ? <Typography>Отмена</Typography> : <Typography>Редактировать</Typography>}
                </Button>
                {/* кнопка удаления */}
                <Button onClick={remove.bind(this, item.id)}>Удалить</Button>
            </CardActions>
        </Card>
        
    )
}

export default ObjectCard