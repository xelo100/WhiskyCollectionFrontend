
interface CheckButtonProps {
    isActive: boolean;
    className: string;
    text: string;
    onReturn: (value: boolean) => void;
}

const CheckButton: React.FC<CheckButtonProps> = ({ isActive, className, text, onReturn })=> {

    const onClick = () => {
        onReturn(!isActive);
    }

    let classes = className
    if (isActive) {
        classes += " bg-primary text-white"
    } else {
        classes += " bg-secondary text-black"
    }

    return (
        <button className={classes}  onClick={() => onClick()}>
            {text}
        </button>
    )
}

export default CheckButton;