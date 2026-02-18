import type { checkIn } from "../types"

type checkInAction = { type: "ADD_CHECKIN", payload: checkIn } |
{ type: "REMOVE_CHECKIN", payload: { id: string } } | { type: "CLEAR_DAY", payload: { date: string } }

export function checkInReducer(state: checkIn[], action: checkInAction) {
    switch (action.type) {
        case "ADD_CHECKIN":
            return [...state, action.payload]
        case "REMOVE_CHECKIN":
            return state.filter(item => item.id !== action.payload.id)
        case "CLEAR_DAY":
            return state.filter(item => item.timestamp.toString() !== action.payload.date)
        default:
            return state
    }
}
