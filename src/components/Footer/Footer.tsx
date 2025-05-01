import { Icon } from "@iconify/react";
import { useState } from "react";
import { ContactModal } from "../ContactModal/ContactModal";

const Footer = () => {
    const [modalState, setModalState] = useState<boolean>(false);

    const changeModalState = () => {
        setModalState(!modalState);
    }

    return (
        <>
            <div className="footer-container pb-[80px] sm1:pb-0">
                <div className="bg-[url(/city-image.svg)] w-full h-[335px]"></div>
                <div className="flex flex-col items-center py-[60px] bg-[var(--dark-bg-color)] gap-[40px]">
                    <div className="sm1:flex flex-row flex-wrap justify-center text-[var(--primary-color)] gap-10 mx-[80px] hidden ">
                        <button className="hover:cursor-pointer" onClick={changeModalState}>
                            <Icon icon="mdi:gmail" width="40" />
                        </button>
                        <a href="https://github.com/fael890" target='_blank'><Icon icon="mdi:github" width="40" /></a>
                        <a href="https://www.linkedin.com/in/rafael-capodeferro/" target='_blank'><Icon icon="mdi:linkedin" width="40" /></a>
                        <button className="hover:cursor-pointer" onClick={changeModalState}>
                            <Icon icon="mdi:phone" width="40" />
                        </button>
                    </div>
                    <h3 className="body-font1 text-[var(--primary-color)] italic text-center px-[20px] sm1:px-[40px] md1:px-[80px]">“Só conseguimos ver uma curta distância à frente, mas vemos muito que precisa ser feito.” — Alan Turing</h3>
                    <h3 className="body-font1 text-[var(--primary-color)] px-[20px] sm1:px-[40px] md1:px-[80px] text-center">Design inspirado no trabalho de Arief Rachman.</h3>
                </div>
            </div>
            {modalState && <ContactModal setModalState={setModalState} />}
        </>
    );
}

export { Footer };