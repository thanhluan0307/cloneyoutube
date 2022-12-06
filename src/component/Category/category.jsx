import { FaArrowUp, FaHome, FaYoutube } from "react-icons/fa";
import styles from "./category.module.scss"

function Category() {
    return ( 
        <ul className={styles.wrapper}>
            <li><FaHome/><span>Trang chủ</span></li>
            <li><FaArrowUp/><span>Shorts</span></li>
            <li><FaYoutube/><span>Kênh đăng ký</span></li>
        </ul>
     );
}

export default Category;