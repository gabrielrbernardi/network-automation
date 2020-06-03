const express = require('express')
const routes = require('../routes')
const app = express()
const fs = require('fs')
const cors = require('cors')
const exec = require('child_process').exec;
const json2yaml = 'sudo json2yaml ../ansible/json/vars.json > ../ansible/yml/vars.yml ; mkdir QUERY_VRFS_no_meu_lugar' //converte JSON->YAML & EXECUTA COMANDO ANSIBLE

module.exports = {

  

    async index (request,response) {



        const VrfParm = request.body; //declara que os parametros do tenant são do corpo da requisição
  
        fs.writeFileSync('./ansible/json/vars.json', JSON.stringify(VrfParm, undefined, 2), finished) //grava o .json recebido do front!
      
        function finished(err) {
            console.log('all set.')
        }
      
        const data = fs.readFileSync('./ansible/json/vars.json') //le o arquivo
        const vars = JSON.parse(data) //converte o arquivo "bruto" para json
      
        console.log(VrfParm) //le as informações vindas do front
      
      
        exec(json2yaml, {
            cwd: __dirname
          }, (err, stdout, stderr) => {
            console.log(stdout);
            if (err) console.log(err);
            else runCommand(cmds, cb);
          });      


          
        return response.json('Todos os dados da VRFa foram atualizados')

    },


   

}