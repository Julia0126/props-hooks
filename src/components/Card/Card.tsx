import './Card.css'

/*
    titulo: string
    descricao : string
*/

interface CardProps{
    titulo: string
    descricao : string
}

// Desestruturação

function Card({titulo, descricao}: CardProps ) {
    return (
        <div className="card">
            <h1>{ titulo }</h1>
            <p>{ descricao }</p>
        </div>
    )
}

export default Card