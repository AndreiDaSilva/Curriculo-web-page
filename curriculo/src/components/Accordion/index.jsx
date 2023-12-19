import {
  AccordionButton,
  AccordionItem,
  Box,
  MinusIcon,
  AddIcon,
  AccordionPanel,
} from "@chakra-ui/react";

const Accordion = ({ title, describe }) => {
  return (
    <Accordion>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {title}
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{describe}</AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default Accordion;
