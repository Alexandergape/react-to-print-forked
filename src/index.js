import * as React from "react";
import * as ReactDomClient from "react-dom/client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { ClassComponent } from "./examples/ClassComponent";
import { ClassComponentContextConsumer } from "./examples/ClassComponentContextConsumer";
import { ClassComponentText } from "./examples/ClassComponentText";
import { FunctionalComponent } from "./examples/FunctionalComponent";
import { FunctionalComponentWithHook } from "./examples/FunctionalComponentWithHook";
import { FunctionalComponentWithFunctionalComponentToPrint } from "./examples/FunctionalComponentWFunctional";
import "./example.css";

class Example extends React.Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Class Component</Tab>
          <Tab>Functional Component</Tab>
          <Tab>Raw Values</Tab>
        </TabList>
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Standard</Tab>
              <Tab>With ContextConsumer</Tab>
            </TabList>
            <TabPanel>
              <ClassComponent />
            </TabPanel>
            <TabPanel>
              <ClassComponentContextConsumer />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Standard</Tab>
              <Tab>With Hook</Tab>
              <Tab>With a functional ComponentToPrint</Tab>
            </TabList>
            <TabPanel>
              <FunctionalComponent />
            </TabPanel>
            <TabPanel>
              <FunctionalComponentWithHook />
            </TabPanel>
            <TabPanel>
              <FunctionalComponentWithFunctionalComponentToPrint />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Text</Tab>
            </TabList>
            <TabPanel>
              <ClassComponentText />
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    );
  }
}

const container = document.getElementById("app-root");
const root = ReactDomClient.createRoot(container);
root.render(<Example />);
