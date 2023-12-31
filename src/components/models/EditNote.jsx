/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import ReactQuill from "react-quill";
import { Button } from 'antd';
import "react-quill/dist/quill.snow.css";

const EditNote=(title) =>{
  const [value, setValue] = useState(`
  ${title}
  `);
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "strike", "underline", "blockquote"],
      [
        { list: "ordered" },
        { list: "unordered" },
        { indent: "+1" },
        { indent: "-1" },
      ],
      ["link", "image", "video"],
    ],
  
  };
  return (
    <div className='flex flex-col'>
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={modules}
      className="h-[250px]"
    />
     <div className="flex mt-16 gap-6 items-center">
          <Button type='button' className="ant-btn css-19bti2s  text-sm border border-red-300">
            <span>Cancel</span>
          </Button>
          <Button type='button' className="ant-btn css-19bti2s  px-8 bg-primary text-white hover:text-white text-sm">
            <span>Save</span>
          </Button>
        </div>
    </div>
  );
}
export default EditNote