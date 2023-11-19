import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const MenuComp = () => {
    return (
        <Box display={"flex"} justifyContent={"space-between"}>
            <Box
                display={"flex"}
                flexDirection={"column"}
                borderRadius={"1rem"}
                margin={"1rem 1rem 1rem 1rem"}
                border={"1px solid"}
                height={"35rem"}
                width={"15rem"}
            >
                <Typography
                    variant="h4"
                    margin={"1rem 1rem 1rem 1rem"}
                    padding={"1rem 1rem 1rem 1rem"}
                >
                    Monday
                </Typography>
                <Stack width={"100%"} spacing={2}>
                    <Divider textAlign="left">Breakfast</Divider>
                    <div margin={"10rem"}>IDLI SAMBHAR & MILK BOURNVITA</div>
                    <Divider textAlign="left">Lunch</Divider>
                    <div margin={"10rem"}>
                        MATAR PANEER, URAD DAL, RAYTA(KHEERA), RICE, ROTI
                    </div>
                    <Divider textAlign="left">Snack</Divider>
                    <div margin={"10rem"}>SAMOSA, CHAI & CHUTNEY</div>
                    <Divider textAlign="left">Dinner</Divider>
                    <div margin={"10rem"}>
                        AALU MATAR, ARHAR DAL, GULABJAMUN, ROTI & RICE
                    </div>
                </Stack>
            </Box>
        </Box>
    );
};

export default MenuComp;
