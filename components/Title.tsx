import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}
const Title = ({ children, className }: Props) => {
  return <div>Title</div>;
};

export default Title;
