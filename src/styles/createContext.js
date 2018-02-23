import { create } from "jss";
import preset from "jss-preset-default";
import jssNested from "jss-nested";
import { SheetsRegistry } from "react-jss";
import { createMuiTheme } from "material-ui/styles";
import { purple, green, indigo } from "material-ui/colors";
import createGenerateClassName from "material-ui/styles/createGenerateClassName";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    accent: purple
  }
});

// Configure JSS
const jss = create(preset());
jss.use(jssNested());
jss.options.createGenerateClassName = createGenerateClassName;

export default function createContext() {
  return {
    jss,
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry()
  };
}
