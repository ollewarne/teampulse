import type { moods } from "../types"
import { useCheckInContext } from "../contexts/CheckInContext";
function CheckinForm() {

    const {addCheckin} = useCheckInContext()

    const moods: moods[] = ["great", "good", "okay", "tired", "stressed"];

    function handleSubmit() {
        addCheckin()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="What is your name?" required />
            <select required>
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

