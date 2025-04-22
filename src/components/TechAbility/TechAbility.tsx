import { Icon } from "@iconify/react";
import { TechAbilityProps } from "../../types/TechAbility";

const TechAbility = ({ iconName, iconLabel, techDocLink } : TechAbilityProps) => {
    function accessOnClick(techDocLink: string) {
        window.open(techDocLink, '_blank');
    }

    return (
        <div className="tech-ability-container flex w-fit flex-col p-2 items-center">
            <div className="icon-container p-2" onClick={() => accessOnClick(techDocLink)}>
                <Icon className="icon-ability" icon={iconName} width="90" height="90"/>
            </div>
            <h3 className="tech-title heading-font4">{iconLabel}</h3>
        </div>
    );
}

export { TechAbility };