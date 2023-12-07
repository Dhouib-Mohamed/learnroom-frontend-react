import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Avatar,
    Box,
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import {useHistory} from "react-router-dom";
import {getItem, removeItem} from "../../utils/localStorage";
import {AiOutlineMenu} from "react-icons/ai";
import {useContext, useEffect, useState} from "react";
import {get} from "../helpers/helpers";
import {ErrorContext} from "../context/error";

const Header = () => {
    const [data, setData] = useState({courses: [], tasks: [], assignments: []})
    const {isOpen, onOpen, onClose} = useDisclosure()
    const history = useHistory();
    const user = getItem("user")
    const {setErrorModal} = useContext(ErrorContext)
    const getData = async () => {
        const response = await get("user/" + user.id + "/" + user.user, setErrorModal)
        console.log(response)
        setData(response)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Flex
                as="header"
                align="center"
                justify="space-between"
                py="4"
                px="6"
                bg="white"
                borderBottom="0.75px solid #828282"
                position="fixed"
                top="0"
                left="0"
                width="100%"
                zIndex="999"
            >
                <Flex alignItems={"center"}><AiOutlineMenu fontSize={30} onClick={() => {
                    onOpen()
                }} style={{marginRight: 20}}/>
                    <HStack spacing={"2px"} onClick={() => {
                        history.push("/home")
                    }}>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{
                                height: "42px",
                                marginRight: "10px",
                                marginLeft: "10px",
                            }}
                        />
                        <Text fontSize="2xl" fontWeight="bolder" color="gray.700">
                            LearnRoom
                        </Text>
                        <Divider borderColor={"#20b2aa"} sx={{borderRightWidth: "2.5px"}} style={{margin: "0 10px"}}
                                 orientation='vertical' height={"30px"}/>
                        {getItem("user").user ?
                            <Text fontSize="xl" fontWeight="bolder" color="gray.700">Teacher</Text> :
                            <Text fontSize="xl" fontWeight="bolder" color="gray.700">
                                Student
                            </Text>}
                    </HStack>
                </Flex>
                <Box>
                    <Button
                        colorScheme="custom"
                        color="grey"
                        bgColor="#FFF"
                        borderWidth="1px"
                        borderColor="grey"
                        rounded="full"
                        size="md"
                        onClick={() => {
                            removeItem("user")
                            history.push("/preview");
                        }}
                    >
                        Sign Out
                    </Button>
                </Box>
            </Flex>
            <div style={{height: 75}}></div>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>
                        <Flex alignItems={"center"}>
                            <Avatar name={user.name} bgColor={user.avatar_color} marginRight={3}/>
                            {user.name}
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody>
                        {user.email}
                        <h1 style={{padding: 15, paddingTop: 25}} onClick={() => {
                            history.push("/home");
                            onClose()
                        }}> Home</h1>
                        <Accordion>
                            <AccordionItem>
                                <AccordionButton>
                                    <h1>Courses</h1>
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {data?.courses?.map((course) => {
                                        console.log(course)
                                        return (<Link name={course.name} role={() => {
                                            history.push("/classroom/*/course/" + course.id);
                                            onClose()
                                        }}/>)
                                    })}
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <h1>Tasks</h1>
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {data.tasks?.map((task) => <Link name={task.name} role={() => {
                                        history.push("/classroom/*/task/" + task.id);
                                        onClose()
                                    }}/>)}
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <h1>Assignments</h1>
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {data.assignments?.map((assignment) => <Link name={assignment.name} role={() => {
                                        history.push("/classroom/*/assignment/" + assignment.id);
                                        onClose()
                                    }}/>)}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </DrawerBody>

                    <DrawerFooter fontSize={25}>
                        {user.user ? "Teacher" : "Student"}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

const Link = ({name, role}) => {
    return (
        <Box borderWidth={1} fontSize={14} marginTop={2} padding={2} onClick={role} borderRadius={10}>
            {name}
        </Box>
    )
}

export default Header;
