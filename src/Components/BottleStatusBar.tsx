import BottleStatus from "../Models/BottleStatus.tsx";
import openImage from "../Icons/open.png";
import emptyImage from "../Icons/empty.png";
import React, {useState} from "react";
import {API_SET_STATUS} from "../constants.ts";

interface BottleStatusBarProps {
    initStatus: BottleStatus;
    whiskybaseId: string;
}

const BottleStatusBar: React.FC<BottleStatusBarProps> = ({ initStatus, whiskybaseId })=> {

    const [status, setStatus] = useState(initStatus);

    const onChangeStatusClicked = (newStatus: BottleStatus) => {
        setBottleStatus(newStatus, whiskybaseId).then((success) => {
            if (!success) {
                console.error("Failed to set status", newStatus);
        }});

        setStatus(newStatus);
    }

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
                <button className="p-0 bg-secondary" onClick={() => onChangeStatusClicked(BottleStatus.EMPTY)}>
                    <img src={emptyImage} alt="" className="max-w-10 max-h-10" style={{ borderRadius: "8px" }}/>
                </button>
            </div>
        );
    }

    if (status === BottleStatus.UNOPENED) {
        return (
            <div className="justify-items-end">
                <p className="text-sm text-gray-500">Geschlossen</p>
                <button className="p-0 me-1 bg-secondary" onClick={() => onChangeStatusClicked(BottleStatus.OPENED)}>
                    <img src={openImage} alt="" className="max-w-10 max-h-10" style={{ borderRadius: "8px" }} />
                </button>
                <button className="p-0 bg-secondary" onClick={() => onChangeStatusClicked(BottleStatus.EMPTY)}>
                    <img src={emptyImage} alt="" className="max-w-10 max-h-10" style={{ borderRadius: "8px" }}/>
                </button>
            </div>
        );
    }
}

async function setBottleStatus(status: BottleStatus, whiskybaseId: string): Promise<boolean> {
    try {
        const response = await fetch(API_SET_STATUS(whiskybaseId), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({status})
        });

        return response.ok;
    } catch (error) {
        console.log("Error:", error);
        return false;
    }
}

export default BottleStatusBar;