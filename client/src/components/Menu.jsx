import React, { useState } from "react";
import { Typography, Divider, Box, TextField, IconButton } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setUpdateMessMenu } from "state";

const Menu = ({ menuId, day, breakfast, lunch, snack, dinner, isEditable }) => {
    const dispatch = useDispatch();
    const BaseUrl = process.env.REACT_APP_Backend_Url;

    // Pre-compute uppercase values
    const dayA = day.toUpperCase();
    const [editedBreakfast, setEditedBreakfast] = useState(breakfast.toUpperCase());
    const [editedLunch, setEditedLunch] = useState(lunch.toUpperCase());
    const [editedSnack, setEditedSnack] = useState(snack.toUpperCase());
    const [editedDinner, setEditedDinner] = useState(dinner.toUpperCase());

    const [isEditBreakfast, setIsEditBreakfast] = useState(false);
    const [isEditLunch, setIsEditLunch] = useState(false);
    const [isEditSnack, setIsEditSnack] = useState(false);
    const [isEditDinner, setIsEditDinner] = useState(false);

    const handleEdit = async (type, value) => {
        try {
            const response = await fetch(`${BaseUrl}/admin/menu/update/${menuId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type,
                    field: value,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to update menu");
            }

            const updatedMenu = await response.json();
            dispatch(setUpdateMessMenu({ menu: updatedMenu }));
        } catch (error) {
            console.error("Error updating menu:", error.message);
        }
    };

    return (
        <Box
            border="1px solid"
            borderRadius="1rem"
            margin="1rem"
            padding="1rem"
        >
            <Typography variant="h4" marginBottom="1rem">
                {dayA}
            </Typography>
            <Box>
                <Divider textAlign="left">Breakfast</Divider>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        margin: "1rem 0",
                    }}
                >
                    {isEditBreakfast ? (
                        <>
                            <TextField
                                value={editedBreakfast}
                                onChange={(e) => setEditedBreakfast(e.target.value.toUpperCase())}
                            />
                            <IconButton
                                onClick={() => {
                                    handleEdit("breakfast", editedBreakfast);
                                    setIsEditBreakfast(false);
                                }}
                            >
                                <CheckCircle />
                            </IconButton>
                        </>
                    ) : (
                        <Box
                            onClick={() => isEditable && setIsEditBreakfast(true)}
                            sx={{
                                cursor: isEditable ? "pointer" : "default",
                                transition: "transform 0.2s",
                                "&:hover": isEditable
                                    ? { transform: "scale(1.1)" }
                                    : undefined,
                            }}
                        >
                            {editedBreakfast}
                        </Box>
                    )}
                </Box>

                <Divider textAlign="left">Lunch</Divider>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        margin: "1rem 0",
                    }}
                >
                    {isEditLunch ? (
                        <>
                            <TextField
                                value={editedLunch}
                                onChange={(e) => setEditedLunch(e.target.value.toUpperCase())}
                            />
                            <IconButton
                                onClick={() => {
                                    handleEdit("lunch", editedLunch);
                                    setIsEditLunch(false);
                                }}
                            >
                                <CheckCircle />
                            </IconButton>
                        </>
                    ) : (
                        <Box
                            onClick={() => isEditable && setIsEditLunch(true)}
                            sx={{
                                cursor: isEditable ? "pointer" : "default",
                                transition: "transform 0.2s",
                                "&:hover": isEditable
                                    ? { transform: "scale(1.1)" }
                                    : undefined,
                            }}
                        >
                            {editedLunch}
                        </Box>
                    )}
                </Box>

                <Divider textAlign="left">Snack</Divider>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        margin: "1rem 0",
                    }}
                >
                    {isEditSnack ? (
                        <>
                            <TextField
                                value={editedSnack}
                                onChange={(e) => setEditedSnack(e.target.value.toUpperCase())}
                            />
                            <IconButton
                                onClick={() => {
                                    handleEdit("snack", editedSnack);
                                    setIsEditSnack(false);
                                }}
                            >
                                <CheckCircle />
                            </IconButton>
                        </>
                    ) : (
                        <Box
                            onClick={() => isEditable && setIsEditSnack(true)}
                            sx={{
                                cursor: isEditable ? "pointer" : "default",
                                transition: "transform 0.2s",
                                "&:hover": isEditable
                                    ? { transform: "scale(1.1)" }
                                    : undefined,
                            }}
                        >
                            {editedSnack}
                        </Box>
                    )}
                </Box>

                <Divider textAlign="left">Dinner</Divider>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        margin: "1rem 0",
                    }}
                >
                    {isEditDinner ? (
                        <>
                            <TextField
                                value={editedDinner}
                                onChange={(e) => setEditedDinner(e.target.value.toUpperCase())}
                            />
                            <IconButton
                                onClick={() => {
                                    handleEdit("dinner", editedDinner);
                                    setIsEditDinner(false);
                                }}
                            >
                                <CheckCircle />
                            </IconButton>
                        </>
                    ) : (
                        <Box
                            onClick={() => isEditable && setIsEditDinner(true)}
                            sx={{
                                cursor: isEditable ? "pointer" : "default",
                                transition: "transform 0.2s",
                                "&:hover": isEditable
                                    ? { transform: "scale(1.1)" }
                                    : undefined,
                            }}
                        >
                            {editedDinner}
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Menu;
