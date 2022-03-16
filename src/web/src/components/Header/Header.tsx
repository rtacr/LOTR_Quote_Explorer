import { AppBar, Toolbar, Box, Typography } from "@mui/material";

function Header() {
    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" >
            <Toolbar sx={{ minHeight: "100px !important" }}>
                <Box sx={{ flexGrow: 0.05 }}>
                    <img src="./logo.png" alt="logo" height={75} />
                </Box>
                <Box sx={{flexGrow: 0.4}}/>
                <Typography variant="h2">
                    LOTR Quote Explorer
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
    );
}
export { Header };