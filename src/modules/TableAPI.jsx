import { useEffect, useState } from 'react';
import axios from 'axios'
import { Typography, Box, Button, ButtonGroup } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TableComponent from '../components/TableComponent';

const TableAPI = () => {
     
    // состояние страницы и url, в котором его используем для пагинации
    const [page, setPage] = useState(1)
    const url = `https://reqres.in/api/users?page=${page}`

    // состояние данных, которые будут приходить с апи
    const [data, setData] = useState([])

    // для проверки авторизации пользователя
    const isAuth = useSelector(state => state.user.authentificated)

    // получаем данные с апи
    const getUsers = async () => {
        setData([]) // убираем все предыдущие данные из состояния

        // делаем get-запрос и данные из response помещаем в состояние (setData)
        await axios.get(url).then((res) => { 
            res.data.data.map((item) => {
                setData(state => {
                    state = [...state, item]
                    return state
                })
            })
        })  
    }

    // загрузка данных при загрузке и изменении странички
    useEffect(() => {getUsers()}, [page])

    return (
        <Box>
            {isAuth ? //проверяем авторизацию, если авторизован, то отрисовываем интерфейс
            <Box > 
                {/* компонента таблицы, в неё передаём данные, полученные с апи */}
                <TableComponent data={data}/>
                {/* кнопочки для переключения страниц */}
                <ButtonGroup sx={{marginTop: 2, display: 'flex', justifyContent: 'center'}}>
                    <Button onClick={() => setPage(1)}>1</Button>
                    <Button onClick={() => setPage(2)}>2</Button>
                </ButtonGroup>
            </Box>
                :  // если не авторизован, то говорим авторизоваться
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'}}>
                    <Typography>Для доступа к данной странице вы должны быть авторизованы.</Typography>
                    <Link to='/auth'><Button>Перейти на страницу авторизации</Button></Link>
                    
                </Box>
                
            }
            

        </Box>
        
    )
}

export default TableAPI