import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(json => {
        this.setState({ isLoaded: true, items: json });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    console.log("items:", items);

    if (!isLoaded) {
      return <div>Loading.....</div>;
    } else {
      return (
        <div className="App">
          Title: {items.title} ------ Completed: {items.body};
        </div>
      );
    }
  }
}

export default App;

/*
  render() {
    var { isLoaded, items } = this.state;

    console.log("items:", items);

    if (!isLoaded) {
      return <div>Loading.....</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                Title:{item.title} ------ Body: {item.body}
              </li>
            ))}
            ;
          </ul>
        </div>
      );
    }
  }
}
*/

/*

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(json => {
        this.setState({ isLoaded: true, items: json });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    console.log("items:", items);

    if (!isLoaded) {
      return <div>Loading.....</div>;
    } else {
      return (
        <div className="App">
          Title: {items.title} ------ Completed: {items.body};
        </div>
      );
    }
  }
}
*/
