import React from "react";
import { Text as NativeBaseText } from "native-base";

const Text = (props) => {
  const { children, ...rest } = props;

  return (
    <NativeBaseText color={"gray.200"} {...rest}>
      {children}
    </NativeBaseText>
  );
};

export default Text;
