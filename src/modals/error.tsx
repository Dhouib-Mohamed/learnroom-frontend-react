import { Flex, Icon, ModalCloseButton, ModalHeader } from "@chakra-ui/react";
import { useContext } from "react";
import { ErrorContext } from "../context/error.tsx";
import { AiOutlineWarning } from "react-icons/ai";

export default function ErrorModal() {
    const { error } = useContext(ErrorContext)
    return (
        <>
            <ModalHeader>
                <Flex align="center">
                    <Icon as={AiOutlineWarning} boxSize={6} color="red.500" mr={2} />
                    <span>Error:</span>
                </Flex>
            </ModalHeader>
            <ModalCloseButton />
            <div style={{ margin: "0px 25px 25px 25px" }}>{error}</div>
        </>
    )
}