import React, { Component } from 'react';
import "dropify/dist/js/dropify.js"
import "dropify/dist/css/dropify.css"
import $ from "jquery"

class fileUpload extends Component {
    componentDidMount(){
        $('.dropify').dropify();
    }
    render() {
        return (
            <div>
                <input name="file" type="file" className="dropify" data-height="100" />
            </div>
        );
    }
}

export default fileUpload;