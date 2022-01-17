import React, { Component } from "react";
import NavBar from "./components/NavBar";

import News from "./components/News";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_APIKEY;

  state = {
    progress: 0,
  };

  setProgress = (prog) => {
    this.setState({ progress: prog });
  };
  render() {
    return (
      <Router>
        <NavBar />
        <LoadingBar
          color="#f11946"
          height={3}
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                country="in"
                category="general"
                pageSize={this.pageSize}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                country="in"
                category="general"
                pageSize={this.pageSize}
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                country="in"
                category="technology"
                pageSize={this.pageSize}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="business"
                country="in"
                category="business"
                pageSize={this.pageSize}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                country="in"
                category="health"
                pageSize={this.pageSize}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                country="in"
                category="science"
                pageSize={this.pageSize}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                country="in"
                category="sports"
                pageSize={this.pageSize}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="entertainment"
                country="in"
                category="entertainment"
                pageSize={this.pageSize}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
