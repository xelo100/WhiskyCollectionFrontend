import FetchGalleryData from "./DataAccess/FetchGalleryData.tsx";
import FilterBar from "./Components/FilterBar.tsx";
import {useState} from "react";
import {FunnelIcon} from "@heroicons/react/24/solid";

function App() {

    const [showClosedBottles, setShowClosedBottles] = useState(true);
    const [showOpenBottles, setShowOpenBottles] = useState(true);
    const [showEmptyBottles, setShowEmptyBottles] = useState(true);
    const [showFilters, setShowFilters] = useState(false);

    const onToggleShowFilters = () => {
        setShowFilters(!showFilters);
    }

    const handleFiltersChanged = (showClosedBottles: boolean, showOpenBottles: boolean, showEmptyBottles: boolean) => {
        setShowClosedBottles(showClosedBottles);
        setShowOpenBottles(showOpenBottles);
        setShowEmptyBottles(showEmptyBottles);
    }

  return (
    <>
        <div className="fixed">
            <FunnelIcon className="mb-3 size-6" onClick={() => onToggleShowFilters()}/>
            <FilterBar show={showFilters} onReturn={handleFiltersChanged}/>
        </div>

        <div className="mt-9">
            <FetchGalleryData showClosedBottles={showClosedBottles} showOpenBottles={showOpenBottles} showEmptyBottles={showEmptyBottles} />
        </div>
    </>
  )
}

export default App
