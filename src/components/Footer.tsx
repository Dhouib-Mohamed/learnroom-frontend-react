import { Box, Flex, } from '@chakra-ui/react';

const Footer = () => {
    return (
        <div>
        <Flex
            as="footer"
            align="center"
            justify="space-between"
            py="4"
            px="6"
            backgroundColor={"#EDEDED"}
        >
        <Box h={'60px'} w="100%" backgroundColor="#EDEDED">

            <div style={{ paddingLeft:'0px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '10px' }}>
                <a style={{  fontWeight: 'lighter' ,textAlign:'center'}} href="#">Social Media</a>
                <a style={{  fontWeight: 'lighter' ,textAlign:'center'}} href="#">FAQs</a>
                <a style={{  fontWeight: 'lighter' ,textAlign:'center'}} href="#">Privacy Policy</a>
                <a style={{  fontWeight: 'lighter' ,textAlign:'center'}}href="#">Contact us</a>
                <a style={{  fontWeight: 'lighter' ,textAlign:'center'}} href="#">About us</a>
                <a style={{  fontWeight: 'lighter' ,textAlign:'center'}} href="#">Terms of Service</a>
            </div>
        </Box>
        
        </Flex>
        <div style={{height:'10px', backgroundColor:'#EDEDED'}}></div>

        </div>
    );
};

export default Footer;