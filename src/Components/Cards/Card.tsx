import './Card.css'

interface CardProps {
    title: string
    description: string
    image: string
    id: string
}

function Card({
    title,
    description,
    image,
    id
}: CardProps) {
  return (
    <article className="card">
      <img
        className="card__background"
        src={image}
        alt={title}
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">
            {description}
          </p>
        </div>

        <a className="btn-title" href={`#${id}`}>
          <button className="card__button">Read more</button>
        </a>
      </div>
    </article>
  )
}

export default Card
