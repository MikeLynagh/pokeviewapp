const Book = require("../model/Book")

// code taken from https://www.youtube.com/watch?v=5Y5QKfxTErU
// I modelled this code from the above youtub tutorial

const getAllBooks = async(req,res,next) => {
    let books;
    try {
        books = await Book.find()
    } catch (err) {
        console.log(err)
    }

    if (!books) {
        return res.status(404).json({message: "Nothing found"})
    }

    return res.status(200).json({books})

}

const getById = async (req,res,next) => {
    const id = req.params.id
    let book;
    try {
        book = await Book.findById(id)
    } catch (err){
        console.log(err)
    } if (!book) {
        return res.status(404).json({message: "no product found"})
    }
    return res.status(200).json({ book })
}

const addBook = async (req,res,next) => {
    const { name, description, number, image } = req.body
    let book;
    try {
        book = new Book({
            name,
            description, 
            number, 
            image
        })
        await book.save()
    }catch (err) {
        console.log(err)
    }
    if (!book) {
        return res.status(500).json({message: "Unable to add "})
    }
    return res.status(201).json({ book })
}

const updateBook = async (req,res,next) => {
    const id = req.params.id
    const { name, description, number, image } = req.body
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            description, 
            number, 
            image
        })
        book = await book.save()
    }catch (err) {
        console.log(err)
    }
    if (!book) {
        return res.status(404).json({message: "Unable to update"})
    }
    return res.status(200).json({ book })
}

const deleteBook = async (req,res,next) => {
    const id = req.params.id
    let book;
    try {
        book = await Book.findByIdAndRemove(id)
    }catch (err) {
        console.log(err)
    }
    if (!book) {
        return res.status(404).json({message: "Unable to delete"})
    }
    return res.status(200).json({ message: "Product deleted" })
}



exports.getAllBooks = getAllBooks
exports.addBook = addBook
exports.getById = getById
exports.updateBook = updateBook
exports.deleteBook = deleteBook