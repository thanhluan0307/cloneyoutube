import {FaBars} from "react-icons/fa"
import { Link } from "react-router-dom";

import styles from "./header.module.scss"
import Search from "../InputSearch/search";
import UserAction from "../UserAction/userAction";
import logo from '../../assets/images/download.png'

function Header({setCheck}) {
    const hanleCheck = () => {
        setCheck(pre => !pre)
    }
    return ( 
        <div className={styles.wrapper}>
            <Link to="/" className={styles.logo}>
                <button onClick={hanleCheck}><FaBars/></button>
                <img src={logo} alt="" />
            </Link>
            <Search/>
            <UserAction/>
        </div>
    );
}

export default Header;