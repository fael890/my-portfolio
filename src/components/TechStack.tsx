import { Icon } from "@iconify/react";
import { TechStackProps } from '../types/TechStack';

export default function TechStack({ iconsSize, iconsNames }: TechStackProps){
    return (
        <div className="techstack-content flex gap-3">
            {iconsNames.map((iconName, index) => (
                <Icon key={index} icon={iconName} width={iconsSize} height={iconsSize} />
            ))}
        </div>
    );
}