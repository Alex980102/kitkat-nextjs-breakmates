import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { inputTheme } from "./Input";
const dark = "#B83055";
const light = "#B83055";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode(light, dark)(props)
      }
    })
  },
  components: {
    Input: inputTheme,
  }
});

export default theme;