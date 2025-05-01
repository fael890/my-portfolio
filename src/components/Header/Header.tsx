import { Icon } from "@iconify/react";
import { ContactModal } from "../ContactModal/ContactModal";
import { useState } from "react";

const Header = () => {
    const [modalState, setModalState] = useState<boolean>(false);

    const changeModalState = () => {
        setModalState(!modalState);
    }

    return (
        <>
            <header className='
                text-(length:--heading3-font-size) font-(family-name:--heading-family) text-(--color-white)
                flex justify-between items-center bg-(--primary-color)
                px-[16px] sm1:px-[36px] w-full h-[80px] gap-x-20
            '
            >
                <div className='hidden md1:flex flex-1 flex justify-start'>
                    <h3 className='hidden md1:flex'>Rafael Capodeferro</h3>
                </div>
                <div className='justify-between sm1:justify-start md1:justify-center flex-1 flex gap-x-6 sm1:gap-x-20'>
                    <button className="hover:cursor-pointer" onClick={changeModalState}>
                        <Icon icon="mdi:gmail" className="w-[40px] h-[40px] sm1:w-[40px] sm1:h-[40px]" />
                    </button>
                    <a href="https://github.com/fael890" target='_blank'><Icon icon="mdi:github" className="w-[40px] h-[40px] sm1:w-[40px] sm1:h-[40px]" /></a>
                    <a href='https://www.linkedin.com/in/rafael-capodeferro/' target='_blank'><Icon icon="mdi:linkedin" className="w-[40px] h-[40px] sm1:w-[40px] sm1:h-[40px]" /></a>
                    <button className="hover:cursor-pointer" onClick={changeModalState}>
                        <Icon icon="mdi:phone" className="w-[40px] h-[40px] sm1:w-[40px] sm1:h-[40px]" />
                    </button>
                </div>
                <div className='flex-1 flex justify-end hidden sm1:flex'>
                    <a href='https://drive.google.com/file/d/1ImurOLZt0HKimFqNy3xCLZWa3KVvU9NZ/view?usp=drive_link' target='_blank' className='flex gap-x-2 hidden sm1:flex'>
                        <h3 className="max-[650px]:text-(length:--heading4-font-size)">Meu Currículo</h3>
                    </a>
                </div>
            </header>
            {modalState && <ContactModal setModalState={setModalState} />}
        </>
    );
}

export { Header };