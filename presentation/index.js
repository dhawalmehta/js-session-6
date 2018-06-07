// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#ff6f60",
  quarternary: "#333"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Javascript Course
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Session 6 - 19th April, 2018
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Session Target</Heading>
          <Heading size={5} textColor="secondary">Recap/Logic building</Heading>
          <Heading size={5} textColor="secondary">Errors/Handling</Heading>
          <Heading size={5} textColor="secondary">Debugging</Heading>
          <Heading size={5} textColor="secondary">Q&A</Heading>
          <Heading size={5} textColor="secondary">Assignment Questions -- issbar sachi milega</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps fit>Recap:</Heading>
          <List>
            <ListItem>Loops & events</ListItem>
            <ListItem>Arrays/Objects</ListItem>
            <ListItem>Functions</ListItem>
            <ListItem>Logic Building</ListItem>
          </List>
        </Slide>


        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps fit>Errors</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem>try</ListItem>
            <ListItem>catch</ListItem>
            <ListItem>throw</ListItem>
            <ListItem>finally</ListItem>
          </List>
        </Slide>


        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps fit>Debugging</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps fit>Ways to debug:</Heading>
          <List>
            <ListItem>check your code</ListItem>
            <ListItem>console.log</ListItem>
            <ListItem>code debuggers</ListItem>
            <ListItem>Browser debuggers</ListItem>
          </List>
        </Slide>


        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps fit>Q&A</Heading>
          <Text margin="10px 0 0" textColor="secondary" size={4} fit>
            Any Questions?
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} textColor="secondary" caps fit>Assignment</Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={4} fit>
            Check Email
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={3} fit bold>
            Last Date & Time of Submission: 9th April, Monday by 9pm.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary" caps fit>Thank you!</Heading>
          <Heading size={5} textColor="tertiary" >Dhawal Mehta</Heading>
        </Slide>
      </Deck>
    );
  }
}
