import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";

class CssEditor extends React.Component {
  render() {
    return (
      <div className="basic-template">
        <div className="bg-gray border-radius items-center justify-between px-3 flex w-full h-8">
          <div className="flex justify-center space-x-2 ">
            <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="mr-4 text-gray-500">CSS</span>
        </div>
        <CodeMirror
          value={this.props.cssCode}
          height="300px"
          width="100%"
          onChange={this.props.updateCssCode}
          extensions={[css()]}
          className=" text-left text-base"
        />
      </div>
    );
  }
}
export default CssEditor;
