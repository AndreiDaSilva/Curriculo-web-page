import { Flex } from "@chakra-ui/react";
import Accordion from "./components/Accordion"
import Button from "./components/Button";



function App() {
  return (
    <Flex>
      <Accordion title={"Skill"} />
      <Button title={"Click aqui"} />
    </Flex>
  );
}

export default App;
