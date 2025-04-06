import React from "react";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);

import React from "react";
import ReactDOM from "react-dom/client";

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(myelement);

import React from "react";
import ReactDOM from "react-dom/client";

const container = document.getElementById("sandy");
const root = ReactDOM.createRoot(container);
root.render(<p>Hallo</p>);

import React from "react";
import ReactDOM from "react-dom/client";
const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);

import React from "react";
import ReactDOM from "react-dom/client";

const myelement = React.createElement("h1", {}, "I do not use JSX!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);

import React from "react";
import ReactDOM from "react-dom/client";

const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);

import React from 'react'
import ReactDom from 'ract-dom/client'

const myElement={
  <ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Cherries</li></ul>
}
const root = reactDom.create(document.getElementById("root"))
root.render(myElement)