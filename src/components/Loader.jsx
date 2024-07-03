import { Box, Spinner, } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box textAlign={'center'} py={20}>
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
        />
    </Box>
  )
}

export default Loader