import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  AccordionIcon,
} from "@chakra-ui/react";

const AccordionTemplat = ({ title, describ }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
            <Box as="span" flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          {describ}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionTemplat;
