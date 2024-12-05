import { component$, Slot } from "@builder.io/qwik";
import type { HeadingProps } from "./headingProps";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const Heading = component$((props: HeadingProps) => {
    const { level } = props;

    return (
        <>
          {level === 1 && <h1><Slot/></h1>}
          {level === 2 && <h2><Slot/></h2>}
          {level === 3 && <h3><Slot/></h3>}
        </>
    );
});
