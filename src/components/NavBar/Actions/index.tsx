import settings from '../../../assets/material-symbols--settings.png'
import camera from '../../../assets/mdi--camera.png'
import message from '../../../assets/uil--message.png'
import './Actions.css'

const Actions = () => {

    
    
    return(
        <div className='Actions'>
            <img src={settings} alt="" />
            <img src={camera} alt="" />
            <img src={message} alt="" />
            <button><p>New Post</p></button>
        </div>
    )
}

export default Actions