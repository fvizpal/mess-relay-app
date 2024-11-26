import { Formik } from "formik";
import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    useMediaQuery,
    Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import * as yup from "yup";
import Dropzone from "react-dropzone";
import { addComplaint } from "state";

const complaintSchema = yup.object().shape({
    description: yup.string().required("Required"),
    room: yup.number().required("Required"),
    picture: yup.string(),
});

const initialComplaintValues = {
    description: "",
    room: "",
    picture: "",
};

const Form = () => {
    const dispatch = useDispatch();

    const { firstName, lastName, email, hostel } = useSelector(
        (state) => state.user
    );
    const fullName = `${firstName} ${lastName}`;

    const [hasComplained, setHasComplained] = useState(false);

    const isDesktop = useMediaQuery("(min-width:600px)");
    const BaseUrl = process.env.REACT_APP_Backend_Url; // Fetching Base URL from .env

    const registerComplaint = async (values, onSubmitProps) => {
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        formData.append("picturePath", values.picture.name);
        formData.append("fullName", fullName);
        formData.append("email", email);
        formData.append("hostel", hostel);

        const savedUserResponse = await fetch(
            `${BaseUrl}/student/complaint`,
            {
                method: "POST",
                body: formData,
            }
        );
        const savedComplaint = await savedUserResponse.json();

        onSubmitProps.resetForm();
        if (savedComplaint) {
            dispatch(addComplaint(savedComplaint));
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
                            multiline
                            maxRows={4}
                        />
                        <Box
                            border={"1px solid primary"}
                            borderRadius={"5px"}
                            p={"1rem"}
                        >
                            <Dropzone
                                acceptedFiles=".jpg,.jpeg,.png"
                                multiple={false}
                                onDrop={(acceptedFiles) =>
                                    setFieldValue("picture", acceptedFiles[0])
                                }
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <Box
                                        {...getRootProps()}
                                        border={`2px dashed primary`}
                                        p="1rem"
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
                                            <Box>
                                                <Typography>
                                                    {values.picture.name}
                                                </Typography>
                                            </Box>
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
                                color: "primary",
                                "&:hover": { color: "secondary" },
                            }}
                        >
                            SUBMIT
                        </Button>
                        {hasComplained && (
                            <Alert variant="filled" severity="success">
                                Complaint registered Successfully
                            </Alert>
                        )}
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default Form;
