import React, {useEffect, useState} from "react";
import Bottle from "../Models/Bottle.tsx";
import './FetchGalleryData.module.css';
import BottleStatusBar from "../Components/BottleStatusBar.tsx";
import {API_BOTTLES} from "../constants.ts";
import Filters from "../Models/Filters.tsx";
import BottleStatus from "../Models/BottleStatus.tsx";
import axios from "axios";

interface FetchGalleryDataProps {
    filters: Filters;
}

const FetchGalleryData: React.FC<FetchGalleryDataProps> = ({ filters })=> {

    const [galleryData, setGalleryData] = useState<Bottle[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchGalleryData(filters);
                setGalleryData(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : String(error));
            }
        }
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
       <div className="grid grid-cols-2 gap-2">
           {
               galleryData.map((bottle) => {
                       const image = bottle.imageNormal != undefined
                           ? bottle.imageNormal
                           : "";

                       return (
                           <div key={bottle.id} className="flex justify-between bg-gray-700 rounded-md p-2">
                               <img src={toImage(image)} alt=""
                                    className="object-contain group-hover:opacity-75 gallery-image"/>
                               <div className="grid grid-cols-1 content-between">
                                   <h3 className="text-sm text-gray-200 break-words">
                                       {bottle.name}
                                   </h3>

                                   <BottleStatusBar initStatus={bottle.bottleStatus} whiskybaseId={bottle.whiskybaseId} />
                               </div>
                           </div>
                       )})}
       </div>
    );
}

function toImage(base64: string) {
    return "data:image/png;base64," + base64;
}

async function fetchGalleryData(filters: Filters): Promise<Bottle[]> {
    const statusFilter: BottleStatus[] = [];

    if (filters.ShowClosedBottles) {
        statusFilter.push(BottleStatus.UNOPENED)
    }

    if (filters.ShowOpenBottles) {
        statusFilter.push(BottleStatus.OPENED)
    }

    if (filters.ShowEmptyBottles) {
        statusFilter.push(BottleStatus.EMPTY)
    }

    const params = {
        status: statusFilter
    };

    const response = await axios.get(API_BOTTLES, { params });
    return response.data;
}

export default FetchGalleryData;