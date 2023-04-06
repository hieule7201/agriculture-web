import HomeAbout from '../assets/images/home_about.png'
import VeganFood from '../assets/images/Vegan Food.png'
import MailBox from '../assets/images/Mailbox Quality.png'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import SectionHead from './SectionHead'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'
const About_Us = () => {
  return (
    <section className="home__about">
        <div className="container home__about-container">
            <div className="home__about-left">
                <img src={HomeAbout} alt=''/>
            </div>
            <div className="home__about-right">
                <SectionHead title='About Us' detail='We Believe in Working Accredited Farmers'/>
                <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className="home__about-list">
                    <div className="home__about-list-img">
                        <img src={VeganFood}/>
                    </div>
                    <div className="home__about-content">
                    <h3>Organic Foods Only</h3>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>
                <div className="home__about-list">
                    <div className="home__about-list-img">
                        <img src={MailBox}/>
                    </div>
                    
                    <div className="home__about-content">
                    <h3>Quality Standards</h3>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>
                <Link to='/shop'>
                <Button className='home__about-btn'>
                    <span>Shop Now</span>
                    <BsFillArrowRightCircleFill/>
                </Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default About_Us