const { Router }= require("express");
const DatUserExter_ruta = Router();
const DatUserExter = require("../modelos/DatUserExter");

DatUserExter_ruta.post("/registrarse", function(req,res){
    const datUser = req.body;
    const us = new DatUserExter(datUser)
    us.save(function(err){
        if(err){
            res.send({status:(401),msg:"No se creo el usuario externo"})
            return false;
        }
        res.send({status:(200),msg:"El usuario externo fue creado satisfactoriamente"})
    })
});