import { component$, Slot } from "@builder.io/qwik";
import type { GroupProps } from "./groupProps";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const Group = component$((props: GroupProps) => {

    const { left } = props;

    let style = 'position: relative;';

    if (left != null) {
        style += `left: ${left.value + left.unit};`;
    }

    return (
        <div style={style}>
            <Slot/>	
        </div>
    );
});
