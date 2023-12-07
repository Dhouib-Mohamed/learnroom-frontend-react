import {Route} from 'react-router-dom';
import NotFound from "../pages/NotFound";
import {getItem} from "../../utils/localStorage";

export default function Disconnected({path, Component}) {
    return (
        <Route path={path}>
            {!(getItem("user")) ?
                <Component/> :
                <NotFound/>
            }
        </Route>
    );
}
