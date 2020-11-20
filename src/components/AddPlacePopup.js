import React from 'react';
import PopupWithForm from './PopupWithForm';
import PopupButton from './PopupButton';
import escapeKeyCode from '../utils/utils';

function AddPlacePopup({
    isOpen,
    onClose,
    onAddPlace,
    onOverlayClick,
    values,
    errors,
    setValues,
    setErrors,
    handleChange,
    isLoading })
  {

    //state for validation form
    const [isActive, setIsActive]= React.useState(false);

    // inputs count in this popup
    const inputListLength = 2;

    React.useEffect(() => {

      const formValues =  Array.from(Object.values(values.addCard));
      const formErrors = Array.from(Object.values(errors.addCard));

      //set isActive state true for all filled inputs without errors
       if(formErrors.every(elem => elem === "") && formValues.length === inputListLength) {
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
      onClose();
      setValues({ ...values,  addCard: {}});
      setErrors({...errors, addCard:{}});
    }

    function handleKeyDown(event){
      if(isOpen && event.keyCode === escapeKeyCode){
        onClose();
        setValues({ ...values,  addCard: {}});
        setErrors({...errors, addCard:{}});
      }
    };

    React.useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    });

    return (
      <PopupWithForm
        title="Новое место"
        formName="addCard"
        isOpen={isOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
        onOverlayClick={onOverlayClick}
      >
        <>
          <div className="popup__field">
            <input
              className={(isActive || values.addCard.placeName !== 0)? "popup__input" : "popup__input popup__input_type_error"}
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
            text={isLoading? "Сохранение..." : "Создать"}
            type="submit"
            isActive={isActive}
            isLoading={isLoading}
          />
        </>
      </PopupWithForm>
    )
}

export default AddPlacePopup;
