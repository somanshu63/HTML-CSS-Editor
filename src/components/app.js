import React from "react";
import CssEditor from "./cssEditor";
import HtmlEditor from "./htmlEditor";

class App extends React.Component {
  state = {
    htmlCode: "",
    cssCode: "",
  };

  preview = React.createRef();

  updateCssCode = (code) => {
    this.setState(
      {
        cssCode: code,
      },
      () => {
        this.updatePreview();
      }
    );
  };
  updateHtmlCode = (code) => {
    this.setState(
      {
        htmlCode: code,
      },
      () => {
        this.updatePreview();
      }
    );
  };

  updatePreview = () => {
    let document = this.preview.current.contentWindow.document;
    let style = document.createElement("style");
    style.innerText = this.state.cssCode;
    document.head.append(style);
    document.body.innerHTML = this.state.htmlCode;
  };

  render() {
    return (
      <div className="text-center m-9">
        <h1 className="black text-3xl font-medium">Code Editor</h1>
        <p className="text-15 m-5">
          You can write and preview <span className="text-base">HTML</span> and{" "}
          <span className="text-base">CSS!</span>
        </p>
        <div className="flex justify-center mx-4 my-8">
          <div className="w-1/2">
            <HtmlEditor
              htmlCode={this.state.htmlCode}
              updateHtmlCode={this.updateHtmlCode}
            />
            <CssEditor
              cssCode={this.state.cssCode}
              updateCssCode={this.updateCssCode}
            />
          </div>
          <div className="w-1/2">
            <div className="basic-template height-700">
              <div className="bg-gray border-radius items-center justify-between px-3 flex w-full h-8">
                <div className="flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="mr-4 text-gray-500">OUTPUT</span>
              </div>
              <iframe className="w-full h-full" ref={this.preview}></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
