import Dropdown from "../components/dropdown";
import "./menu-options.css";
export const MenuOptions = () => {
    const sandwiches = ['tuna', 'salmon', 'cheese', 'cucumber'];

    return (
        <div id="MenuOptions" className="menuoptions-container">
            <h1 className="title">Menu Options</h1>
            <Dropdown options={sandwiches}/>
        </div>
    );
};