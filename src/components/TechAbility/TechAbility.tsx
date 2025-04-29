import { Icon } from "@iconify/react";
import { TechAbilityProps } from "../../types/TechAbility";

const TechAbility = ({ iconName, iconLabel, techDocLink }: TechAbilityProps) => {
    function accessOnClick(techDocLink: string) {
        window.open(techDocLink, '_blank');
    }

    return (
        <div className="flex flex-col items-center max-w-[120px] "> 
            <div className="hover:cursor-pointer bg-(--primary-color) rounded-[5px] p-2" onClick={() => accessOnClick(techDocLink)}>
                <Icon
                    className="text-(--dark-bg-color) w-16 h-16 sm1:w-20 sm1:h-20 md1:w-30 md1:h-30"
                    icon={iconName}
                />
            </div>
            <h3 className="text-white tech-title text-(length:--heading4-font-size) font-(family-name:--heading-family) text-center">{iconLabel}</h3>
        </div>
    );
}

export { TechAbility };