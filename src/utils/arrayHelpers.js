import React from "react";

export const repeatElement = (element, count) => {
  return Array.from({ length: count }, (_, i) =>
    React.cloneElement(element, { key: `repeat-${i}` })
  );
};
