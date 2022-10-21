import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';


function App() {

  const[selectedCard, setSelectedCard] = React.useState('');
  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const[isFullImagePopupOpen, setIsFullImagePopupOpen] = React.useState(false);

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
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
          <input type="text" name="name" id="profile-name-input" className="form__input form__input_type_name" required
            placeholder="Ваше имя" minLength="2" maxLength="40" />
          <span className="profile-name-input-error form__input-error form__input-error_type_upper"></span>
          <input type="text" name="about" id="profile-description-input" className="form__input form__input_type_description" required
              placeholder="Ваш род деятельности" minLength="2" maxLength="200" />
          <span className="profile-description-input-error form__input-error form__input-error_type_lower"></span>
          <button type="submit" name="profile-submit" className="form__button button">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm 
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
          <input type="text" name="name" id="place-name-input" className="form__input form__input_type_place" required
                  placeholder="Название" minLength="2" maxLength="30" />
          <span className="place-name-input-error form__input-error form__input-error_type_upper"></span>
          <input type="url" name="link" id="place-link-input" className="form__input form__input_type_image-link" required
                  placeholder="Ссылка на картинку" />
          <span className="place-link-input-error form__input-error form__input-error_type_lower"></span>
          <button type="submit" name="place-submit" className="form__button button">Создать</button>
      </PopupWithForm>
      <PopupWithForm 
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <input type="url" name="avatar" id="avatar-link-input" className="form__input form__input_type_avatar-link" required placeholder="Ссылка на картинку" />
          <span className="avatar-link-input-error form__input-error form__input-error_type_upper"></span>
          <button type="submit" name="avatar-submit" className="form__button button">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm 
        name="confirm"
        title="Вы уверены?">
          <button type="submit" name="confirm-submit" className="form__button button">Да</button>
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