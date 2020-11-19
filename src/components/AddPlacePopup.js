import React from 'react';
import PopupWithForm from './PopupWithForm';
import PopupButton from './PopupButton';


function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  values,
  errors,
  setValues,
  setErrors,
  handleChange,
  isLoading,
  inputlist
}){


  const [isActive, setIsActive]=React.useState(false);

  React.useEffect(() => {


    const arrAddCardValues = Array.from(Object.values(values.addCard));
    const arrAddCardErrors = Array.from(Object.values(errors.addCard));

    const objAddCardErrors = values.addCard;


    console.log(objAddCardErrors)
    if (arrAddCardErrors.every(elem => elem === "") && arrAddCardValues.length === inputlist-1){
      setIsActive(true);
    } else {
      setIsActive(false);
    }


  }, [errors, values]);

  function handleSubmit(e) {

    e.preventDefault();

    onAddPlace({
      name: values.addCard.placeName,
      link: values.addCard.placeUrl,
    });

    setValues({ ...values, addCard:{}});
    setErrors({...errors, addCard:{}});
  }

  function handleClose(){
    onClose()
    setValues({ ...values,  addCard: {}});
    setErrors({...errors, addCard:{}});
  }

  return (
    <PopupWithForm
      title="Новое место"
      formName="addCard"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <>
        <div className="popup__field">
          <input
            className={(isActive)? "popup__input" : "popup__input popup__input_type_error"}
            name="placeName"
            value={values.addCard.placeName || ''}
            placeholder="Название"
            type="text"
            minLength="1"
            maxLength="30"
            onChange={handleChange}
            required
          />
          {errors.addCard.placeName && (
            <span className="popup__input-error popup__input-error_active">{errors.addCard.placeName}</span>
          )}
        </div>
        <div className="popup__field">
          <input
            className={(isActive || values.addCard.placeUrl !== 0)? "popup__input" : "popup__input popup__input_type_error"}
            name="placeUrl"
            value={values.addCard.placeUrl || ''}
            placeholder="Ссылка на картинку"
            type="url"
            onChange={handleChange}
            required
          />
          {errors.addCard.placeUrl && (
            <span className="popup__input-error popup__input-error_active">{errors.addCard.placeUrl}</span>
          )}
        </div>
        <PopupButton
          className="popup__submit-button"
          text={isLoading? "Сохранение" : "Создать"}
          type="submit"
          isActive={isActive}
          isLoading={isLoading}
        />
      </>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
