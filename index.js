const fs = require('fs');
const soap = require('soap');
const https = require('https');

const url = 'https://webservices.producaorestrita.esocial.gov.br/servicos/empregador/enviarloteeventos/WsEnviarLoteEventos.svc?wsdl';
const buffer = fs.readFileSync('./certs/cert1.p12')

const httpsAgent = new https.Agent({
  pfx: buffer,
  passphrase: 'senha',
  rejectUnauthorized: false,
});

soap.createClient(url, {wsdl_options: {httpsAgent}}, (err, client)=>{
  if(err){
    console.log(err)
  } else {
    // client.EnviarLoteEventos({
    // })
    console.log('ok')
  }
})