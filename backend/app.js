const { equal } = require('assert');
const express = require('express'); //import express
//importation de mongoose
const mongoose = require('mongoose');
//permet de séparer chaque attribut valeur
const bodyParser = require('body-parser');  //hadhi takhedh kol valeur ml objet wa7do w tparsi 3lih
const bcrypt = require('bcrypt');

//omportation de model user
const User = require('./models/user');

//omportation de model plat
const Plat = require('./models/plat');

//creation d'une application
const app = express();
//prepare response to JSON to send to FE
app.use(bodyParser.json());
//Parse getted body from FE to JSON object
app.use(bodyParser.urlencoded({extented:true}))

//connect to database
mongoose.connect('mongodb://localhost:27017/fullStackJuillet',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//     mongoose.connect('mongodb://localhost:27017/fullStackJuillet', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

//traitement logique

//CRUD ADMIN
//http://localhost:3000
//http://localhost:3000/admins
app.get('/admins', (req, res) => { //request response 
    console.log('here into get all admins');
    User.find()  
});

//http://localhost:3000/admins/5

app.get('/admins/:id', (req, res) => {
    console.log('here into Get user by id');
    User.findOne({_id:req.params.id}).then(
        (result)=>{
            if(result){
                res.status(200).json({
                    findedUser: result
                  });
            }
        }
    )
});

app.delete('/admins/:id', (req, res) => {
    console.log('here into delete admin');
    console.log(req.params.id);
    User.deleteOne({_id:req.params.id}).then(
        ()=>{
            res.status(200).json({
                message: 'admin deleted with success'
            });
        }
    ) //_id hadhi ml BE  req.params.id FE
});

app.post('/admins', (req, res) => {
    console.log('here into add admin');
    bcrypt.hash(req.body.pwd, 8).then(
        (cryptedPwd)=>{
            const user = new User({
                firstName:req.body.firstName ,  
                //firstName: partie backend req.body.firstName :hadhi partie frontend ma3nha jebto ml frontend 
                lastName:req.body.lastName,
                email:req.body.email,
                pwd: cryptedPwd,
                phone:req.body.phone,
                role:req.body.role,
        
            })
            user.save().then(
                (result)=>{
                    if(result){
                        res.status(200).json({
                            findedUser: result
                          });
                    }
                }
        
            );  //.then retour mt3 save 
        }
    )
   
    console.log(req.body);

});

app.put('/admins/:id', (req, res) => {
    console.log('here into edit admin');
    console.log(req.body._id);
    const admin = new User({
        _id:req.body._id,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        pwd:req.body.pwd,
        phone:req.body.phone,
        role:req.body.role,
    })
    User.updateOne({_id:req.params.id},admin).then(
       (result)=>{
           if (result) {
            res.status(200).json({
                message:'updated admin with success'
            });
           }
           
       }
    );
});


//CRUD USER
//http://localhost:3000
//http://localhost:3000/admins
app.get('/users', (req, res) => { //request response 
    console.log('here into get all users');
    User.find((err,docs)=>{
        if(err){
          console.log('prblm connexion with DB');
        }else{
          res.status(200).json({
              findedUser: docs
          });
        }
    })
});

//http://localhost:3000/admins/5

app.get('/users/:id', (req, res) => {
    console.log('here into Get user by id');
    
});

app.delete('/users/:id', (req, res) => {
    console.log('here into delete user');
});

app.post('/users', (req, res) => {
    console.log('here into add user');
    const user = new User({
        firstName:req.body.firstName ,  
        //firstName: partie backend req.body.firstName :hadhi partie frontend ma3nha jebto ml frontend 
        lastName:req.body.lastName,
        email:req.body.email,
        pwd:req.body.pwd,
        phone:req.body.phone,
        role:req.body.role,

    })
    console.log(req.body);
    user.save().then(
        (result)=>{
            res.status(200).json({
                message : 'user added successfully'
            });
        }

    );  //.then retour mt3 save 
});

app.put('/users/:id', (req, res) => {
    console.log('here into edit user');
});



//CRUD CHEF

app.get('/chefs', (req, res) => {
    console.log('here into all chefs');
});

app.get('/chefs/:id', (req, res) => {
    console.log('here into all chefs by ID');
});

app.post('/chefs', (req, res) => {
    console.log('here into add chef');
    const user = new User({
        firstName:req.body.firstName ,  
        lastName:req.body.lastName,
        email:req.body.email,
        pwd:req.body.pwd,
        phone:req.body.phone,
        specialite:req.body.specialite,
        experience:req.body.experience,
        role:req.body.role,

    })
    console.log(req.body);
    user.save().then(
        (result)=>{
            res.status(200).json({
                message: 'chef added with success'
            });
        }
    );
});

app.put('/chefs/:id', (req, res) => {
    console.log('here into edit chef');
});

app.delete('/chefs/:id', (req, res) => {
    console.log('here into delete chef');
});

//CRUD PLAT

app.get('/plats', (req, res) => {
    console.log('here into all plats');
    Plat.find((err,docs)=>{
        if(err){
          console.log('prblm connexion with DB');
        }else{
          res.status(200).json({
              plats: docs
          });
        }
    })
});

app.get('/plats/:id', (req, res) => {
    console.log('here into all plats by ID');
    console.log(req.params.id);
    Plat.findOne({_id:req.params.id}).then(
        (result)=>{
            if(result){
                res.status(200).json({
                    findedPlat: result
                  });
            }
        }
    );
});

app.post('/plats', (req, res) => {
    console.log('here into add plat');
    const plat = new Plat({
        platName:req.body.platName ,  
        price:req.body.price,
        desc:req.body.desc,
    })
    console.log(req.body);
    plat.save().then(
        (result)=>{
            res.status(200).json({
                message: 'plat added with success'
            });
        }
    );
});

app.put('/plats/:id', (req, res) => {
    console.log('here into edit plat');
    let plat = new Plat({
        _id:req.body._id,
        name:req.body.name,
        price:req.body.price,
        desc:req.body.desc,
    })
    Plat.updateOne({_id:req.params.id}, plat).then(
        (result)=>{
            if (result) {
             res.status(200).json({
                 updatedPlat: result
             });
            } else{
                console.log('ERREUR de CNX a la BD');
            }
            
        }
     );
});

app.delete('/plats/:id', (req, res) => {
    console.log('here into delete plat');
    console.log(req.params.id);
    Plat.deleteOne({_id:req.params.id}).then(
        ()=>{
            res.status(200).json({
                message: 'plat deleted with success'
            });
        }
    ) //_id hadhi ml BE  req.params.id FE
});
module.exports = app;