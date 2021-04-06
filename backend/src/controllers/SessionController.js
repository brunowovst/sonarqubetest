const connection = require("../database/connection");
const generateToken = require('../utils/generateToken');

module.exports = {
    async create(req,res){
        const {id} = req.body;
        const ong = await connection('ongs').where('id',id).select('name').first()
        
        if(!ong){
            return res.status(400).json({error:"No Ong found whit this id"})
        }
        
        return res.json({ong,token:generateToken(id)});
    }
}