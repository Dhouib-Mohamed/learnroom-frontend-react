import { Box, Button, Image } from "@chakra-ui/react";
import image from "../assets/emptyState.png";
import {useHistory} from "react-router-dom";


function EmptyStatePlaceholder({type, user}) {
    const history = useHistory()

    let title ="No Courses"
    let descriptionText1 = "There are no courses in this classroom yet. ";
    let descriptionText2 = "Wait for your teacher to publish one.";
    if (user === "teacher") {
        descriptionText2 = "Publish one.";
    }
    if(type==="task" ){
        title="No Tasks"
        descriptionText1="There are no tasks in this classroom yet. ";
    }
    if(type==="assignment" ){
        title="No Assignments"
        descriptionText1="There are no assignments in this classroom yet. ";
    }
    

    return (
        <>
            <div style={{width:"95%", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Box borderWidth="1px" borderColor="#B7B7B7" borderRadius={"10px"} width={"90%"}  style={{ display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'  }}>
                  <br />
                    <Image
                        src={image}
                        borderBottomRadius='lg'
                        height={"100px"}
                    />
                    <br />
                    <p style={{fontSize:"20px" ,color:"#5D5D5D"}}>{title}</p>
                    <p style={{fontSize:"15px",color:"#747474"}}>{descriptionText1+descriptionText2}</p>
                    <br />
                    {user === "teacher" ? (
                        null
                    ) : (
                    <><Button  colorScheme="custom"color="#616161" bgColor="#C8C8C8" rounded="full" height={"30px"} size="md" onClick={() => {history.push("/home")}}>
                    Go home
                </Button>
                <br /></>
                )}
                </Box>
            </div>
        </>

    )
}
export default EmptyStatePlaceholder;