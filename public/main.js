var likes = document.getElementsByClassName("likes");
var submitComments = document.querySelectorAll('.comments')

Array.from(likes).forEach(function(element) {
      element.addEventListener('click', function(e){
        const likesAmount = parseInt(this.parentNode.parentNode.childNodes[6].innerText)
        const postId = e.target.dataset.id
        
        fetch('feed', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'postId': postId,
            'likesAmount': likesAmount
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(submitComments).forEach(function(element) {
  element.addEventListener('click', function(e){
  let comments = this.parentNode.childNodes[8].childNodes[3].value
  let posterID = e.target.dataset.posterid
    
    fetch('comments', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'posterID': posterID,
        'comments': comments
        
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

