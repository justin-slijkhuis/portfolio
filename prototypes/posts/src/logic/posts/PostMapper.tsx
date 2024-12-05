import { mapHeading } from "~/components/heading/headingMapper";
import { mapGroup } from "~/components/group/groupMapper";

import type { PostElement } from "./postElement";
import type { JSXOutput } from "@builder.io/qwik";

type MapperFunction = (props: any, children: any) => JSXOutput;

const mappers: { [key: string]: MapperFunction } = {
    "Heading": mapHeading,
    "Group": mapGroup,
}

const recursiveMap = (element: PostElement): JSXOutput => {
    const { component, props, children } = element;

    const childrenJsx = children ? (
        <>
            {children.map((child) => recursiveMap(child))}
        </>
    ) : null;

    const mapper = mappers[component];

    return mapper(props, childrenJsx);
}

export const mapPost = (post: PostElement[]) => {
    return (
        <>
            {post.map((element) => recursiveMap(element))}
        </>
    )
}
