import React from "react";

interface Props {
  itemName: string;
}

export const EmptyList: React.FC<Props> = (props) => {
  return <>No matching {props.itemName} found</>;
};
