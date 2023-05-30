import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';

const TableComponent = ({data}) => {
    return (
        <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        {/* ячейки в headere заполняем ключами из полученных данных*/}
                        <TableRow> 
                            {data[0] && Object.keys(data[0]).map((item, id) => <TableCell key={id}>{item}</TableCell>)}
                        </TableRow>
                    </TableHead> 
                    <TableBody>
                        {/* проходимся по данным и заполняем ячейки*/}
                        {data.map((item, id) => 
                        <TableRow key={id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.first_name}</TableCell>
                            <TableCell>{item.last_name}</TableCell>
                            <TableCell><Avatar src={item.avatar} /></TableCell>
                        </TableRow>
                        )}
                    </TableBody>
                        </Table>
                </TableContainer>
    )
}

export default TableComponent