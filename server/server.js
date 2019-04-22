require("dotenv").config()
const express = require("express"),
  massive = require("massive"),
  session = require("express-session")

const app = express(),
  BoardCtrl = require("./controllers/boardCtrl"),
  AuthCtrl = require("./controllers/authCtrl"),
  StripeCtrl = require("./controllers/stripeCtrl")

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

massive(CONNECTION_STRING).then(db => {
  app.set("db", db)
  console.log("db is Working!")
  console.log(db.listTables())
})

app.use(express.json())
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
)

// app.use(express.static(`${__dirname}/../build`))

//Boards

app.get("/api/boards", BoardCtrl.getBoards)

//Cart
app.get("/api/cart", BoardCtrl.getCart)
app.post("/api/cart/:id", BoardCtrl.addToCart)
app.put("/api/cart/:id", BoardCtrl.updateQuantity)
app.delete("/api/cart/:id", BoardCtrl.deleteBoard)
app.delete("/api/cart/checkout", BoardCtrl.checkout)

//Auth
app.post("/auth/register", AuthCtrl.register)
app.post("/auth/login", AuthCtrl.login)
app.get("/auth/user-data", AuthCtrl.userData)
app.get("/auth/logout", AuthCtrl.logout)

//Stripe
// app.post("/api/charge", StripeCtrl.Credit)

app.listen(SERVER_PORT, () =>
  console.log(`When in doubt just delete it... ${SERVER_PORT}`)
)
