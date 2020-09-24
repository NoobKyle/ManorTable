//Import libraries
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();

//Initialize Firebase
var serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://manortable.firebaseio.com"
});

//Cloud Firestore
const database = admin.firestore();
let db = database.collection('users');

//MIDDLEWARE
app.use(cors({ origin: true }));

//ROUTES
// Get all users
app.get('/users', (req, res) => {
    var allUsers = [];

    db.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                allUsers.push({
                    "docID": doc.id,
                    "userData": doc.data()
                })
            })

            // send back json data
            res.send(allUsers);
            res.sendStatus(200);
        })
        .catch(err => {
            res.sendStatus(500);
        })
      })


// Get :id user
app.get('/:id', (req, res)=> {
    var wanted = req.params.id;
    var moc = [];

    db.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                if(doc.id == wanted){
                    moc.push({
                        "docId": doc.id,
                        "userData": doc.data()
                    })
                }
            })
            res.send(moc);
            res.sendStatus(200);
        })
        .catch(err => {
            res.sendStatus(500);
        })
      })


// Add user
app.post('/add', (req, res) => {
    var data = req.body;
    var docName = data.Name;

    db.doc(docName).set(data)
        .catch(err => {
            res.sendStatus(500);
        })

    res.sendStatus(200);
})

// Update user
app.post('/update/:id', (req, res) => {
    var update = req.params.id;
    var data = req.body;

    db.doc(update).set(data)
        .catch(err => {
            res.sendStatus(500);
        })

    res.sendStatus(200);
})


// Delete user
app.delete('/delete/:id', (req, res) => {
    var del = req.params.id;

    db.doc(del).delete()
        .catch(err => {
            res.sendStatus(500);
        })

    res.sendStatus(200);
})

//Default export
exports.app = functions.https.onRequest(app);
