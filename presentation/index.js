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
  secondary: "#FFFFFF",
  tertiary: "#69BE28"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={2} caps lineHeight={1} textColor="tertiary">
              The Effective Engineer
            </Heading>
            <Heading size={4} textColor="white">
              Smart and Gets Things Done
            </Heading>
            <Text textSize="1.5em" margin="20px 0px" bold textColor="white">Presentation by Bob Bolender</Text>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">Built with Spectacle</Text>
            </Link>
          </Slide>
          <Slide notes="Being efficient at the wrong thing is wasteful.<br/>You don't need thousands of simultaneous requests.<br/>You don't need to A/B things that are not statistically significant.">
            <Heading size={2} caps textAlign="left">
              Effective Engineers...
            </Heading>
            <List>
              <Appear><ListItem>Deliver results</ListItem></Appear>
              <Appear><ListItem>Are efficient (deliver more results in less time)</ListItem></Appear>
              <Appear><ListItem>Focus on value and impact (deliver the right results)</ListItem></Appear>
            </List>
          </Slide>
          <Slide notes="To increase leverage, either increase impact or reduce time">
            <Text textColor="white">
              <b>Leverage</b> = Impact produced / Time Invested
            </Text>
          </Slide>
          <Slide>
            <Heading size={4} textColor="white" textAlign="left" notes="Devoting even 1 hour a day for the first month (20 hours, or 1% of the year) will have a huge impact.">
              Example high-leverage activities
            </Heading>
            <List>
              <Appear><ListItem>Mentoring</ListItem></Appear>
              <Appear><ListItem>Onboarding</ListItem></Appear>
              <Appear><ListItem>Customer Interviews</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading size={4} textColor="white">
              High-leverage habits
            </Heading>
            <List>
              <Appear><ListItem>Prioritizing</ListItem></Appear>
              <Appear><ListItem>Iterating</ListItem></Appear>
              <Appear><ListItem>Measuring</ListItem></Appear>
              <Appear><ListItem>Product Validation</ListItem></Appear>
              <Appear><ListItem>Project Estimation</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading size={4} textColor="white">
              Long-Term Value
            </Heading>
            <List>
              <Appear><ListItem>Balance quality with pragmatism</ListItem></Appear>
              <Appear><ListItem>Minimize operational burden</ListItem></Appear>
              <Appear><ListItem>Invest in team growth</ListItem></Appear>
            </List>
          </Slide>
          <Slide notes="Eisenhower Matrix.<br>An abundance of emergencies generally indicates that you're ignoring non-urgent important tasks.">
            <Image src={"https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fjoshmedeski.com%2Fwp-content%2Fuploads%2F2014%2F10%2FTheEisenhowerMatrix.png&f=1"} width="600px" margin="0px auto 40px" />
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
