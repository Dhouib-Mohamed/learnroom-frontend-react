import {useHistory} from "react-router-dom";
import {Box, Button, Card, CardBody, Text} from '@chakra-ui/react';

const Task = ({path, task}) => {
    const history = useHistory()
    return (
        <Box onClick={() => {
            history.push(path)
        }}>
            <Card style={{marginBottom: 5}}>
                <CardBody display={"flex"} justifyContent={"space-between"} width={"100%"} flexDirection={"row"}
                          minWidth={"400px"}>
                    <Text>{task.name}</Text>
                    <Button>view</Button>
                </CardBody>
            </Card>

      </Box>

    );
};


export default Task ;