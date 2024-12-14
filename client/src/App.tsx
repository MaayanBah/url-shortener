import { Heading, HStack, VStack } from "@chakra-ui/react";
import ColorModeSwitch from "./components/colorModeSwitch";

function App() {
  return (
    <div>
      <VStack paddingTop={5}>
        <HStack>
          <Heading size="2xl">URL Shortener</Heading>
          <ColorModeSwitch />
        </HStack>
      </VStack>
    </div>
  );
}

export default App;
