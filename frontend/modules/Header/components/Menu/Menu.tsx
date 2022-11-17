import style from './Menu.module.scss'

import { MENU } from './constants'

type TProps = {
    device: "Desktop" | "Mobile"
}

export const Menu = ({ device }: TProps) => {
    return (
        <ul className={
            (device === "Desktop")
                ? style.listDesktop
                : (device === "Mobile")
                    ? style.listMobile :
                    ''
        }>
            {
                MENU.map(item =>
                    <li className={style.listItem}>
                        <button className={style.itemButton}>{item}</button>
                    </li>
                )
            }
        </ul>
    )
}