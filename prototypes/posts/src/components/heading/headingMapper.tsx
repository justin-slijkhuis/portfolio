import { Heading } from "./heading";
import type { HeadingProps } from "./headingProps";

export const mapHeading = (props: HeadingProps, children: any) => {
  const { level, text } = props;

  return (
    <Heading level={level}>
        {text}
        {children}
    </Heading>
  );
}