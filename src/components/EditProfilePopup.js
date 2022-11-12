import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {

    const[name, setName] = useState(' ');
    const[description, setDescription] = useState(' ');
    const currentUser = useContext(CurrentUserContext);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({ 
            name: name,
            about: description 
        });
    }

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    return (
    <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                id="profile-name-input" 
                className="form__input form__input_type_name" 
                required
                placeholder="Ваше имя" 
                minLength="2" 
                maxLength="40" 
                value={name || ""}
                onChange={handleNameChange} />
            <span className="profile-name-input-error form__input-error form__input-error_type_upper"></span>
            <input 
                type="text" 
                name="about" 
                id="profile-description-input" 
                className="form__input form__input_type_description" 
                required
                placeholder="Ваш род деятельности" 
                minLength="2" 
                maxLength="200" 
                value={description || ""} 
                onChange={handleDescriptionChange} />
            <span className="profile-description-input-error form__input-error form__input-error_type_lower"></span>         
    </PopupWithForm>
    )
}

export default EditProfilePopup;