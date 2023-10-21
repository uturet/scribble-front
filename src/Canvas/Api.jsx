import axios from 'axios'

export const uploadFile = (file, title, setMessage) => {
    axios.post('http://localhost:8000/posts/upload-file', {file: file}, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': 'Bearer '+ localStorage.getItem("auth-token"),
        }
      }
    ).then((response) => {
        uploadPost(title, response.data, setMessage)
      })
    .catch((e) => {
        setMessage(e.message)
    })
}

export const uploadPost = (title, filename, setMessage) => {
    fetch('http://localhost:8000/posts/create', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer '+ localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({title: title, img: filename})
    }).then((response) => {
        setMessage('Created!')
      })
    .catch((e) => {
        setMessage(e.message)
    })
}
