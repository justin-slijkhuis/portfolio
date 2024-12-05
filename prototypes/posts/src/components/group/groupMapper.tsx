import { Group } from "./group";
import type { GroupProps } from "./groupProps";

export const mapGroup = (props: GroupProps, children: any) => {

  return (
    <Group left={props.left}>
        {children}
    </Group>
  );
}