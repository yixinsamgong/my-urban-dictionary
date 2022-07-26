import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import styled from '@emotion/styled'

function WordCard({ id, aword, setCurrentUser, currentUser, handleDelete, userword }) {
  const { name, definition, example, author, written_on } = aword

  const [tags, setTags] = useState([]);
  const history = useHistory()
  // const [tagname, setTagname] = useState([]);
  // const [posted, setPosted] = useState(false);
  // const [tagInput, setTagInput] = useState([]);
  // const [isHover, setIshover] = useState(false);
  

  useEffect(() => {
    if (!tags) return;
    fetch(`/userwords/${userword.id}/tags`)
      .then((r) => r.json())
      .then(data => setTags(data))
  }, [])

  // useEffect(() => {
  //   if (!tags) return;
  //   fetch(`/userwords/${userword.id}/tags`)
  //     .then((r) => r.json())
  //     .then(data => setTags(data))
  // }, [posted])

  //   console.log(e.key, e.target.value)
  // let tagname = e.target.value
  //   console.log({
  //     name: tagname,
  //     userword_id: aword.id})

  // console.log(tags)


  function addTag(e){
    if (e.key === "Enter"){
    fetch(`/wordtags/${userword.id}`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: e.target.value}),
    })
    .then(res => res.json())
    .then(data => {console.log(data)
      setTags([...tags, data])
      e.target.value = ''
    })
      history.push("/");

    //    .then((r) => {
    //     if (r.ok) {
    //       r.json()
    //     }})
    //     .then(data =>
    //       {
    //       setTags([...tags, data])
    //       if (e.target.value.length > 0){
    //         e.target.value = ''
    //       }
    // }
    
  }
}


    // fetch(`/userwords/${userword.id}/tags`)
    //   .then((r) => r.json())
    //   .then(data => setTags(data))
    // .then((r) => r.json())
    // .then((data) => {
    //   setTags(...tags, data)
    //   console.log(data)
    // })
    

      // fetch(`/wordtags/${userword.id}`, {
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'application/json'},
      //   body: JSON.stringify({
      //     name: tagname,
      //     // userword_id: aword.id,
      //   }),
      // })
      // .then(res => res.json())
      // .then(data => {
      //   console.log(data)
      //   setTags(...tags, data)})
      // .then((r) => {
      //   if (r.ok) {
      //     r.json()}}).then(data => 
      //     {
      //     //setTags(data)
      //     setTags([...tags, data])
      //     if (e.target.value.length > 0){
      //       e.target.value = ''
      //     }
      //     history.push("/");
        
      //   })
        // }
  



  function removeTag (removedTag) {
    // console.log(removedTag)
    fetch(`/wordtags/${removedTag.id}`, {
      method: "DELETE"
    })
    .then(r => {
      if (r.ok) {
        const newTags = tags.filter(tag => tag !== removedTag)
        setTags(newTags)
      }
    })
  }


  
  return (

    <Box>
      <div>
        <div>
      <ul>
          <div style={{ display: 'flex', justifyContent: "space-between"}}>
              <h4 style={{ fontFamily: 'Mouse Memoirs', fontSize:'25px' }}>{name}</h4>
              <Button style={{ cursor: 'pointer' }} onClick={() => handleDelete(id)}>delete</Button>
      </div>
        <Prgh>{definition.replace(/\[|\]|"/g, "")}</Prgh>
        <Prgh>{example.replace(/\[|\]|"/g, "")}</Prgh>
        <Prgh>{author}</Prgh>
        <Prgh>{written_on}</Prgh>
      </ul>
        </div>
      </div>
      <div style={app}>
        <div style={tagCon}>
          {tags.map((tag, index) => {  
            return (<div key={index} style={tagin}> 
                  <div>{tag.tag.name}<span onClick={() => removeTag(tag)} style={span}>x</span></div>
                </div>)
                })
              }
              <input style={tagIn} 
              onKeyDown={addTag}
              // onChange={(e) => setTagInput(e.target.value)}
              />
          {/* <button onClick={addTag}>hi</button> */}
       </div>
      </div>
    </Box>
 
 )
}



//STYLE

const Box = styled.div`
 transition: box-shadow 0.5s;
  width: 80%;
  align-item: center;
  margin-left: 40px;
  margin-bottom: 30px;
  border-radius: 10px;
  border-right: 0.1px #f5ffe3;
  border-bottom: 5px #f5ffe3;
  background: #f5ffe3;
  padding: 5px;
  border-color:rgba(22, 33, 33, 1);
  display: grid;
  grid-gap: 10px;
  &:hover {
     box-shadow: 5px 5px rgba(1, 138, 159, 0.5);
  }
@media (min-width: 748px) {
    width: calc(70% - 2rem);
}
}
`

const Prgh = styled.p`
  text-align: justify;
  margin-right: 30px;
  font-family: 'Roboto Condensed', sans-serif;
`
const Button = styled.button`
  padding: 10px;
  margin:10px;
  background: rgba(1,138,159, 0.6);
  font-family: 'Mouse Memoirs', sans-serif;
  font-size: 24px;
  border-radius: 4px;
  font-weight: bold;
  color: white; 
  border-color :#f5ffe3;
  border-width: 1px;
  text-decroration: none;
  cursor: pointer;
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 5px 5px rgba(22, 33, 33, 0.1);
  }
  @media screen and (max-width: 748px){
        text-align: center;
        margin-right: 0px;
        padding: 20px 0;
         &:hover {
     box-shadow: none
  }
    }
}
`
const app = {
 fontFamily: 'Arial',
 textAlign: 'center',

}

const tagCon = {
 midWidth: '50%',
  display: 'flex',
  flexWrap: "wrap",
  height: '50px', 
  minHeight: '20px', 
  margin: "30px",
  border: '1px solid gray', 
  borderRadius :'5px', 
  padding: "10px",
  boxShadow: "5px 5px rgba(22, 33, 33, 0.1)"
}

const tagin = {

  display: "flex",

  padding: "5px",
  border: '1px solid gray',
  borderRadius: '5px',
  height: '40px',
  alignItem: "center",
  backgroundColor: "#f5ffe3",
  marginRight: '5px',
  margin: '2px 5px 2px 0px',

}

const tagIn = { 
  
  border: 'none',
  flex: 1,
  backgroundColor: "#f5ffe3",
  outline: 'none', 
  padding: 5,
}

const span = {
 
  marginLeft: "5px", 
  cursor: 'pointer',
  textAlign: 'center',
  
}



export default WordCard