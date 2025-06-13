import { HTMLAttributes } from "react";

interface ClassName {
  className?: string;
}

interface Children {
  children: React.ReactNode;
}

interface WithChildrenAndClass extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

interface HtmlAttr {
  props?: React.HTMLAttributes<HTMLElement>;
}

interface DivProps extends React.ComponentProps<"div"> {}

interface H2Props extends React.ComponentProps<"h2"> {}

interface H3Props extends React.ComponentProps<"h3"> {}

interface DivWithChildrenAndClass extends ClassName, DivProps {}

export type {
  ClassName,
  Children,
  WithChildrenAndClass,
  DivWithChildrenAndClass,
  HtmlAttr,
  DivProps,
  H2Props,
  H3Props,
};
