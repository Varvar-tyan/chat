import { Grid } from "@mui/material";
import DialogsHeader from "./DialogsHeader/DialogsHeader";
import DialogsList from "./DialogsList/DialogsList";

const DialogsWindow = () => {
    return (
        <Grid item xs={12} md={3.5}>
            <DialogsHeader />
            <DialogsList />
        </Grid>
    )
}

export default DialogsWindow;