import React from "react";
import { Input as NativeBaseInput } from "native-base";

const Input = (props) => {
  const { onChangeText, value, ...rest } = props;

  return (
    <NativeBaseInput
      borderColor={"transparent"}
      backgroundColor={"gray.600"}
      color={"gray.200"}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
};

export default Input;
