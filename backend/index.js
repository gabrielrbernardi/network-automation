const express = require('express')
const app = express()
const fs = require('fs')
const exec = require('child_process').exec;
const json2yaml = 'sudo json2yaml ./ansible/json/vars.json > ./ansible/yml/vars.yml ; sudo touch ./ansible/teste' //converte JSON->YAML & EXECUTA COMANDO ANSIBLE


app.use(express.json())


app.post('/tenant', (request, response) => {

    
    const TenantParm = request.body; //declara que os parametros do tenant são do corpo da requisição

    fs.writeFileSync('./ansible/json/vars.json', JSON.stringify(TenantParm, undefined, 2), finished) //grava o .json recebido do front!

    function finished(err) {
        console.log('all set.')
    }

    const data = fs.readFileSync('./ansible/json/vars.json') //le o arquivo
    const vars = JSON.parse(data) //converte o arquivo "bruto" para json

    console.log(TenantParm) //le as informações vindas do front


    exec(json2yaml, {
        cwd: __dirname
      }, (err, stdout, stderr) => {
        console.log(stdout);
        if (err) console.log(err);
        else runCommand(cmds, cb);
      });
   

   
    return response.json('Todos os dados foram atualizados') //retorna os dados atuais do arquivo do ansible

    


})



app.listen(3333)