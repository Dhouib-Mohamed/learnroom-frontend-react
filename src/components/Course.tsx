import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,} from '@chakra-ui/react';
import {useHistory} from "react-router-dom";


const Course = ({ course, classroomId }) => {
    const history = useHistory()
    return (
        <Box>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' fontWeight={700} height={"40px"} textAlign='left' fontSize={21}>
                                {course.name}
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel
                        style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}
                        pb={4} onClick={() => {
                            history.push(`/classroom/${classroomId}/course/${course.id}`)
                        }}>
                        <p >{course.content}</p>
                        <p style={{ fontSize: 15, fontWeight: 700, color: "#d1d4d4" }}>{course.date}</p>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
};


export default Course;