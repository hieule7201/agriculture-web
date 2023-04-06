import { BsStarFill } from 'react-icons/bs'

const Card = ({ classify, img, name, real_price, discount_price, className }) => {
  return (
    <article className={`card ${className}`}>
      <div className="card__classify">{classify}</div>
      <img src={img} className='card__img' />
      <h3 className='card__name'>{name}</h3>
      <div className="card__line"></div>
      <div className="card__info">
        <div className="card__price">
          <span className='card__real'>${real_price}.00</span>
          <span className='card__discount'>${discount_price}.00</span>
        </div>
        <div className="stars__number"><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /></div>
      </div>
    </article>
  )
}

export default Card