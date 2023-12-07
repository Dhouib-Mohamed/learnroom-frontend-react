import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import MainRouter from "./router";
import ErrorProvider from "./context/error";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ChakraProvider>
        <ErrorProvider>
            <MainRouter/>
        </ErrorProvider>
    </ChakraProvider>,
);
