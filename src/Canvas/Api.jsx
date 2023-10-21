import axios from 'axios'

export const uploadPost = (file, title) => {
    axios.post('http://localhost:8000/posts/create', {file: file}, {
        data: {
            title: title
        },
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': 'Bearer '+ localStorage.getItem("auth-token"),
        }
      }
    ).then(function (response) {
        console.log(response)
      }).catch((e) => {
            console.log(e)
        })
      }
