/* app.js */

// require and instantiate express
const app = require('express')()

// fake posts to simulate a database
const posts = [
  {
    id: 1,
    author: 'Cow',
    title: 'Mooooo...',
    body: "zzzzz..."
  },
  {
    id: 2,
    author: 'Snake',
    title: 'ssssss....',
    body: 'ssss...sssss....s'
  },
  {
    id: 3,
    author: 'Dog',
    title: 'Woof!',
    body: 'Grrrr...'
  },
  {
    id: 4,
    author: 'Cat',
    title: 'Meow!',
    body: 'Purrr...'
  }
]

// set the view engine to ejs
app.set('view engine', 'ejs')

// blog home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('home', { posts: posts })
})

// blog post
app.get('/post/:id', (req, res) => {
  // find the post in the `posts` array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  // render the `post.ejs` template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
})

app.listen(8080)

console.log('listening on port 8080')