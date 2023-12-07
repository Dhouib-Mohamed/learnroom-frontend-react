import {Button} from "@chakra-ui/react";
import React from "react";
import gradcap from "../assets/gradcap.png";


function TaskButton({completed, handleChange}) {





    return (
        <div style={{display: "flex", flexDirection: "row",width:'360px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", flexDirection: 'column' }}>
            {!completed && <div><p style={{ fontSize: '16px', fontWeight: 'normal' }}>
                You finished this task?
            </p></div>}
            <div style={{display: "flex", flexDirection: "row" }}>
                <Button colorScheme="custom"
                color="white"
                bgColor={completed ?   "#66B0F0":"#FF8076"} rounded="full" width="250px" size="md" onClick={handleChange} marginTop={!completed?'70px':'46px'} >
                {!completed ? "Mark as Completed" : "Well done"}
            </Button>
            </div><br />
            <br />
            <br />
            <br />
            <br />
        </div>
        {completed && <img src={gradcap} style={{height:'100px'}} alt="Image" />}

        </div>
    );
}

export default TaskButton;
