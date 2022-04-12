// why it no like?
import React from "react";
  
  export default class ToggleDarkMode extends React.Component {
    static contextType = ThemeContext;
  
    // ...
    render() {
      const { dark, toggleDark } = this.context;
  
      // ...
    }
  }