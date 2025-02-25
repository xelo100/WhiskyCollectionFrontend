import {FunnelIcon, XMarkIcon} from "@heroicons/react/24/solid";
import React, {useState} from "react";
import CheckButton from "./Shared/CheckButton.tsx";

interface FilterBarProps {
    show: boolean;
    onReturn: (ShowClosedFilter: boolean, ShowOpenFilter: boolean, ShowEmptyFilter: boolean) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ show, onReturn })=> {

    const [showClosedFilter, setShowClosedFilter] = useState(true);
    const [showOpenFilter, setShowOpenFilter] = useState(true);
    const [showEmptyFilter, setShowEmptyFilter] = useState(true);

    const handleToggleClosed = (value: boolean) => {
        setShowClosedFilter(value);
        onReturn(value, showOpenFilter, showEmptyFilter);
    }

    const handleToggleOpen = (value: boolean) => {
        setShowOpenFilter(value);
        onReturn(showClosedFilter, value, showEmptyFilter);
    }

    const handleToggleEmpty = (value: boolean) => {
        setShowEmptyFilter(value);
        onReturn(showClosedFilter, showOpenFilter, value);
    }

    if (show)
    {
        return (
            <div className="bg-gray-500 bg-opacity-95 fixed h-full w-2/3 flex-col shadow-xl shadow-blue-gray-900/5 p-2">
                <button className="bg-primary me-2">
                    Filter anwenden
                </button>
                <button className="bg-primary">
                    <FunnelIcon className="size-6 inline"/>
                    <XMarkIcon className="size-6 inline"/>
                </button>

                <p>Zeige</p>
                <div className="inline-flex rounded-lg shadow-md">
                    <CheckButton text="Geschlossen" className="p-2 rounded-e-none rounded-l-lg" isActive={showClosedFilter} onReturn={handleToggleClosed}/>
                    <CheckButton text="Offen" className="p-2 rounded-none" isActive={showOpenFilter} onReturn={handleToggleOpen}/>
                    <CheckButton text="Leer" className="p-2 rounded-s-none rounded-r-lg" isActive={showEmptyFilter} onReturn={handleToggleEmpty}/>
                </div>
            </div>
        )
    }
}

export default FilterBar;