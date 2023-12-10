import { FC } from 'react'
import "./SidebarOption.css"

interface SidebarOptionProps {
    active?: boolean;
    text: string;
    Icon: FC;
}

const SidebarOption = (props: SidebarOptionProps) => {

    return  (
        <div className={`sidebarOption ${props.active && 'sidebarOption--active'}`}>
            <props.Icon />
            <h2>{props.text}</h2>
        </div>
    );
};

export default SidebarOption;