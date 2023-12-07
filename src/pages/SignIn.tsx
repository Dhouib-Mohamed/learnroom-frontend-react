import {Box, Button, Heading, Text, FormControl, FormLabel, Input, Link} from '@chakra-ui/react';
import signup from "../assets/signup.png";
import Footer from '../components/Footer';
import logo from "../assets/logo.png";
import {useHistory} from "react-router-dom";
import {Formik, Form, Field} from 'formik';
import {post} from "../helpers/helpers";
import {setItem} from "../../utils/localStorage";
import { useContext } from 'react';
import { ErrorContext } from '../context/error';

function SignIn() {
    const history = useHistory();

    const {setErrorModal}=useContext(ErrorContext);

    const logIn = async (values) => {
        const result = await post("user/signin", values,setErrorModal)
        console.log("res",result)
        if (result.id) {
            setItem("user", result);
            history.push("/home");
        }
    }

    return (
        <>
            <div style={{height: '700px', display: 'flex', alignItems: 'center'}}>
                <div style={{flex: 2, display: "flex", alignItems: "center", justifyContent: 'center'}}>
                    <Box textAlign="center">
                        <div style={{display: "flex", alignItems: "center", marginBottom: "100px"}}>
                            <img src={logo} alt="Logo" style={{width: "60px", marginRight: "20px"}}/>
                            <Heading>LearnRoom</Heading>
                        </div>

                        <Formik initialValues={{email: '', password: ''}} onSubmit={logIn}>
                            <Form>
                                <Field name="email">
                                    {({field}) => (
                                        <FormControl id="email" my="4">
                                            <FormLabel>Email:</FormLabel>
                                            <Input {...field} type="email" name="email"/>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="password">
                                    {({field}) => (
                                        <FormControl id="password" my="4">
                                            <FormLabel>Password:</FormLabel>
                                            <Input {...field} type="password" name="password"/>
                                        </FormControl>
                                    )}
                                </Field>

                                <Button colorScheme="custom" color="white" bgColor="#FF796E" rounded="full"
                                        type="submit" my="4">
                                    Login
                                </Button>
                            </Form>
                        </Formik>

                        <Text fontSize={'14px'}>Don't have an account? <Link fontWeight={'bold'} href="/signup">Sign
                            up</Link></Text>
                    </Box>
                </div>

                <div style={{flex: 3}}>
                    <img src={signup} alt="landing image" style={{width: '1000px', marginTop: '50px'}}/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default SignIn;
