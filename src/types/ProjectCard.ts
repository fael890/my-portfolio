export type ProjectCardProps = {
    title: string, 
    description: string,
    projectLink: string,
    techStackProps: {
        iconsSize: number,
        iconsNames: string[]
    },
    imageName: string;
};