
function Card(props) {

function handleClick() {
    
    props.onCardClick(props);
    
}

    return (
        <div id="card" className="card card_type_default">
            <article className="item">
                <img className="item__image" src={props.src} alt={props.title} onClick={handleClick}/>
                <button type="button" aria-label="Удалить" className="item__delete button"></button>
                <h2 className="item__title">{props.title}</h2>
                <div className="item__like-block">
                <button type="button" aria-label="Лайк" className="item__button button"></button>
                <span className="item__like-counter">{props.likes}</span>
                </div>
            </article>
          </div>
    );
}

export default Card;