import { Formik } from "formik";
import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    // useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";

const complaintSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    description: yup.string().required("Required"),
    room: yup.string().required("Required"),
});

const initialComplaintValues = {
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    room: "",
};

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isDesktop = useMediaQuery("(min-width:600px)");

    const registerComplaint = async (values, onSubmitProps) => {
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        // for (const pair of formData.entries()) {
        //     console.log(pair[0] + ", " + pair[1]);
        // }

        const savedUserResponse = await fetch(
            "http://localhost:3001/complaint",
            {
                method: "POST",
                body: formData,
            }
        );
        // console.log(savedUserResponse);
        const savedComplaint = await savedUserResponse.json();
        console.log(savedComplaint);
        onSubmitProps.resetForm();
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
                        display="grid"
                        gap="30px"
                        sx={{
                            "& > div": {
                                gridColumn: isDesktop ? undefined : "span 4",
                            },
                        }}
                    >
                        <TextField
                            label="First Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            name="firstName"
                            error={
                                Boolean(touched.firstName) &&
                                Boolean(errors.firstName)
                            }
                            helperText={touched.firstName && errors.firstName}
                        />
                        <TextField
                            label="Last Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.lastName}
                            name="lastName"
                            error={
                                Boolean(touched.lastName) &&
                                Boolean(errors.lastName)
                            }
                            helperText={touched.lastName && errors.lastName}
                        />
                        <TextField
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={
                                Boolean(touched.email) && Boolean(errors.email)
                            }
                            helperText={touched.email && errors.email}
                        />
                        <TextField
                            label="Room number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.room}
                            name="room"
                            error={
                                Boolean(touched.room) && Boolean(errors.room)
                            }
                            helperText={touched.room && errors.room}
                        />
                        <TextField
                            label="Description"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.description}
                            name="description"
                            error={
                                Boolean(touched.description) &&
                                Boolean(errors.description)
                            }
                            helperText={
                                touched.description && errors.description
                            }
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
