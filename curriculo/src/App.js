import { Flex } from "@chakra-ui/react";
import Accordion from "./components/Accordion"
import ButtonTest from "./components/Button";



function App() {
  return (
    <Flex>
      <Accordion title={"Skill"} />
      <ButtonTest title={"Teste"} />
    </Flex>
  );
}

export default App;
