import notfound from "../assets/notfound.png";
import {getItem} from "../../utils/localStorage";
import Header from "../components/Header";
import PreviewHeader from "../components/PreviewHeader";


function NotFound() {
    return (
        <>
            {getItem("user") ? <Header/> : <PreviewHeader/>}
            <div style={{display: 'flex', height: "750px", justifyContent: 'center', alignItems: 'center'}}>
                <img src={notfound} alt="quote"/>
            </div>
        </>
    );
}

export default NotFound;
