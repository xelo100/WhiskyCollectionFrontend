import BottleStatus from "./BottleStatus";

interface Bottle {
    id: number | undefined,
    whiskybaseId: string,
    name: string,
    distillery: string | undefined,
    bottler: string | undefined,
    distilled: string | undefined,
    bottled: string | undefined,
    age: number | undefined,
    caskTypes: string[] | undefined,
    caskNumber: string | undefined,
    volumePercentage: number | undefined,
    bottleCode: string | undefined,
    countOfBottles: string | undefined,
    whiskybaseRating: number | undefined,
    numberOfWhiskybaseRatings: number,
    averageValue: number | undefined,
    pricePaid: number | undefined,
    bottleStatus: BottleStatus,
    imageNormal: string | undefined,
    imageBig: string | undefined
}

export default Bottle;