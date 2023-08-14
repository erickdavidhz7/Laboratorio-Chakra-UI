import { Box, Button, Text, Stack } from "@chakra-ui/react";
export default function Card() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        marginTop="25px"
        marginLeft="25px"
        width="300px"
        height="350px"
        textAlign="center"
        variant="brand"
        size="2xl"
        fontWeight="hairline"
        color="white"
        fontSize="30px"
        bgImage="https://momentummag.com/wp-content/uploads/2022/09/womansunset.jpg"
        
      >
        <Text marginBottom="5px">DOMINA EL TERRENO</Text>
        
        <Stack direction="row" spacing={4} align="center">
          <Button  fontSize="15px" fontWeight="low" borderRadius="0" colorScheme="gray" color="white" borderColor="white" _hover={{ bgColor: "white", color: "black" }} variant="outline" >
            VER DETALLES
          </Button>
          <Button fontSize="15px" fontWeight="low" borderRadius="0" colorScheme="gray" color="white" borderColor="white" _hover={{ bgColor: "white", color: "black" }} variant="outline">
            VER VIDEO
          </Button>
        </Stack>
      </Box>
    </>
  );
}
