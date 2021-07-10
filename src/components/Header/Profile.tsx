import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>André Coelho</Text>
          <Text color="gray.300" fontSize="small">
            andrevrcoelho@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="André Coelho"
        src="https://github.com/avrcoelho.png"
      />
    </Flex>
  );
};
