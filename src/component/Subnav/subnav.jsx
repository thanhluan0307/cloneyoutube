import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./subnav.module.scss"
const Subnav = () => {
  return (
    <ul className={styles.wrapper}>
        <li><Link to="/">Tất cả</Link></li>
        <li><Link to="/">Âm nhạc</Link></li>
        <li><Link to="/">Tin tức</Link></li>
        <li><Link to="/">CHương trình nấu ăn</Link></li>
        <li><Link to="/">Trò chơi</Link></li>
        <li><Link to="/"> Hoạt họa</Link></li>
        <li><Link to="/">Bóng đá</Link></li>
        <li><Link to="/">Thiên nhiên</Link></li>
        <li><Link to="/">Trò chơi hành động phiêu lưu</Link></li>
        <li><Link to="/">Mới tải lên gần đây</Link></li>
        <li><Link to="/">Đề xuất mới</Link></li>
    </ul>
  )
}

export default Subnav