
import  Editor from "../components/editor";
import React, {useState} from "react";


export const Posts = (props) => {
    const initValues = {
        title: '',
        post: ''
    }
    const [values, setValues] = useState(initValues);

     const handleSubmit = (e) => {
        e.preventDefault()
        console.log('hi from form')
    }

   const handleChange = (e) => {
       console.log(e.target.value)
        setValues({
            ...values,                                // spreading the unchanged values
            [e.target.name]: e.target.value,          // changing the state of *changed value*
          });
    }


    return (
      <div id='post' className='text-center'>
        <div className="container">
          <div className='col-md-8 col-md-offset-2 intro-text'>
            <h2>Blog Posts</h2>
          </div>
          <div className="about-text">
            <p>Start Writing your Posts here!</p>
            <Editor />
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                    Title:
                    <input type="text" name="title" onChange={handleChange} />
                    </label>
                    <label>
                    Post:
                    <textarea type="text" onChange={handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
          </div>
        </div>
      </div>
    )
  }