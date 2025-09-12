import React from "react";
interface Props {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}
const PriceView = ({ price, discount, className }: Props) => {
  return <div>PriceView</div>;
};

export default PriceView;
