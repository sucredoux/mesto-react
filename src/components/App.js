import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {

  const[selectedCard, setSelectedCard] = useState('');
  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const[isFullImagePopupOpen, setIsFullImagePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  
  function handleCardClick(item) {
    setIsFullImagePopupOpen(!isFullImagePopupOpen);
    setSelectedCard(item);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false) || setIsEditProfilePopupOpen(false) ||
    setIsAddPlacePopupOpen(false) || setIsFullImagePopupOpen(false);
  }

  return ( 
   <div className="body"> 
    <div className="page">
      <Header />
      <Main 
        onClick={handleCardClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm 
        name="edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
          <input type="text" name="name" id="profile-name-input" className="form__input form__input_type_name" required
            placeholder="Ваше имя" minLength="2" maxLength="40" />
          <span className="profile-name-input-error form__input-error form__input-error_type_upper"></span>
          <input type="text" name="about" id="profile-description-input" className="form__input form__input_type_description" required
              placeholder="Ваш род деятельности" minLength="2" maxLength="200" />
          <span className="profile-description-input-error form__input-error form__input-error_type_lower"></span>
      </PopupWithForm>
      <PopupWithForm 
        name="add"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
          <input type="text" name="name" id="place-name-input" className="form__input form__input_type_place" required
                  placeholder="Название" minLength="2" maxLength="30" />
          <span className="place-name-input-error form__input-error form__input-error_type_upper"></span>
          <input type="url" name="link" id="place-link-input" className="form__input form__input_type_image-link" required
                  placeholder="Ссылка на картинку" />
          <span className="place-link-input-error form__input-error form__input-error_type_lower"></span>
      </PopupWithForm>
      <PopupWithForm 
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <input type="url" name="avatar" id="avatar-link-input" className="form__input form__input_type_avatar-link" required placeholder="Ссылка на картинку" />
          <span className="avatar-link-input-error form__input-error form__input-error_type_upper"></span>
      </PopupWithForm>
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
  );
}

export default App;