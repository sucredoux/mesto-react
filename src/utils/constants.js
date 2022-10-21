const options = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-51',
  headers: {
    authorization: 'b5a51fa0-278d-4d53-aa46-c911f2ff46ff',
    'Content-Type': 'application/json'
  }
};

const formSelectors = {
  formSelector: '.form',
  inputSelector: '.form__input',
  formProfile: '.form_type_edit',
  formPlace: '.form_type_add',
  formAvatar: '.form_type_avatar',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const cardSelectors = {
  containerSelector: '.container',
  popupImageSelector: '.pop-up_type_image',
  fullImageSelector: '.pop-up__full-image',
  imageTitleSelector: '.pop-up__image-title',
  itemSelector: '.item',
  itemTitleSelector: '.item__title',
  itemImageSelector: '.item__image',
  itemLikeButtonSelector: '.item__button',
  itemDeleteButtonSelector: '.item__delete',
  activeDeleteButtonClass: 'item__delete_active',
  itemCounterLikesSelector: '.item__like-counter',
  templateDefaultCard: '.card_type_default',
  containerCards: '.container'
}

const popupSelectors = {
  popup: '.pop-up',
  popupEdit: '.pop-up_type_edit',
  popupAdd: '.pop-up_type_add',
  popupImage:'.pop-up_type_image',
  popupAvatar: '.pop-up_type_avatar',
  popupConfirm: '.pop-up_type_confirm'
}

const profileSelectors = {
  profile: '.profile',
  personName: '.profile__name',
  personDescription: '.profile__description',
  personAvatar: '.profile__avatar'
}
/*
const popupEdit = document.querySelector('.pop-up_type_edit');
const popupAdd = document.querySelector('.pop-up_type_add');
const popupAvatar = document.querySelector('.pop-up_type_avatar');

const formEditProfile = popupEdit.querySelector('.form_type_edit');
const formAddImage = popupAdd.querySelector('.form_type_add');
const formEditAvatar = popupAvatar.querySelector('.form_type_avatar');

const formEditName = popupEdit.querySelector('.form__input_type_name');
const formEditDescription = popupEdit.querySelector('.form__input_type_description');

const profile = document.querySelector('.profile');
const buttonEditProfile = profile.querySelector('.profile__edit-button');
const buttonAddItem = profile.querySelector('.profile__add');
const buttonEditAvatar = profile.querySelector('.profile__avatar-button');
*/

export { options/*, formSelectors, cardSelectors, popupSelectors, profileSelectors, formEditName, formEditDescription,
  formEditProfile, formEditAvatar, formAddImage, buttonEditProfile, buttonAddItem,
buttonEditAvatar */}
