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
    NumberInput,
    NumberInputField,
    Textarea
} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";

export default function AssignmentModal({
    handleSubmit,
    onClose,
    values = { name: '', content: '', deadline: undefined }
}) {

    const validateForm = (values) => {
        const errors = {};
        if (!values.points) {
            errors.points = 'Assignment points is required';
        }
        if (!values.name) {
            errors.name = 'Assignment Title is required';
        }

        if (!values.content) {
            errors.content = 'Description is required';
        }

        if (!values.deadline) {
            errors.deadline = 'Deadline is required';
        }

        return errors;
    };




    return (
        <><ModalHeader>Add New Assignments</ModalHeader><ModalCloseButton />
        <Formik
            initialValues={values}
            onSubmit={handleSubmit}
            validate={validateForm}
        >
            {(formikProps) => (
                <Form>
                    <ModalBody>
                        <Field name="name">
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel>Assignment Title</FormLabel>
                                    <Input {...field} />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="content">
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.content && form.touched.content}>
                                    <FormLabel>Description</FormLabel>
                                    <Textarea {...field} />
                                    <FormErrorMessage>{form.errors.content}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="points">
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.points && form.touched.points}>
                                    <FormLabel>Max Points</FormLabel>
                                    <NumberInput value={field.value}>
                                        <NumberInputField {...field} />
                                    </NumberInput>
                                    <FormErrorMessage>{form.errors.points}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="deadline">
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.deadline && form.touched.deadline}>
                                    <FormLabel>Deadline</FormLabel>
                                    <input {...field} type={"date"} />
                                    <FormErrorMessage>{form.errors.deadline}</FormErrorMessage>
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
                        <Button onClick={onClose} rounded="full" colorScheme="custom" color="grey" bgColor="#FFF" borderWidth="1px" borderColor="grey" ml={4}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Form>
            )}
        </Formik></>
    )
}