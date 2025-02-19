import BottleStatus from "../Models/BottleStatus.tsx";
import openImage from "./open.png";
import emptyImage from "./empty.png";

interface BottleStatusBarProps {
    status: BottleStatus;
}

export default function BottleStatusBar({status}: BottleStatusBarProps) {

    if (status === BottleStatus.EMPTY) {
        return (
            <div className="justify-items-end">
                <p className="text-sm text-gray-500">Ausgetrunken</p>
            </div>
        );
    }

    if (status === BottleStatus.OPENED) {
        return (
            <div className="justify-items-end">
                <p className="text-sm text-gray-500">Offen</p>
                <button className="p-0 bg-secondary">
                    <img src={emptyImage} alt="" className="max-w-10 max-h-10" style={{ borderRadius: "8px" }}/>
                </button>
            </div>
        );
    }

    if (status === BottleStatus.UNOPENED) {
        return (
            <div className="justify-items-end">
                <p className="text-sm text-gray-500">Geschlossen</p>
                <button className="p-0 me-1 bg-secondary">
                    <img src={openImage} alt="" className="max-w-10 max-h-10" style={{ borderRadius: "8px" }} />
                </button>
                <button className="p-0 bg-secondary">
                    <img src={emptyImage} alt="" className="max-w-10 max-h-10" style={{ borderRadius: "8px" }}/>
                </button>
            </div>
        );
    }
}