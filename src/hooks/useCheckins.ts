import { checkInReducer } from "../reducer/checkInReducer"
import { useReducer } from "react"
import type { checkIn } from "../types"

export function useCheckins() {

    const [checkins, dispatch] = useReducer(checkInReducer, [])

    function addCheckin(checkIn: checkIn) {
        dispatch({type: "ADD_CHECKIN", payload: checkIn})
    }

    function removeCheckin(id: string) {
        dispatch({type: "REMOVE_CHECKIN", payload: {id} })
    }

    function clearDay(date: string) {
        dispatch({type: "CLEAR_DAY", payload: {date}})
    }

    return {checkins, addCheckin, removeCheckin, clearDay}
}
