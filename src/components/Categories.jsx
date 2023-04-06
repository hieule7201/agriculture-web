import SectionHead from "./SectionHead"
import {items} from '../data'
import Card from "../UI/Card"
import Button from '../UI/Button'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'


const Categories = () => {
  return (
    <section className="categories">
        <div className="container categories__container">
            <SectionHead title='Categories' detail='Our Product' className='categories__head'/>
            <div className="categories__wrapper">
                {
                    items.map(({id, name, real_price, discount_price, img, classify})=>{
                        return <Card key={id} name={name} real_price={real_price} discount_price={discount_price} classify={classify} img={img}/>
                    })
                }
            </div>
            <Button className='categories__btn'>
                <span>Load More</span>
                <BsFillArrowRightCircleFill/>
            </Button>
        </div>
    </section>
  )
}

export default Categories