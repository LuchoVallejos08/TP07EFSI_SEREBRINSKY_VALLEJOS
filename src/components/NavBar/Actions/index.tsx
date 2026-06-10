import settings from '../../../assets/material-symbols--settings.png'
import camera from '../../../assets/mdi--camera.png'
import message from '../../../assets/Privado.png'
import './Actions.css'

const Actions = () => {

    
    
    return(
        <div className='Actions'>
            
            <button><img src={settings} alt="" /></button>
            <button><img src={camera} alt="" /></button>
            <button><img src={message} alt="" /></button>            
            <button><p>New Post</p></button>
        </div>
    )
}

export default Actions