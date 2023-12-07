import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    ModalHeader,
    Textarea
} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";

export default function ClassroomModal({handleSubmit, onClose, values = {name: '', description: '',}}) {

    const validateForm = (values) => {
        const errors = {};
    
        if (!values.name) {
            errors.name = 'Classroom Name is required';
        }
    
        if (!values.description) {
            errors.description = 'Description is required';
        }
    
        return errors;
    };

    return (
        <><ModalHeader>{"Add Classroom"}</ModalHeader><ModalCloseButton/>
        <Formik
            initialValues={values}
            onSubmit={handleSubmit}
            validate={validateForm}
        >
            {(formikProps) => (
                <Form>
                    <ModalBody>
                        <Field name="name">
                            {({field,form}) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel>Classroom Name</FormLabel>
                                    <Input {...field} />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="description">
                            {({field,form}) => (
                                <FormControl isInvalid={form.errors.description && form.touched.description}> 
                                    <FormLabel>Description</FormLabel>
                                    <Textarea {...field} />
                                    <FormErrorMessage>{form.errors.description}</FormErrorMessage>
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