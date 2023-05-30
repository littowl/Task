import React from "react"
import TableAPI from "../modules/TableAPI"
import Navigation from "../modules/Navigation"
import { Box } from "@mui/material"

// страничка с таблицей
const TablePage = () => {
    return (
        <Box>
            <Navigation />
            <TableAPI />
        </Box>
        
    )
}

export default TablePage