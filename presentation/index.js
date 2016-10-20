// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#002244",
  secondary: "#69BE28"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={2} caps lineHeight={1} textColor="secondary">
              The Effective Engineer
            </Heading>
            <Heading size={4} textColor="white">
              Smart and Gets Things Done
            </Heading>
            <Text textSize="1.5em" margin="20px 0px" bold textColor="white">Presentation by Bob Bolender</Text>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="secondary">Built with Spectacle</Text>
            </Link>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Text textColor="white">
              Time is our most finite asset, and leverage<br/>
              &mdash;the value we produce per unit of time&mdash;<br/>
              allows us to direct our time toward what matters most.
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
