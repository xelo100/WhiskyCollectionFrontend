import {useEffect, useState} from "react";
import Bottle from "../Models/Bottle.tsx";

function FetchGalleryData() {
    const [galleryData, setGalleryData] = useState<Bottle[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchGalleryData();
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
                           <div className="flex justify-between bg-gray-700 rounded-md p-2">
                               <img src={toImage(image)} alt=""
                                    className="aspect-square object-contain group-hover:opacity-75"/>
                               <div>
                                   <h3 className="text-sm text-gray-200">
                                       {bottle.name}
                                   </h3>
                                   <p className="text-sm font-medium text-gray-400">
                                       {bottle.pricePaid} €
                                   </p>
                                   <p className="text-sm font-medium text-gray-400">
                                       {bottle.status}
                                   </p>
                               </div>
                           </div>
                       )})}
       </div>
    );
}

function toImage(base64: string) {
    return "data:image/png;base64," + base64;
}

async function fetchGalleryData(): Promise<Bottle[]> {
    const response = await fetch('http://desktop-glhislj:8080/bottle');
    return await response.json();
}

export default FetchGalleryData;