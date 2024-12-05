import { component$ } from "@builder.io/qwik";
import type { GroupProps } from "./groupProps";

export const GroupSettings = component$((props: GroupProps) => {

    return (
        <>
            <input type="number" value={props.left?.value} />
            <select id="units" name="units">
                <option value="Pixel">Pixels</option>
                <option value="Percent">Percent</option>
            </select>
        </>
    );
});
