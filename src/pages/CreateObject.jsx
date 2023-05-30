import CreateObjectForm from "../modules/CreateObjectForm"
import { Box } from "@mui/material"
import Navigation from "../modules/Navigation"

// страничка создания объекта
const CreateObject = () => {
    return (
        <Box>
            <Navigation />
            <CreateObjectForm />
        </Box>
        
    )
}

export default CreateObject