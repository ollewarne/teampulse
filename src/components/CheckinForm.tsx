import type { checkIn, moods } from "../types"
import { useCheckInContext } from "../contexts/CheckInContext";
import { useState } from "react";
function CheckinForm() {
    const [id, setId] = useState(1);

    const {addCheckin} = useCheckInContext()

    const moods: moods[] = ["great", "good", "okay", "tired", "stressed"];


    function handleSubmit(e) {
        const checkIn: checkIn = {
            id: id,
            name: e.target.name,


        }


        addCheckin()
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input name="name" type="text" placeholder="What is your name?" required />
            <select name="mood" required>
                {moods.map((mood) => (
                    <option key={mood} value={mood}>{mood}</option>
                ))}
            </select>

            <label htmlFor="energyLevel">Energy Level</label>
            <input type="range" min={1} max={5} name="energyLevel" required />
            <textarea name="comment" id="comment" placeholder="Add a comment if you want to"></textarea>
            <button type="submit">register mood</button>
        </form>
    )
}

export default CheckinForm;

