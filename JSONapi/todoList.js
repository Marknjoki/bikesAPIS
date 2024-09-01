//new item
//retrieve all items
//update item
//delete item
//get item by id 

const fs = require('fs')
const items = JSON.parse(fs.readFileSync('./items/items.json'))

//check if item is present
exports.checkId = (req, res, next, value) => {
    let item = items.find(el => { return el.id === Number(value) })
    if (!item) {
        return res.status(404).json({
            status: 'failed',
            message: `item with id ${value} not found`
        })
    }
    next()
}
//get all items
exports.getAllItems = (req, res) => {
    res.status(200).json({
        status: 'success',
        items: items
    })

}

//add items
exports.addItem = (req, res) => {
    let newID = (items.length - 1) + 1
    let newItem = Object.assign({ id: newID }, req.body)

    items.push(newItem)


    fs.writeFileSync('./items/items.json', JSON.stringify(items))
    res.status(201).json({
        status: 'success',
        data: {
            item: newItem
        }
    })
}
//get item by Id
exports.getItemById = (req, res) => {
    let id = Number(req.params.id)
    const item_id = items.find(el => { return el.id === id })

    res.status(200).json({
        status: 'success',
        data: {
            item: item_id
        }
    })
}

//update item by id
exports.updateItem = (req, res) => {
    let id = Number(req.params.id)

    let item = items.find(el => { return el.id === id })

    let index = items.indexOf(item)
    items[index] = Object.assign(item, req.body)

    fs.writeFileSync('./items/items.json', JSON.stringify(items))
    res.status(201).json({
        status: 'success',
        data: {
            item: item
        }
    })

}