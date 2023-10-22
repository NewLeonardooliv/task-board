import * as SolidIcons from '@fortawesome/free-solid-svg-icons';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type IconName = keyof typeof SolidIcons;

export default function Icon({ ...props }: { iconName: IconName, className?: string }) {
    const icon = SolidIcons[props.iconName] as IconProp;
    return (
        <FontAwesomeIcon icon={icon} className={props.className} />
    );
}