module.exports = {
  getBoards: (req, res) => {
    let db = req.app.get("db")
    db.get_boards()
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        console.log(`There was an Error...`, err)
        res.status(500).send(err)
      })
  },

  getCart: (req, res) => {
    const db = req.app.get("db")
    db.get_cart().then(cart => {
      res.status(200).send(cart)
    })
  },

  addToCart: (req, res) => {
    let db = req.app.get("db")
    let { id } = req.params
    db.get_cart()
      .then(response => {
        let index = response.findIndex(val => val.id === +id)
        if (index === -1) {
          db.add_to_cart(id).then(response => {
            res.status(200).send(response)
          })
        } else {
          let quantity = response[index].quantity + 1
          db.update_quantity(id, quantity).then(response => {
            res.status(200).send(response)
          })
        }
      })
      .catch(err => {
        console.log(`Failed to add to cart/update quantity...`, err)
        res.status(500).send(err)
      })
  },

  updateQuantity: (req, res) => {
    let db = req.app.get("db")
    let { id } = req.params
    let { quantity } = req.query
    if (quantity) {
      if (+quantity === 0) {
        db.delete_board(id).then(response => {
          res.status(200).send(response)
        })
      } else {
        db.update_quantity(id, quantity).then(response => {
          res.status(200).send(response)
        })
      }
    } else {
      res.status(500).send("Failed to update quantity...")
    }
  },

  deleteBoard: (req, res) => {
    let db = req.app.get("db")
    let { id } = req.params
    db.delete_board(id).then(response => {
      res.status(200).send(response)
    })
  },

  checkout: (req, res) => {
    let db = req.app.get("db")
    db.checkout().then(response => {
      res.status(200).send(response)
    })
  }
}
