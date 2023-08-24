// ACTION CREATOR (function that returns an Action)

import {BUY_BIKE} from "./bikeTypes"

export const BuyBike = () => {
    return {
        type: BUY_BIKE,
    }
}
