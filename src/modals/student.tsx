import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    ModalHeader
} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";

export default function StudentModal({handleSubmit, onClose, values = {email: ''}}) {
    
    const validateForm = (values) => {
        const errors = {};
    
        if (!values.email) {
            errors.email = "Student's email is required";
        } else if (!isValidEmail(values.email)) {
            errors.email = 'Invalid email format';
        }
    
        return errors;
    };
    
    const isValidEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    return (
        <><ModalHeader>Enroll Student</ModalHeader><ModalCloseButton/><Formik
            initialValues={values}
            onSubmit={handleSubmit}
            validate={validateForm}
        >
            {(formikProps) => (
                <Form>
                    <ModalBody>
                        <Field name="email">
                            {({field,form}) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel>Student's email</FormLabel>
                                    <Input {...field} />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            type="submit"
                            isLoading={formikProps.isSubmitting}
                            rounded="full"  colorScheme="custom" color="#FFF" bgColor="#66B0F0"
                        >
                            Submit
                        </Button>
                        <Button onClick={onClose}  rounded="full" colorScheme="custom" color="grey" bgColor="#FFF" borderWidth="1px" borderColor="grey" ml={4}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Form>
            )}
        </Formik></>
    )
}