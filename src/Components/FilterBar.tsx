import {FunnelIcon, XMarkIcon} from "@heroicons/react/24/solid";
import React, {useState} from "react";
import CheckButton from "./Shared/CheckButton.tsx";
import Filters from "../Models/Filters.tsx"

interface FilterBarProps {
    show: boolean;
    onReturn: (Filters: Filters) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ show, onReturn })=> {

    const [filters, setFilters] = useState(new Filters());

    const handleToggleClosed = (value: boolean) => {
        setFilters(prevFilter => ({
            ...prevFilter, ["ShowClosedBottles"]: value }));
        onReturn(filters);
    }

    const handleToggleOpen = (value: boolean) => {
        setFilters(prevFilter => ({
            ...prevFilter, ["ShowOpenBottles"]: value }));
        onReturn(filters);
    }

    const handleToggleEmpty = (value: boolean) => {
        setFilters(prevFilter => ({
            ...prevFilter, ["ShowEmptyBottles"]: value }));
        onReturn(filters);
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
                    <CheckButton text="Geschlossen" className="p-2 rounded-e-none rounded-l-lg" isActive={true} onReturn={handleToggleClosed}/>
                    <CheckButton text="Offen" className="p-2 rounded-none" isActive={true} onReturn={handleToggleOpen}/>
                    <CheckButton text="Leer" className="p-2 rounded-s-none rounded-r-lg" isActive={true}  onReturn={handleToggleEmpty}/>
                </div>
            </div>
        )
    }
}

export default FilterBar;