import ClassroomList from "../components/ClassroomList";
import {getItem, setItem} from "../../utils/localStorage";
import {Button, Modal, ModalContent, ModalOverlay, useDisclosure} from "@chakra-ui/react";
import {patch, post} from "../helpers/helpers";
import {useHistory} from 'react-router-dom';
import ClassroomModal from "../modals/classroom";
import ClassroomIdModal from "../modals/classroomId";
import { useContext } from "react";
import { ErrorContext } from "../context/error";

export default function Main() {
    const {setErrorModal}=useContext(ErrorContext);

    let classroom = getItem("user").classes

    const {isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1} = useDisclosure();
    const {isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2} = useDisclosure();
    const history = useHistory();

    const addClassroom = async (data) => {
        const result = await post("classroom/" + getItem("user").id, data,setErrorModal)
        console.log(result)
        classroom = {...getItem("user"), classes: [...getItem("user").classes, result]}
        setItem("user", classroom)
        onClose1();
        history.push(`/classroom/${result.id}`);
    }
    const addStudent = async ({id}) => {
        const result = await patch("classroom/" + id + "/" + getItem("user").email, {},setErrorModal)
        setItem("user", result)
        onClose2();
    }

    const handleSubmit1 = (values) => {
        addClassroom(values)
    };
    const handleSubmit2 = (values) => {
        addStudent(values)
    };
    return (
        <>
            <ClassroomList classrooms={classroom}/>
            {getItem("user").user ?
                <Button rounded={"full"} onClick={onOpen1} size={"lg"} style={{
                    backgroundColor: "#66B0F0",
                    color: "white",
                    marginLeft: "45%",
                    marginTop: "20px",
                    marginBottom: "50px"
                }}>Add Classroom</Button> :
                <Button rounded={"full"} onClick={onOpen2} size={"lg"} style={{
                    backgroundColor: "#20b2aa",
                    color: "white",
                    marginLeft: "45%",
                    marginTop: "20px",
                    marginBottom: "50px"
                }}>Enroll in a Classroom</Button>
            }

            <Modal isOpen={isOpen1} onClose={onClose1}>
                <ModalOverlay/>
                <ModalContent>
                    <ClassroomModal onClose={onClose1} handleSubmit={handleSubmit1}/>
                </ModalContent>
            </Modal>
            <Modal isOpen={isOpen2} onClose={onClose2}>
                <ModalOverlay/>
                <ModalContent>
                    <ClassroomIdModal onClose={onClose2} handleSubmit={handleSubmit2}/>
                </ModalContent>
            </Modal>
        </>
    )
}