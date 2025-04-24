import { Icon } from "@iconify/react";

const CurriculumButton = () => {
    return (
        <a
            href="/link-do-curriculo.pdf" // Substitua pelo seu link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 fixed body-font1 top-4 right-4 bg-(--primary-color) text-(--white-color) px-4 py-2 rounded-full shadow-lg sm:hidden z-50"
        >
            <Icon icon="streamline:business-user-curriculum" width="20" height="20" /> Meu Currículo
        </a>
    );
}

export { CurriculumButton };
