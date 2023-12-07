import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Link,
    Radio,
    RadioGroup,
    Stack,
    Text
} from '@chakra-ui/react';
import signin from "../assets/signin.png";
import Footer from '../components/Footer';
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { post } from "../helpers/helpers";
import { setItem } from "../../utils/localStorage";
import { ErrorContext } from '../context/error';
import { useContext } from 'react';

function SignUp() {
    const history = useHistory();
    const {setErrorModal}=useContext(ErrorContext);

    const handleSubmit = async (values) => {
        try {
            const result = await post("user/signup", {
                name: values.name + " " + values.surname,
                email: values.email,
                password: values.password,
                user: values.role === "teacher"
            },setErrorModal);
            console.log("res",result)
            if (result.id) {
                setItem("user", result);
                history.push("/home");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Name is required';
        }

        if (!values.surname) {
            errors.surname = 'Surname is required';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(values.email)) {
            errors.email = 'Invalid email format';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 7) {
            errors.password = 'Password must be at least 7 characters long';
        }

        if (!values.role) {
            errors.role = 'User type is required';
        }

        return errors;
    };

    return (
        <>
            <div style={{ height: '800px', display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: 2, display: "flex", alignItems: "center", justifyContent: 'center' }}>

                    <Box textAlign="center">

                        <div style={{ display: "flex", alignItems: "center", marginBottom: "100px" }}>
                            <img src={logo} alt="Logo" style={{ width: "60px", marginRight: "20px" }} />
                            <Heading>LearnRoom</Heading>
                        </div>

                        <Formik
                            initialValues={{
                                name: '',
                                surname: '',
                                email: '',
                                password: '',
                                role: "student",
                            }}
                            onSubmit={handleSubmit}
                            validate={validateForm}
                        >
                            <Form>
                                <Field name="name">
                                    {({ field, form }) => (
                                        <FormControl id="name" my="4" isInvalid={form.errors.name && form.touched.name}>
                                            <FormLabel>Name:</FormLabel>
                                            <Input {...field} type="text" />
                                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="surname">
                                    {({ field,form }) => (
                                        <FormControl id="surname" my="4" isInvalid={form.errors.name && form.touched.name}>
                                            <FormLabel>Surname:</FormLabel>
                                            <Input {...field} type="text" />
                                            <FormErrorMessage>{form.errors.surname}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="email">
                                    {({ field,form }) => (
                                        <FormControl id="email" my="4" isInvalid={form.errors.email && form.touched.email}>
                                            <FormLabel>Email:</FormLabel>
                                            <Input {...field} type="email" />
                                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="password">
                                    {({ field,form }) => (
                                        <FormControl id="password" my="4" isInvalid={form.errors.password && form.touched.password}>
                                            <FormLabel>Password:</FormLabel>
                                            <Input {...field} type="password" />
                                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="role">
                                    {({ field, form }) => (
                                        <FormControl as="fieldset" my="4">
                                            <FormLabel as="legend">User Type:</FormLabel>
                                            <RadioGroup
                                                {...field}
                                                onChange={(value) => form.setFieldValue("role", value)}
                                            >
                                                <Stack direction="row">
                                                    <Radio value="student">Student</Radio>
                                                    <Radio value="teacher">Teacher</Radio>
                                                </Stack>
                                            </RadioGroup>
                                        </FormControl>
                                    )}
                                </Field>


                                <Button
                                    colorScheme="custom"
                                    color="white"
                                    bgColor="#FF796E"
                                    rounded="full"
                                    type="submit"
                                    my="4"
                                >
                                    Signup
                                </Button>
                            </Form>
                        </Formik>

                        <Text fontSize={'14px'}>
                            Already have an account? <Link fontWeight={'bold'} href="/signin">Sign in</Link>
                        </Text>
                    </Box>
                </div>

                <div style={{ flex: 3 }}>
                    <img src={signin} alt="landing image" style={{ width: '1000px' }} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SignUp;
