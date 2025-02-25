import React, {useState} from "react";

interface CheckButtonProps {
    isActive: boolean;
    className: string;
    text: string;
    onReturn: (value: boolean) => void;
}

const CheckButton: React.FC<CheckButtonProps> = ({ isActive, className, text, onReturn })=> {

    const [active, setActive] = useState(isActive);

    const onClick = () => {
        setActive(!active)
        onReturn(active);
    }

    let classes = className
    if (active) {
        classes += " bg-secondary text-black"
    } else {
        classes += " bg-primary text-white"
    }

    return (
        <button className={classes}  onClick={() => onClick()}>
            {text}
        </button>
    )
}

export default CheckButton;