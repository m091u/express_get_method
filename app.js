// app.js
const express = require("express");
const app = express();
const hbs = require("hbs");
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/user-data", (req, res) => {
  console.log(req.query);
  // res.render("index")
});
  
app.post("/user-data", (req, res) => {
    console.log(req.body);
    // res.render("index")
  });

  /* app.js */
app.get('/get-user-info', (req, res) => {
    res.render('user-info-form');
  });

  app.get('/display-user-info', (req, res) => {
    // ... some code goes here
  });
  
// app.get("/search", (req, res) => {
//   console.log(req.query);
//   res.render("index");
// });

// const users =[
//     {name: "Bob", age: 12, _id: "1"},
//     {name: "Joe", age: 20, _id: "2"}
// ]

// app.get("/users", (req, res) => {
// /:something => req.para,
// /something?limit=5 => req.query
// const limit = req.query.limit;
// const sort = req.query.sort;

// const {limit, sort} = req.query;

// console.log(sort);
// if (sort){
//     res.send(users.sort((a,b) => a.age -b.age));
//     return;
// }
// console.log(limit);
// res.send(users.splice(0, limit));
// });

// app.get ("/users/:userID", (req, res)=> {
//     // const userID= req.params.userID;
//     const {userID} = req.params;
//     const foundUser = users.find((user)=> user.id === Number(user.id));
//     // console.log(userID);
//     res.send(foundUser);
// })

app.get ("/login", (req, res)=> {
    res.render("login");
})


app.listen(3000, (error) => {
  error ? console.error(error) : console.log("App listening on port 3000!");
});
