import React from "react";
import { api } from '../utils/Api';
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);


React.useEffect(() => {
    api.getAllInfo()
        .then(([userData, allCards]) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            const results = allCards.map((item) => ({
                id: item._id,
                src: item.link,
                title: item.name,
                owner: item.owner._id,
                likes: item.likes.length,
            }));
            setCards(results);
        })
        .catch((err) => {
            console.log('Ошибка', err);
        })
}, []);

    return (
        <main className="content">
          <section className="profile">
            <div className="profile__block">
              <div className="profile__avatar-block">
                <img className="profile__avatar" src={userAvatar} alt="аватар пользователя"/>
                <button type="button" onClick={props.onEditAvatar} aria-label="Редактировать" className="profile__avatar-button button"></button>
              </div>
              <div className="profile__person">
                <div className="profile__name-line">
                  <h1 className="profile__name">{userName}</h1>
                  <p className="profile__description">{userDescription}</p>
                </div>
                <button type="button" onClick={props.onEditProfile} aria-label="Редактировать" className="profile__edit-button button"></button>
              </div>
            </div>
            <button type="button" onClick={props.onAddPlace} aria-label="Добавить" className="profile__add button"></button>
          </section>
          <section className="container">
            {cards.map((card) => 
                <Card 
                    key={card.id}
                    id={card.id}
                    src={card.src} 
                    title={card.title}
                    owner={card.owner}
                    likes={card.likes}
                    onCardClick = {props.onClick}
            />)}
          
          </section>
        </main>
    )
}

export default Main;