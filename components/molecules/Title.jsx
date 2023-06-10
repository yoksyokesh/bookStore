import React from "react";
import { Text } from "native-base";

const Title = (props) => {
  const { children, ...rest } = props;
  return (
    <Text fontWeight={"semibold"} fontSize={30} color={'#6527f8'} {...rest}>
      {children}
    </Text>
  );
};

export default Title;
