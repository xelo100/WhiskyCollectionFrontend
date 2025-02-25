import FetchGalleryData from "./DataAccess/FetchGalleryData.tsx";
import FilterBar from "./Components/FilterBar.tsx";
import Filters from "./Models/Filters.tsx";
import {useState} from "react";
import {FunnelIcon} from "@heroicons/react/24/solid";

function App() {

    const [filters, setFilters] = useState(new Filters());
    const [showFilters, setShowFilters] = useState(false);

    const onToggleShowFilters = () => {
        setShowFilters(!showFilters);
    }

    const handleFiltersChanged = (value: Filters) => {
        setFilters(prev => ({ ...prev, ["ShowClosedBottles"]: value.ShowClosedBottles }));
        setFilters(prev => ({ ...prev, ["ShowOpenBottles"]: value.ShowOpenBottles }));
        setFilters(prev => ({ ...prev, ["ShowEmptyBottles"]: value.ShowEmptyBottles }));
    }

  return (
    <>
        <div className="fixed">
            <FunnelIcon className="mb-3 size-6" onClick={() => onToggleShowFilters()}/>
            <FilterBar show={showFilters} onReturn={handleFiltersChanged}/>
        </div>

        <div className="mt-9">
            <FetchGalleryData filters={filters}/>
        </div>
    </>
  )
}

export default App
