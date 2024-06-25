import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}  
          />
          <Routes>
            <Route  
              exact 
              path="/" 
              element={<News setProgress={this.setProgress} apiKey="your_actual_api_key_here" key="general" pageSize={6} country="in" category="general" />} 
            />
            <Route 
              exact 
              path="/business" 
              element={<News setProgress={this.setProgress} apiKey="your_actual_api_key_here" key="business" pageSize={6} country="in" category="business" />} 
            />
            <Route 
              exact 
              path="/entertainment" 
              element={<News setProgress={this.setProgress} apiKey="your_actual_api_key_here" key="entertainment" pageSize={6} country="in" category="entertainment" />} 
            />
            <Route 
              exact 
              path="/health" 
              element={<News setProgress={this.setProgress} apiKey="your_actual_api_key_here" key="health" pageSize={6} country="in" category="health" />} 
            />
            <Route 
              exact 
              path="/science" 
              element={<News setProgress={this.setProgress} apiKey="your_actual_api_key_here" key="science" pageSize={6} country="in" category="science" />} 
            />
            <Route 
              exact 
              path="/sports" 
              element={<News setProgress={this.setProgress} apiKey="your_actual_api_key_here" key="sports" pageSize={6} country="in" category="sports" />} 
            />
            <Route 
              exact 
              path="/technology" 
              element={<News setProgress={this.setProgress} apiKey="your_actual_api_key_here" key="technology" pageSize={6} country="in" category="technology" />} 
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
