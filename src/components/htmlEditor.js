import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";

class HtmlEditor extends React.Component {
  render() {
    return (
      <div className="basic-template mb-8 ">
        <div className="bg-gray border-radius items-center justify-between px-3 flex w-full h-8">
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="mr-4 text-gray-500">HTML</span>
        </div>
        <CodeMirror
          value={this.props.htmlCode}
          height="300px"
          onChange={this.props.updateHtmlCode}
          extensions={[html()]}
          className=" text-left text-base"
        />
      </div>
    );
  }
}
export default HtmlEditor;
