import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { Typography, Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TableAPI = () => {

    let page = 1
    const url = `https://reqres.in/api/users?page=${page}`

    const [data, setData] = useState([])
    const userAuth = useSelector(state => state.user.authentificated)

    const getUsers = async () => {
        await axios.get(url).then((res) => {
            res.data.data.map((item) => {
                setData(state => {
                    state = [...state, item]
                    return state
                })
            })
        })  
    }

    useEffect(() => {getUsers()}, [])

    return (
        <Box>
            {userAuth ?
                <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {data[0] && Object.keys(data[0]).map((item, id) => <TableCell key={id}>{item}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, id) => 
                        <TableRow key={id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.first_name}</TableCell>
                            <TableCell>{item.last_name}</TableCell>
                            <TableCell><Avatar src={item.avatar} /></TableCell>
                        </TableRow>)}
                    </TableBody>
                        </Table>
                </TableContainer>
                : 
                <Box>
                    <Typography>Для доступа к данной странице вы должны быть авторизованы.</Typography>
                    <Link to='/auth'><Button>Перейти на страницу авторизации</Button></Link>
                    
                </Box>
                
            }
            

        </Box>
        
    )
}

export default TableAPI