import axios from 'axios'


export const getFeed = (page, setFeed, setPage) => {
    axios({
        method: 'get',
        url: 'http://localhost:8000/feed?page=' + page,
        headers: {
            'Content-Type': 'application/json'
          }})
      .then(function (response) {
        setFeed((prev) => [...prev, ...response.data])
        setPage((prev) => prev+1)
      }).catch((e) => {
        
      })
}