import React from 'react';

import stylesFooter from './Footer.module.scss';

function Footer({feedbackOpen, setFeedbackOpen}) {
  return (
    <footer className={stylesFooter.root}>
        <div className="row1">
            <div className="logo">
                <img src="./assets/img/Логотип.svg" alt="logo.png" />
                <p>Y change</p>
            </div>
            <div className="contacts">
                <img src="./assets/img/ТГ.svg" alt="telegram.svg" />
                <img src="./assets/img/ВК.svg" alt="vk.svg" />
                <img src="./assets/img/help.png" alt="help.png" onClick={() => setFeedbackOpen(!feedbackOpen)}/>
            </div>
        </div>
        <div className="row2">
            <p>ООО ИА «Y change» использует файлы cookie для повышения удобства пользователей и обеспечения должного уровня работоспособности сайта и сервисов. Cookie называются небольшие файлы, содержащие информацию о настройках и предыдущих посещениях веб-сайта. Если вы не хотите использовать файлы cookie, то можете изменить настройки браузера.</p>
        </div>
        <div className="row3">
            <p>@copyright by SMPK company 2024г.</p>
            <img src="./assets/img/16+.png" alt="16+.png" />
        </div>
    </footer>
  )
}
export default Footer;