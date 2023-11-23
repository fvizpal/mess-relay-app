import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { setExpenses } from "state";

const Expenses = () => {
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expenses);

    const getExpenses = async () => {
        const response = await fetch("http://localhost:3001/admin/expenses", {
            method: "GET",
        });
        const data = await response.json();
        if (data) {
            dispatch(setExpenses({ expenses: data }));
        }
    };

    useEffect(() => {
        getExpenses();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <Box></Box>
            <Box>
                <Form />
            </Box>
        </>
    );
};

export default Expenses;
