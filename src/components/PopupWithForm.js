function PopupWithForm(props) {

const classNameActive = `pop-up pop-up_type_${props.name} pop-up_opened`;
const className = `pop-up pop-up_type_${props.name}`;

  return (
    <div className={(props.isOpen ? classNameActive : className)} >
      <div className="pop-up__block">
        <button type="button" aria-label="Закрыть" className={`pop-up__close pop-up__close_type_${props.name} button`} onClick={props.onClose}></button>
        <div className={`pop-up__container pop-up__container_type_${props.name}`}>
          <h2 className={`pop-up__title pop-up__title_type_${props.name}`}>{props.title}</h2>
          <form name="profile-form" className={`form form_type_${props.name}`} /*noValidate*/  onSubmit={props.onSubmit} >
            {props.children}
            <button type="submit" name="profile-submit" className="form__button button" >{props.buttonText}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PopupWithForm;