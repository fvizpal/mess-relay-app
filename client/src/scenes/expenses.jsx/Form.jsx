import { Formik } from "formik";
import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    // useTheme,
    Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { setComplaints } from "state";

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
    const navigate = useNavigate();

    const { firstName, lastName, email, hostel } = useSelector(
        (state) => state.user
    );
    const fullName = firstName + " " + lastName;

    const isDesktop = useMediaQuery("(min-width:600px)");

    const registerComplaint = async (values, onSubmitProps) => {
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        formData.append("picturePath", values.picture.name);
        formData.append("fullName", fullName);
        formData.append("email", email);
        formData.append("hostel", hostel);
        // for (const pair of formData.entries()) {
        //     console.log(pair[0] + ", " + pair[1]);
        // }

        const savedUserResponse = await fetch(
            "http://localhost:3001/student/complaint",
            {
                method: "POST",
                body: formData,
            }
        );
        // console.log(savedUserResponse);
        const savedComplaint = await savedUserResponse.json();

        onSubmitProps.resetForm();
        if (savedComplaint) {
            dispatch(
                setComplaints({
                    complaints: savedComplaint.complaint,
                })
            );
            navigate("/complaint");
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
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="flex"
                        gap="30px"
                        sx={{
                            "& > div": {
                                gridColumn: isDesktop ? undefined : "span 4",
                            },
                        }}
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
                            multiline
                            maxRows={4}
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
                            multiline
                            maxRows={4}
                        />
                    </Box>

                    <Box>
                        <Button
                            fullwidth="true"
                            type="submit"
                            sx={{
                                m: "2rem 0",
                                p: "1rem",
                                // backgroundColor={primary}
                                color: "primary",
                                "&:hover": { color: "secondary" },
                            }}
                        >
                            SUBMIT
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default Form;
