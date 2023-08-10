import { Heading } from "@chakra-ui/react";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import Card from "./Card";
export default function Header() {
  return (
    <>
      <Heading
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        className="header"
        width="1020px"
        height="360px"
        textAlign="center"
        variant="brand"
        size="2xl"
        fontWeight="hairline"
        color="white"
        fontSize="50px"
        bgImage="https://momentummag.com/wp-content/uploads/2022/09/womansunset.jpg"
      >
        <div className="textoHeader">DOMINA EL TERRENO</div>

        <Stack direction="row" spacing={4} align="center">
          <Button fontWeight="low" borderRadius="0" colorScheme="gray" color="white" borderColor="white" _hover={{ bgColor: "white", color: "black" }} variant="outline" >
            VER DETALLES
          </Button>
          <Button fontWeight="low" borderRadius="0" colorScheme="gray" color="white" borderColor="white" _hover={{ bgColor: "white", color: "black" }} variant="outline">
            VER VIDEO
          </Button>
        </Stack>
      </Heading>
      <Card/>
    </>
  );
}
