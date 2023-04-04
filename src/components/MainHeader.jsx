import { Link } from 'react-router-dom'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Image from '../assets/images/main_background.png'
import Button from '../UI/Button'

const MainHeader = () => {
  return (
    <div className="main__header">
        <div className="container main__header-container">
            <div className="main__header-left">
                <h2>100% Natural Food</h2>
                <h1>Choose the best healthier way of life</h1>
                <Link to='/shop'>
                    <Button className='main__header-btn'>
                        <span>Explore Now</span>
                        <BsFillArrowRightCircleFill/>
                    </Button>
                </Link>
            </div>
            <div className="main__header-right">
            <div className="main__header-circle"></div>
                <div className="main__header-img">
                    
                    <img src={Image} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainHeader