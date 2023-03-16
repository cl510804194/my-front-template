import { Theme } from "@chakra-ui/react";

export const styles: Theme["styles"] = {
  global: (props) => ({
    "html, body": {
      maxWidth: "1440px",
    },
    a: {
      color: props.colorMode === "dark" ? "teal.300" : "teal.500",
    },
  }),
};
