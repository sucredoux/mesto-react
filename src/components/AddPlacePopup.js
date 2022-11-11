import React from 'react';
import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

    const[title, setTitle] = useState('');
    const[url, setUrl] = useState('');

    function handleTitleAdd(e) {
        setTitle(e.target.value);
    }

    function handleLinkAdd(e) {
        setUrl(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({ 
            name: title,
            link: url 
        })
    }

    useEffect(() => {
        setTitle('');
        setUrl('');
    }, [props.isOpen]);


    return (
        <PopupWithForm 
            name="add"
            title="Новое место"
            buttonText="Создать"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                id="place-name-input" 
                className="form__input form__input_type_place" 
                required
                placeholder="Название" 
                minLength="2" 
                maxLength="30"
                value={title || ''}
                onChange={handleTitleAdd} />
            <span className="place-name-input-error form__input-error form__input-error_type_upper"></span>
            <input 
                type="url" 
                name="link" 
                id="place-link-input" 
                className="form__input form__input_type_image-link" 
                required
                placeholder="Ссылка на картинку" 
                value={url || ''}
                onChange={handleLinkAdd} />
            <span className="place-link-input-error form__input-error form__input-error_type_lower"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;