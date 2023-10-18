import React from "react";

import { Flex, Box, Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter >= 0) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <Box mx="auto" w="80%" bg="whiteAlpha.300">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="20"
      >
        <Heading as="h3">Counter</Heading>

        <Box display="flex" justifyContent="center" alignItems="center" gap="8">
          <Button onClick={handleDecrement} color="red.400">
            Decrement (-)
          </Button>
          <Text>{counter}</Text>
          <Button onClick={handleIncrement} bg="green.400">
            Increment (+)
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Counter;
