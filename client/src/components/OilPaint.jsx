//this will hold the videos and information
import { useNavigate, Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from 'axios'


const OilPaint = (props) => {
  const { allComments, setallComments } = props
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:8000/api/allComments')
      .then((allComments) => {
        setallComments(allComments.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className='how-to-container'>

      <button onClick={() => navigate(`/`)}>home</button>


      <h1 className='foreground'>Oil Paint</h1>
      <p className='explain-media'>Oil paints: Pigments suspended in oil. Vibrant, versatile, slow-drying.
        Blendable, rich colors. Depth and luminosity. Layer, glaze, create textures.
          Lasting durability. Artistic expression brought to life.</p>

          <h2>Water Color Comment</h2>
          {
            allComments.map((comment) => (
              <tr key={comment._id}>
                {
                  comment.style === "OilPaint" ?
                    <>
                      <td>{comment.comment}</td>
                      <td>{comment.style}</td>
                    </>
                    :
                    null
                }
              </tr>
            ))
          }
          <Link to={`/CommentForm`}><button>Add New Comment</button></Link>
    </div>
  )
}
export default OilPaint
