//const heading = React.createElement("h1", {}, "Hello world from React!");

//Nested elements
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a H1 tag"),
    React.createElement("h2", {}, "I am a H2 tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a H1 tag"),
    React.createElement("h2", {}, "I am a H2 tag"),
  ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
