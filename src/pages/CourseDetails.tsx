import Header from '../components/Header';
import Footer from '../components/Footer.js';
import TaskList from '../components/TaskList.js';
import AssignmentModal from '../modals/assignment.js';
import {
    Button,
    Divider,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalContent,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import TaskModal from "../modals/task";
import {useHistory, useParams} from 'react-router-dom';
import {AiOutlineMore} from 'react-icons/ai';
import {getItem} from "../../utils/localStorage";
import {get, patch, post, remove} from '../helpers/helpers.js';
import {useContext, useEffect, useState} from 'react';
import CourseModal from '../modals/course.js';
import {ErrorContext} from '../context/error.js';


function CourseDetails() {

    const {setErrorModal}=useContext(ErrorContext);

    const [update, setUpdate] = useState(true)
    let { id, classId } = useParams();
    const [course, setCourse] = useState({ name: "", content: "" })
    const history = useHistory();
    const getCourse = async () => {
        const result = await get("course/" + id,setErrorModal)
        setCourse(result)
    }

    const { isOpen, onOpen, onClose } = useDisclosure();
    const deleteCourse = async () => {
        const response = await remove("course/" + id,setErrorModal)
        history.push('../');
    }

    useEffect(() => {
        getCourse()
    }, [update])

    const editCourse = async (data) => {
        const result = await patch("course/" + id, data,setErrorModal)
        console.log("res:", result)
        onClose();
        setUpdate(!update)
    }

    const handleSubmit = (values) => {

        editCourse(values)

    };

    const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure();
    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure();


    const addTask = async (data) => {
        data.points=+data.points
        const result = await post("task/" + id, data,setErrorModal)
        console.log(result)
        onClose();
        history.push(`/classroom/${classId}/task/${result.id}`);
    }
    const addAssignment = async (data) => {
        data.points=+data.points
        const result = await post("assignment/" + id, data,setErrorModal)
        console.log(result)
        onClose();
        history.push(`/classroom/${classId}/assignment/${result.id}`);
    }

    const handleSubmit1 = (values) => {
        addTask(values)
    };
    const handleSubmit2 = (values) => {
        addAssignment(values)
    };

    return (
        <>
            <Header />
            <div style={{ minHeight: "89vh", }}>
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: "center"
                }}>
                    <div style={{ width: "1000px", }}>
                        <Flex flexDirection={"row"}>
                            <div style={{ width: "95%" }}>
                                <h3 style={{ fontWeight: '600', fontSize: "24px" }}>{course?.name}</h3>
                                {/* <p style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                                    {course?.date}
                                </p> */}
                            </div>
                            {getItem("user").user ? <Menu flip={true} direction={"rtl"}>
                                <MenuButton
                                    fontSize={"25px"}
                                    style={{ marginTop: 2 }}
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<AiOutlineMore />}
                                    variant='outline'
                                />
                                <MenuList style={{ fontSize: "15px" }}>
                                    <MenuItem onClick={() => {
                                        onOpen()
                                    }}>Edit Course</MenuItem>
                                    <MenuItem onClick={
                                        deleteCourse
                                    }>Delete Course</MenuItem>
                                </MenuList>
                            </Menu> : null}
                        </Flex>
                        <div style={{ height: '10px' }}></div>
                        <div style={{ width: "1000px", display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                            <div style={{ width: "950px" }}>
                                <pre style={{ whiteSpace: "pre-wrap" }}>{course?.content}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Divider width="60%" my={4} borderColor={"#A6A6A6"} borderWidth="0.75px" />
                    <br />
                    <div style={{ display: 'flex', width: "50%", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                        <TaskList url={"course/task/" + id} task={true} path={"/classroom/" + classId + "/task/"} />
                        <br />
                        {getItem("user").user ?
                            <>
                                <Button colorScheme="custom" color="#FFF" bgColor="#66B0F0" rounded="full" size="md"
                                    height="30px"
                                    width="100px" onClick={() => {
                                        onOpen1()
                                    }}
                                >Add a Task</Button>
                                <br />
                            </>
                            : null}
                        <Divider width="100%" my={4} borderColor={"#c2c2c2"} borderWidth="0.5px" />
                        <br />
                        <TaskList url={"course/assignment/" + id} task={false} path={"/classroom/" + classId + "/assignment/"} />
                        <br />
                        {getItem("user").user ?

                            <Button colorScheme="custom" color="#FFF" bgColor="#66B0F0" rounded="full" size="md"
                                height="30px"
                                width="170px" onClick={() => {
                                    onOpen2()
                                }}
                            >Add an Assignment</Button>
                            : null}
                    </div>
                </div>
            </div>
            <Footer />
            <Modal isOpen={isOpen1} onClose={onClose1}>
                <ModalOverlay />
                <ModalContent>
                    <TaskModal onClose={onClose1} handleSubmit={handleSubmit1} />
                </ModalContent>
            </Modal>

            <Modal isOpen={isOpen2} onClose={onClose2}>
                <ModalOverlay />
                <ModalContent>
                    <AssignmentModal onClose={onClose2} handleSubmit={handleSubmit2} />
                </ModalContent>
            </Modal>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <CourseModal onClose={onClose} handleSubmit={handleSubmit}
                        values={course} />
                </ModalContent>
            </Modal>
        </>
    )
}

export default CourseDetails;
