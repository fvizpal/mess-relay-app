import { Formik } from "formik";
import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    // useTheme,
    MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "state";

import * as yup from "yup";

const registerSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required("Required"),
    role: yup.string().required("Required"),
    hostel: yup.string().required("Required"),
});

const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required("Required"),
});

const initailRegisterValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    hostel: "",
};

const initialLoginValues = {
    email: "",
    password: "",
};

const Form = () => {
    const [pageType, setPageType] = useState("login");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isDesktop = useMediaQuery("(min-width:600px)");

    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    const register = async (values, onSubmitProps) => {
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }

        const savedUserResponse = await fetch("localhost:3001/auth/register", {
            method: "POST",
            body: formData,
        });
        const saveduser = savedUserResponse.json();
        onSubmitProps.resetForm();
        if (saveduser) {
            setPageType("login");
        }
    };

    const login = async (values, onSubmitProps) => {
        const loggedInResponse = await fetch(
            "http://localhost:3001/auth/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            }
        );
        const loggedIn = await loggedInResponse.json();
        onSubmitProps.resetForm();
        if (loggedIn) {
            dispatch(
                setLogin({
                    user: loggedIn.user,
                    token: loggedIn.token,
                })
            );
            navigate("/home");
        }
    };

    const handleFormSubmit = async (values, onSubmitProps) => {
        if (isLogin) await login(values, onSubmitProps);
        if (isRegister) await register(values, onSubmitProps);
    };

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={isLogin ? initialLoginValues : initailRegisterValues}
            validationSchema={isLogin ? loginSchema : registerSchema}
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
                <form>
                    <Box
                        display="grid"
                        gap="30px"
                        sx={{
                            "& > div": {
                                gridColumn: isDesktop ? undefined : "span 4",
                            },
                        }}
                    >
                        {isRegister && (
                            <>
                                <TextField
                                    label="First name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    name="firstName"
                                    error={
                                        Boolean(touched.firstName) &&
                                        Boolean(errors.firstName)
                                    }
                                    helperText={
                                        touched.firstName && errors.firstName
                                    }
                                />
                                <TextField
                                    label="Last name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    name="lastName"
                                    error={
                                        Boolean(touched.lastName) &&
                                        Boolean(errors.lastName)
                                    }
                                    helperText={
                                        touched.lastName && errors.lastName
                                    }
                                />
                                <TextField
                                    label="Role"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.role}
                                    name="role"
                                    error={
                                        Boolean(touched.role) &&
                                        Boolean(errors.role)
                                    }
                                    helperText={touched.role && errors.role}
                                    select
                                >
                                    <MenuItem value="student">Student</MenuItem>
                                    <MenuItem value="admin">Admin</MenuItem>
                                </TextField>
                                <TextField
                                    label="Hostel"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.hostel}
                                    name="hostel"
                                    error={
                                        Boolean(touched.hostel) &&
                                        Boolean(errors.hostel)
                                    }
                                    helperText={touched.hostel && errors.hostel}
                                    select
                                >
                                    <MenuItem value="tandon">
                                        Tandon Hostel
                                    </MenuItem>
                                    <MenuItem value="malviya">
                                        Malviya Hostel
                                    </MenuItem>
                                    <MenuItem value="tilak">
                                        Tilak Hostel
                                    </MenuItem>
                                    <MenuItem value="newboys">
                                        New Boys Hostel
                                    </MenuItem>
                                </TextField>
                            </>
                        )}

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
                            label="Password"
                            type="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            name="password"
                            error={
                                Boolean(touched.password) &&
                                Boolean(errors.password)
                            }
                            helperText={touched.password && errors.password}
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
                            {isLogin ? "LOGIN" : "REGISTER"}
                        </Button>
                        <Typography
                            onClick={() => {
                                setPageType(isLogin ? "register" : "login");
                                resetForm();
                            }}
                            sx={{
                                textDecoration: "underline",
                                "&:hover": {
                                    cursor: "pointer",
                                    color: "primary",
                                },
                            }}
                        >
                            {isLogin
                                ? "Haven't registered? Sign Up here"
                                : "Already registered? Login"}
                        </Typography>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default Form;
