import axios from 'axios'

export const getComments = (post_id, setComments) => {
    axios({
        method: 'get',
        url: 'http://localhost:8000/comments/list/' + post_id,
        headers: {
            'Content-Type': 'application/json'
          }})
      .then(function (response) {
        setComments(response.data)
      }).catch((e) => {
        
      })
}

export const creaetComment = (post_id, content, setComments, setComment) => {
    axios({
        method: 'post',
        url: 'http://localhost:8000/comments/create',
        data: {post_id: post_id, content},
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem("auth-token"),
          }})
      .then(function (response) {
        setComments((prev) => [response.data, ...prev])
        setComment('')
      }).catch((e) => {
        
      })
}

