import { Icon } from "@iconify/react";

interface ContactModalProps {
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactModal = (props: ContactModalProps) => {
    const closeModal = () => {
        props.setModalState(false);
    };

    const copyToClipboard = (text: string) => {
        try {
            navigator.clipboard.writeText(text);
            console.log('Text copied to clipboard');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white/20 z-50 pointer-events-none">
            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg gap-y-8 shadow-[1px_1px_10px] pointer-events-auto">
                <div className="flex justify-between border-b-2 border-(--primary-color)">
                    <h3 className="text-(length:--heading4-font-size) sm2:text-(length:--heading3-font-size) md1:text-(length:--heading3-font-size) font-(family-name:--heading-family)">Meus Contatos</h3>
                    <button className="hover:cursor-pointer" onClick={() => closeModal()}><Icon icon="mdi:close" width="30"/></button>
                </div>
                <div className="flex flex-col justify-between gap-y-2 md1:flex-row md1:gap-15 items-center">
                    <h3 className="text-(length:--body1-font-size) sm2:text-(length:--heading4-font-size) font-(family-name:--body-family)">rafael.capodeferro@gmail.com</h3>
                    <button className="px-5 py-2 hover:shadow-[1px_1px_10px_black] hover:cursor-pointer rounded-lg text-white bg-(--primary-color) text-(length:--body1-font-size) md1:text-(length:--heading4-font-size) font-(family-name:--body-family)" onClick={() => copyToClipboard("rafael.capodeferro@gmail.com")}>Copiar E-mail</button>
                </div>
                <div className="flex flex-col justify-between gap-y-2 md1:flex-row md1:gap-15 items-center">
                    <h3 className="text-(length:--body1-font-size) sm2:text-(length:--heading4-font-size) font-(family-name:--body-family)">+55 11 93491-9812</h3>
                    <button className="px-5 py-2 hover:shadow-[1px_1px_10px_black] hover:cursor-pointer rounded-lg text-white bg-(--primary-color) text-(length:--body1-font-size) md1:text-(length:--heading4-font-size) font-(family-name:--body-family)" onClick={() => copyToClipboard("+55 11 93491-9812")}>Copiar Celular</button>
                </div>
                <div className="flex justify-center border-t-2 pt-3 border-(--primary-color)">
                    <button className="
                            px-5 py-2 max-w-[110px] hover:shadow-[1px_1px_10px_black] hover:cursor-pointer rounded-lg
                            font-(family-name:--body-family) text-white bg-(--primary-color) text-(length:--body1-font-size) 
                            sm2:text-(length:--heading4-font-size)
                        " 
                        onClick={() => closeModal()}
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}

export { ContactModal };