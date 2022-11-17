import {
    Wrapper,
    Flex
} from '@layouts'
import {
    Menu,
    Burger
} from './components'

import { useWindowSize } from '@hooks'

import style from './Header.module.scss'

import { useState } from 'react'

export const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const windowSize = useWindowSize()

    const handleIsActiveMenu = () => {
        setIsActive(isActive => !isActive)
    }
    return (
        <header className={style.header}>
            <Wrapper>
                <Flex justifyContent="space-between">
                    <div className={style.logo}>{'список таблиц'}</div>
                    <nav>
                        {
                            (windowSize.width <= 768)
                                ? <>
                                    <Burger
                                        isActive={isActive}
                                        handleIsActiveMenu={handleIsActiveMenu} />
                                    {
                                        isActive && <Menu device={'Mobile'} />
                                    }
                                </>
                                : <Menu device={'Desktop'} />
                        }
                    </nav>
                </Flex>
            </Wrapper>
        </header >
    )
}