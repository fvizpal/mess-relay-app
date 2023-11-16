import { Formik } from "formik";
import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    useMediaQuery,
    // useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import Dropzone from "react-dropzone";
import { setComplaints } from "state";

const complaintSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    description: yup.string().required("Required"),
    room: yup.string().required("Required"),
    picture: yup.string(),
});

const initialComplaintValues = {
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    room: "",
    picture: "",
};

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [hasComplained, setHasComplained] = useState(false);

    const isDesktop = useMediaQuery("(min-width:600px)");

    const registerComplaint = async (values, onSubmitProps) => {
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        formData.append("picturePath", values.picture.name);
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
        console.log(savedComplaint);
        onSubmitProps.resetForm();
        if (savedComplaint) {
            dispatch(
                setComplaints({
                    complaints: savedComplaint.complaint,
                })
            );
            navigate("/complaint");
            setHasComplained(true);
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
                        <Box
                            border={"1px solid primary"}
                            borderRadius={"5px"}
                            p={"1rem"}
                        >
                            <Dropzone
                                acceptedFiles=".jpg,.jpeg,.png"
                                multiple={false}
                                onDrop={(acceptedFiles) => {
                                    setFieldValue("picture", acceptedFiles[0]);
                                }}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <Box
                                        {...getInputProps()}
                                        border={"2px solid primary"}
                                        p={"1rem"}
                                        sx={{
                                            "&:hover": {
                                                cursor: "pointer",
                                            },
                                        }}
                                    >
                                        <input {...getInputProps()} />
                                        {!values.picture ? (
                                            <p>Add Picture Here</p>
                                        ) : (
                                            <Typography>
                                                {values.picture.name}
                                            </Typography>
                                        )}
                                    </Box>
                                )}
                            </Dropzone>
                        </Box>
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
                        {hasComplained && (
                            <>
                                <Typography>
                                    Complaint registered successfully
                                </Typography>
                            </>
                        )}
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default Form;
