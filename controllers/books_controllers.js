//Quick End Points Links for Your Convenience 
// Home: http://localhost:3000
// Index: http://localhost:3000/books

// Individual Books
// The Shinobi Initiative
    // http://localhost:3000/books/62bdcad652904f5df6e5e4a5

// Tess the Wonder Dog
    // http://localhost:3000/books/62bdcad652904f5df6e5e4a6

// The Annals of Arathrae
    // http://localhost:3000/books/62bdcad652904f5df6e5e4a7
// Wâˆ€RP
    // http://localhost:3000/books/62bdcad652904f5df6e5e4a8

// DEPENDENCIES
// Create Express Router
const books = require('express').Router();
// Require book model
const Book = require('../models/book.js');

// SEED
books.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

// ROUTES
// INDEX -- list books
books.get('/', (req, res) => {
    // Finds all books
    Book.find()
    .then( (foundBooks) => {
        // returns foundBooks as json
        res.json(foundBooks)
    })
    //error handling
    .catch(err => {
        console.log(err)
        res.status(404).send('<h1>404 NOT FOUND, GOSH, GIVE IT A REST</h1>')
    })
});

// SHOW --show specific book
books.get('/:id', (req, res) => {
    Book.findById(req.params.id)
    // shows book
    .then( foundBook => {
        //sends info as json
        res.json(foundBook)
    })
    //catches error
    .catch(err => {
        console.log(err)
        res.status(404).send('<h1>404 NOT FOUND, GOSH, GIVE IT A REST</h1>')
    })
})

// CREATE BOOK
books.post('/', (req, res) => {
    //create book
    Book.create(req.body)
    .then( (createdBook) => {
        //shows data for created book
        res.json(createdBook)
    })
    //catches error
    .catch(err => {
        console.log(err)
        res.status(404).send('<h1>404 NOT CREATED, GOSH, GIVE IT A REST</h1>')
    })
})


// DELETE BOOK
books.delete('/:id', (req, res) => {
    //delete book
    Book.findByIdAndDelete(req.params.id)
    .then(deletedBook => {
        res.send(`Delete was successful. Hope you didn't need that.`)
    })
    //catches error
    .catch(err => {
        console.log(err)
        res.status(404).send('<h1>404 NOT DELETED, GOSH, GIVE IT A REST</h1>')
    })
})


// UPDATE BOOK
books.put('/:id', (req, res) => {
    //update book
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.send(`/books/${req.params.id}`)
    })
    //catches error
    .catch(err => {
        console.log(err)
        res.status(404).send('<h1>404 NOT UPDATED, GOSH, GIVE IT A REST</h1>')
    })
})


//export books router
module.exports = books