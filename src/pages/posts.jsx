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
        console.log('hi from form' , e)
    }

   const handleChange = (e) => {
       console.log(e.target.value)
        setValues({
            ...values,                                // spreading the unchanged values
            [e.target.name]: e.target.value,          // changing the state of *changed value*
          });
    }


    return (
      <div id='post'>
        <div className="container">
          <div className="row">
          <div className='col-xs-12 col-md-6'>
            <h2>Blog Posts</h2>
          </div>
          <p>Start Writing your Posts here!</p>
          <div className="about-text">
                <form  className="form-horizontal" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-control col-sm-2">
                        Title:
                        <input type="text" name="title" onChange={handleChange} />
                        </label>
                    </div>
                </form>
            <div className="RichEditor-root">
            <Editor />
            </div>
            <button className="btn btn-dark" type="submit" value="Submit">Submit</button>
            {/*<div>
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
            </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }