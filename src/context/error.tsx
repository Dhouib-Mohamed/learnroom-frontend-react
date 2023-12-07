import {createContext, useState} from "react";

export const ErrorContext = createContext({setErrorModal: null, closeErrorModal: null, error: null});

function ErrorProvider(props) {
    const [error, setError] = useState(null)
    const setErrorModal = (message) => {
        setError(message)
    }
    const closeErrorModal = () => {
        setError(null)
    }
    return (
        <ErrorContext.Provider value={{setErrorModal, closeErrorModal, error}}>
            {props.children}
        </ErrorContext.Provider>
    );
}

export default ErrorProvider;
