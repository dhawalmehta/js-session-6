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
  tertiary: "#ffbf60",
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
            Session 3 - 10th April, 2018
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Session Target</Heading>
          <Heading size={5} textColor="secondary">Recap</Heading>
          <Heading size={5} textColor="secondary">Functions</Heading>
          <Heading size={5} textColor="secondary">Q&A</Heading>
          <Heading size={5} textColor="secondary">Assignment Questions</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps fit>Recap:</Heading>
          <List>
            <ListItem>ternary operator</ListItem>
            <ListItem>difference between switch and if-else</ListItem>
          </List>
        </Slide>


        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps fit>Functions</Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            A JavaScript {"function"} is a block of code designed to perform a particular task.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem>Predefined {"functions"} eg: {"alert()"} </ListItem>
            <ListItem>{"Function"} Definition</ListItem>
            <ListItem>Calling a {"Function"}</ListItem>
            <ListItem>{"Function"} Parameters</ListItem>
            <ListItem>The return Statement</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps fit>{"Function"} Definition:</Heading>
          <List>
            <ListItem>Using {"Function"} keyword</ListItem>
            <ListItem>{"Function"} {"constructor"}</ListItem>
            <ListItem>Anonymous functions</ListItem>
            <ListItem>{"Function"} Expressions</ListItem>
            <ListItem>Arrow {"function"} expressions</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps fit>Calling a {"Function"}:</Heading>

        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps fit>The context {"'this'"} when the {"function"} is invoked</Heading>
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
