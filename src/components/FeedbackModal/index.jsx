import style from './FeedbackModal.module.scss';
import React from 'react';

function FeedbackModal() {
  return (
    <div className={style.root}>
        <h1>Форма обратной связи</h1>
        <input type="text" placeholder='ФИО' />
        <input type="text" placeholder='E-mail'/>
        <input type="text" placeholder='Ваше сообщение'/>
        <button onClick={() => alert('Отправка успешна')}>Отправить</button>
    </div>
  )
}
export default FeedbackModal;