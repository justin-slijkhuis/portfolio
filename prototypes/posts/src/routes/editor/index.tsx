import { $, component$, useStore } from "@builder.io/qwik";
import { GroupSettings } from "~/components/group/groupSettings";
import { mapPost } from "~/logic/posts/PostMapper";
import { Unit } from "~/logic/posts/units";

interface ComponentElement {
    name: string;
    description: string;
}

export const allowedComponents: ComponentElement[] = [
    {
        name: 'Heading',
        description: 'A heading component',
    },
    {
        name: 'Group',
        description: 'A group component',
    }
];

export default component$(() => {

    const pageComponents: any = useStore([])

    const addComponent = $((component: ComponentElement) => {
        pageComponents.push({
            component: component.name,
            props: {
                level: 1,
                text: 'Hello World'
            },
            children: []
        });
        console.log(pageComponents);
    });

    return (
        <>
            <GroupSettings left={{value: 10, unit: Unit.Pixel}}/>
            {allowedComponents.map((component) => (
                <div style={"border: black 1px solid"} key={component.name} onClick$={() => addComponent(component)}>
                    <p>{component.name}</p>
                    <p>{component.description}</p>
                </div>
            ))}
            {mapPost(pageComponents)}
        </>
    )
});