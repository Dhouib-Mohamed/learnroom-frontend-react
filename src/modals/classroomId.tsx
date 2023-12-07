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

export default function ClassroomIdModal({handleSubmit, onClose, values = {id: ''}}) {
    const validateForm = (values) => {
        const errors = {};
    
        if (!values.id) {
            errors.id = "Classroom's ID is required";
        }
    
        return errors;
    };
    
    return (
        <><ModalHeader>Add Classroom</ModalHeader><ModalCloseButton/><Formik
            initialValues={values}
            onSubmit={handleSubmit}
            validate={validateForm}
        >
            {(formikProps) => (
                <Form>
                    <ModalBody>
                        <Field name="id">
                            {({field,form}) => (
                                <FormControl isInvalid={form.errors.id && form.touched.id}>
                                    <FormLabel>Classroom's ID</FormLabel>
                                    <Input {...field} />
                                    <FormErrorMessage>{form.errors.id}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            type="submit"
                            isLoading={formikProps.isSubmitting}
                            rounded="full" colorScheme="custom" color="#FFF" bgColor="#66B0F0"
                        >
                            Submit
                        </Button>
                        <Button onClick={onClose} rounded="full" colorScheme="custom" color="grey" bgColor="#FFF"
                                borderWidth="1px" borderColor="grey" ml={4}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Form>
            )}
        </Formik></>
    )
}