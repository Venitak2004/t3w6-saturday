import { Outlet } from "react-router-dom";

export default function ProjectLayout(props) {
    return(
        <div>
            <h1>Author</h1>
            <h3>Venita</h3>
            <Outlet />

            <h6>Copyright {new Date(Date.now()).getFullYear() }</h6>
        </div>
    )
}