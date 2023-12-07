import {Button, Flex, Modal, ModalContent, ModalOverlay, useDisclosure} from "@chakra-ui/react";
import Course from "../components/Course";
import EmptyStatePlaceholder from "../components/EmptyStatePlaceholder";
import CourseModal from "../modals/course";
import {useHistory} from 'react-router-dom';
import {get, post} from "../helpers/helpers";
import {useContext, useEffect, useState} from "react";
import {getItem} from "../../utils/localStorage";
import {ErrorContext} from "../context/error";


const CourseList = ({ id }) => {
    const {setErrorModal}=useContext(ErrorContext);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useHistory();

    const [courses, setCourses] = useState([])
    const getCourses = async () => {
        const result = await get("classroom/course/" + id,setErrorModal)
        console.log("courselist", result)
        setCourses(result)
    }

    useEffect(() => {
        getCourses()
    }, [])

    const addCourse = async (data) => {
        const result = await post("course/" + id, data,setErrorModal)
        onClose();
        history.push(`/classroom/${id}/course/${result.id}`);
    }

    const handleSubmit = (values) => {

        addCourse(values)

    };


    return (
        <>
            {courses.length > 0 ?
                <Flex direction={"column"} marginTop={10}>
                    {courses?.map((course) => (
                        <div style={{marginBottom: "10px"}}>
                            <Course
                                key={course.id}
                                course={course}
                                classroomId={id}/></div>
                    ))}
                </Flex>
                : <EmptyStatePlaceholder user={getItem("user").user ? "teacher" : "student"} type={"course"} />}

            <br />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {getItem("user").user ?
                    <Button colorScheme="custom" color="#FFF" bgColor="#66B0F0" rounded="full" size="md"
                        height="30px"
                        width="120px" onClick={() => {
                            onOpen()
                        }}
                    >Add course</Button>
                    : null}
            </div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <CourseModal onClose={onClose} handleSubmit={handleSubmit} />
                </ModalContent>
            </Modal>
        </>
    );
};
export default CourseList;