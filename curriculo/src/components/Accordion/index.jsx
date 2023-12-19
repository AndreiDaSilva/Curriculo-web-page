import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  MinusIcon,
  AddIcon,
} from "@chakra-ui/react";

const AccordionTemplat = ({ title, describe }) => {
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

export default AccordionTemplat;
