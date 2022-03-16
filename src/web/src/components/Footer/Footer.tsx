import { Box, Typography } from "@mui/material";

export default function Footer() {

    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            width: "55%",
            height: "50px",
            paddingLeft: "45%",
            backgroundColor: "#202020"
        }}>
            <Typography color={"#FFFFFF"}>
                Made by rtacr
            </Typography>
        </Box>
    );
}