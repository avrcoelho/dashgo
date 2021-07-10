import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>André Coelho</Text>
        <Text color="gray.300" fontSize="small">
          andrevrcoelho@hotmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="André Coelho"
        src="https://github.com/avrcoelho.png"
      />
    </Flex>
  );
};
