import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from 'react';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const[selectedCard, setSelectedCard] = useState({});
  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const[isFullImagePopupOpen, setIsFullImagePopupOpen] = useState(false);
  const[currentUser, setCurrentUser] = useState('');
  const[cards, setCards] = useState([]);
  
  useEffect(() => {
    api.getAllInfo()
      .then(([userData, allCards]) => {
        setCurrentUser(userData);

        const results = allCards.map((item) => ({
          card: item,  
          _id: item._id,
          link: item.link,
          name: item.name,
          owner: item.owner,
          likes: item.likes,
        }));
        setCards(results)
      })
      .catch((err) => {
        console.log('Ошибка', err);
      })
  }, []);

function handleCardLike(card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.manageLike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === newCard._id ? newCard : c));
      })
      .catch((err) => {
        console.log('Ошибка', err);
      });
};

function handleCardDelete(card) {
  api.removeCard(card._id)
    .then(() => {
      setCards((state) => state.filter(c => c._id !== card._id));
    })
    .catch((err) => {
      console.log('Ошибка', err);
  });
};

function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen(true);
}

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true);
}

function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(true);
}
  
function handleCardClick(item) {
  setIsFullImagePopupOpen(true);
  setSelectedCard(item);
}

function closeAllPopups() {
  setIsEditAvatarPopupOpen(false) || setIsEditProfilePopupOpen(false) ||
  setIsAddPlacePopupOpen(false) || setIsFullImagePopupOpen(false);
}

function handleUpdateUser({ name, about }) {
  api.editUserInfo({ name, about })
    .then((newUserData) => {
      setCurrentUser(newUserData);
      closeAllPopups();
    })
    .catch((err) => {
      console.log('Ошибка', err);
    })
  }

function handleUpdateAvatar({ avatar }) {
  api.editAvatar({ avatar })
    .then((newAvatar) => {
      setCurrentUser(newAvatar);
      closeAllPopups();
    })
    .catch((err) => {
      console.log('Ошибка', err);
    })
  }

function handleAddPlaceSubmit({ name, link }) {
  api.addNewCard({ name, link })
    .then((newItem) => {
      setCards([newItem, ...cards]);
      closeAllPopups();
    })
    .catch((err) => {
      console.log('Ошибка', err);
    })
  }

  return ( 
  <CurrentUserContext.Provider value={currentUser}>
   <div className="body"> 
    <div className="page">
      <Header />
      <Main 
        onClick={handleCardClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />
      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}>
      </EditProfilePopup>
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}>
      </AddPlacePopup>
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}>
      </EditAvatarPopup>
      <PopupWithForm 
        name="confirm"
        title="Вы уверены?"
        buttonText="Да">
      </PopupWithForm>
      <ImagePopup 
        card={selectedCard}
        isOpen={isFullImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;