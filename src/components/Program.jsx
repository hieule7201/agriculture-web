import Image1 from '../assets/images/program1.png'
import Image2 from '../assets/images/program2.png'
import SectionHead from './SectionHead'

const Program = () => {
  return (
    <section className="program">
        <div className="container program__container">
            <div className="program__container-item">
                <img src={Image1} alt=''/>
                <SectionHead className='section__head-item' title="Natural!!" detail="Get Garden Fresh Fruits"/>
            </div>
            <div className="program__container-item">
                <img src={Image2} alt=''/>
                <SectionHead className='section__head-item1' title="Offer!!" detail="Get 10% of on Vegetables"/>
            </div>
        </div>
    </section>
  )
}

export default Program