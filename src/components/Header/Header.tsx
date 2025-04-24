import './Header.css';

import { Icon } from "@iconify/react";

const Header = () => {
    return (
        <header className='
                header-container heading-font3 flex justify-between items-center
                bg-(--primary-color) text-(--color-white)
                px-[36px] w-full h-[80px] gap-x-20
            '
        >
            <div className='hidden md1:flex flex-1 flex justify-start'>
                <h3 className='hidden md1:flex'>Rafael Capodeferro</h3>
            </div>
            <div className='justify-center sm1:justify-start md1:justify-center flex-1 flex gap-x-20'>
                <Icon icon="mdi:gmail" width="40" />
                <a href="https://github.com/fael890" target='_blank'><Icon icon="mdi:github" width="40" /></a>
                <a href='https://www.linkedin.com/in/rafael-capodeferro/' target='_blank'><Icon icon="mdi:linkedin" width="40" /></a>
                <Icon icon="mdi:phone" width="40" />
            </div>
            <div className='flex-1 flex justify-end hidden sm1:flex'>
                <a href='https://drive.google.com/file/d/1ImurOLZt0HKimFqNy3xCLZWa3KVvU9NZ/view?usp=drive_link' target='_blank' className='flex gap-x-2 hidden sm1:flex'>
                    <h3>Meu Currículo</h3>
                </a>
            </div>
        </header>
    );
}

export { Header };