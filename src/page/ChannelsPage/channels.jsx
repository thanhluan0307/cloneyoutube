
import Header from '../../component/Header/header'
import NavbarPc from '../../component/NavbarPc/navbarPc'
import styles from './channels.module.scss'
import Channels from '../../component/Channels/channels'
const ChannelsPage = () => {
 
  return (
   <>
    <Header/>
    <NavbarPc/>
    <div className={styles.wrapper}>
      <Channels/>
    </div>
   </>
  )
}

export default ChannelsPage