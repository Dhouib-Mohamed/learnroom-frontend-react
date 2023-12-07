import {
    Avatar,
    Box,
    Button,
    Divider,
    Modal,
    ModalContent,
    ModalOverlay,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tr,
    useDisclosure,
} from '@chakra-ui/react';
import {get, patch} from '../helpers/helpers';
import StudentModal from '../modals/student';
import {getItem} from '../../utils/localStorage';
import {useContext, useEffect, useState} from "react";
import {ErrorContext} from '../context/error';

const Students = ({id}) => {
    const {setErrorModal}=useContext(ErrorContext);

    const [users, setUsers] = useState({students: [], teacher: null})
    const [update, setUpdate] = useState(false)
    const {isOpen, onOpen, onClose} = useDisclosure();
    const getUsers = async () => {
        const result = await get("classroom/users/" + id,setErrorModal)
        console.log(result)
        setUsers(result)
    }
    useEffect(() => {
        getUsers()
    }, [update])
    const addStudent = async ({email}) => {
        console.log(email)
        const result = await patch("classroom/" + id + "/" + email, {},setErrorModal)
        console.log(result)
        setUpdate(!update)
        onClose();
    }

    const handleSubmit = (values) => {
        addStudent(values)
    };

    return (
        <>
            <Box>
                <p style={{color: "#41a090", fontWeight: 700, fontSize: 20}}>Teachers</p>
                <Divider style={{margin: "15px 0 15px"}}/>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <div style={{display: "flex", fontWeight: "700", flexDirection: "row", alignItems: "center"}}>
                        <Avatar size='xl' marginRight={10} name={users.teacher?.name} bg={users.teacher?.avatar_color}/>
                        <p style={{margin: 0}}>{users.teacher?.name}</p>
                    </div>
                    <p style={{color: "grey"}}>{users.teacher?.email}</p>
                </div>
                <br/>
                <p style={{color: "#41a090", fontWeight: 700, fontSize: 20}}>Students</p>
                <Divider style={{margin: "20px 0 15px"}}/>
                <TableContainer>
                    <Table size='sm'>
                        <Tbody>
                            {users?.students.map((p) => (
                                <Tr key={p.email}>
                                    <Td width={20}><Avatar name={p.name} bg={p.avatar_color}/></Td>
                                    <Td fontWeight={700}>{p.name}</Td>
                                    <Td style={{textAlign: "end", color: "grey"}}>{p.email}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            <br/>
            {getItem("user").user ?

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    colorScheme="custom"
                    color="#FFF"
                    bgColor="#66B0F0"
                    rounded="full"
                    size="md"
                    height="30px"
                    width="120px"
                    onClick={() => {
                        onOpen();
                    }}
                >
                    Add Student
                </Button>
            </div>
            : null}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <StudentModal onClose={onClose} handleSubmit={handleSubmit}/>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Students;
