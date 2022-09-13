import React from "react";
import { Button } from 'react-bootstrap';
import { useState, useEffect } from "react";

export default function AddLink() {
  const [link, setLink] = useState([]);

  const [inputTags, setTagsValue] = useState("");
  const [inputLink, setLinkValue] = useState("");
  
  // const [searchWord, setSearchWord] = useState([]);
  useEffect(() => {
    localStorage.setItem("link", JSON.stringify(link));
  }, [link]);


  const handleTag = () => {
    setLink((prevValue) => [
      ...prevValue,
      { tag: inputTags, link: inputLink },
    ]);
    setTagsValue("");
    setLinkValue("");
  }

  const deleteItem = (index)=>{
    setLink((prevValue)=>{
      let copyData= [...prevValue];
      copyData.splice(index,1)
      return copyData;
    })
  }

  // const filteredLink = inputLink.filter((link) => {
  //   return link.name.toLowerCase().includes(searchWord); 
  // });

  return (
    <div>
      <h1>Add Link</h1>
      <input className="inputTag"
        type="text"
        placeholder="type tags."
        onChange={(event) => {
          setTagsValue(event.target.value);
        }}
        value={inputTags}
      />
      <input className="inputTag"
        type="text"
        placeholder="type link.."
        onChange={(event) => {
          setLinkValue(event.target.value);
        }}
        value={inputLink}
      />
      <Button variant="dark"
        onClick={handleTag}
      >
        Done
      </Button>
      
      {/* <input type ="text" placeholder="search link.." onChange={(event)=>{
          setSearchWord((event.target.value))
        }}/> */}

      {link.map((object, index) => (
        <div className="card" key={index}>
          <p>
            Tag: {object.tag} 
          </p>
          <p>
         Link: {object.link}
          </p>
          <Button variant="dark" onClick={()=> deleteItem(index)}>Delete</Button> 
        </div>
      ))}
    </div>
  );
}
