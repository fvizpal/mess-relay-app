import { Formik } from "formik";
import {
    Button,
    Paper,
    TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";

import * as yup from "yup";
import { addExpense } from "state";

const complaintSchema = yup.object().shape({
    item: yup.string().required("Required"),
    rate: yup.number().required("Required"),
    units: yup.number().required("Required"),
});

const initialComplaintValues = {
    item: "",
    rate: "",
    units: "",
};

const Form = () => {
    const dispatch = useDispatch();

    // const isDesktop = useMediaQuery("(min-width:600px)");
    const BaseUrl = process.env.REACT_APP_Backend_Url; // Fetching Base URL from .env

    const registerComplaint = async (values, onSubmitProps) => {
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }

        const savedUserResponse = await fetch(
            `${BaseUrl}/admin/expenses/add`,
            {
                method: "POST",
                body: formData,
            }
        );
        const savedExpense = await savedUserResponse.json();

        onSubmitProps.resetForm();
        if (savedExpense) {
            dispatch(addExpense(savedExpense));
        }
    };

    const handleFormSubmit = async (values, onSubmitProps) => {
        registerComplaint(values, onSubmitProps);
    };

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialComplaintValues}
            validationSchema={complaintSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Paper
                        sx={{
                            position: "fixed",
                            bottom: 10,
                            right: 0,
                            padding: "16px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                        elevation={3}
                    >
                        <TextField
                            label="Name of the Item"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.item}
                            name="item"
                            error={
                                Boolean(touched.item) && Boolean(errors.item)
                            }
                            helperText={touched.item && errors.item}
                        />
                        <TextField
                            label="Rate per Unit"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.rate}
                            name="rate"
                            error={
                                Boolean(touched.rate) && Boolean(errors.rate)
                            }
                            helperText={touched.rate && errors.rate}
                        />
                        <TextField
                            label="Number of Units"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.units}
                            name="units"
                            error={
                                Boolean(touched.units) && Boolean(errors.units)
                            }
                            helperText={touched.units && errors.units}
                        />
                        <Button
                            fullwidth="true"
                            type="submit"
                            sx={{
                                color: "primary",
                                "&:hover": { color: "secondary" },
                            }}
                            disabled={
                                !(values.item && values.rate && values.units)
                            }
                        >
                            ADD
                        </Button>
                    </Paper>
                </form>
            )}
        </Formik>
    );
};

export default Form;
