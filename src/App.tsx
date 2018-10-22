import { Provider } from "mobx-react";
import * as React from "react";
import { Carousel } from "./components/carousel";
import { ColorChooser } from "./components/colorChooser";
import { ColorStore } from "./stores/colorStore";

export class App extends React.Component {
  private colorStore: ColorStore = new ColorStore();

  public render() {
    return (
      <Provider colorStore={this.colorStore}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          <div>
            <Carousel />
          </div>
          <br />
          <ColorChooser colorProperty="body" />
          <ColorChooser colorProperty="hemborder" />
          <ColorChooser colorProperty="cuffborder" />
          <ColorChooser colorProperty="neckline" />
        </div>
      </Provider>
    );
  }
}
