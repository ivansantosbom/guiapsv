// server.js

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { WebhookClient } = require("dialogflow-fulfillment");
const axios = require("axios");
// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// https://expressjs.com/en/starter/basic-routing.html
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.post("/guiapsv", function(request, response) {
  const agent = new WebhookClient({
    request: request,
    response: response
  });
 
  let intentMap = new Map();
  intentMap.set("insere", cadastro);
  intentMap.set("excluir", exclui);
  intentMap.set("grupo", pesquisa);

  agent.handleRequest(intentMap);

async function exclui(agent) {
const { GoogleSpreadsheet } = require('google-spreadsheet');
var Senha = request.body.queryResult.parameters["senha"];
typeof Senha === 'string';
const credenciais = {
  "type": "service_account",
  "project_id": "hiu-upjn",
  "private_key_id": "452253436622066a644724387e5cd009d3cb57c2",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMwQLzJR8ohst7\nb54nr9Q+Q0jl3Ijfd7X67BlF3kdhKwm3h8zX6MkazzoblKdgl0pfAZmppTnhi1Ja\nUtqrSMJGUH7Ha4ao5wRlhEQU5lYUAKstnxEALi8PPRgXiBX0Me8mhZdVNigLSeFP\ntXRwz5CAoOtFtnPvgSeJ/oXBf2hk6lwgz1Zog9WXZBT7qNtUSUmV6FWlQu/QRr3r\nuMrQQvb8Clf5WODXuxzcL7bRcyc5/3RoTjfoE06Wx5a4T39fFpfaAAn9Wgr69bQN\nV47kCTLjGl7R1JS2tWg8jT4gt9XrF2P/w14YWSpHVzp2udlB5VmJuo5710y8KYdV\nYgD/T70pAgMBAAECggEADBTbcrNfCkoh2Y+1ekwCrwXTWFTR8rWilEK4HwpFlfMv\nKJgnuxmuPBm8KQJ1edqTddWnVn48UxWgb1nyMycg53s6b9PlZzPya3cJeV45+AYu\nE4wOOb9/4VtOf5z1BqqnnNNHIa0HYdsjI0vmqf1lXmGgYEWqw5gQWDEffVJiO4oJ\njsFVDfJObrjvubaOfZGYKgTFB0lhfqrgj6WxVTih0BD8/PfK9WUPSQ+hV6eVsyDu\nT2YiGsEx9SaoqBETOJz4AuhoIG+g19JHbTedEBHupyWpY04VBze/ijlUY+PwIwAh\nyl67PWWNZWRyAJf4y5owPCatxNYUlDWHiynEc2QhbQKBgQDmUyo4507f6VrKi2il\n0+KhwZ54Q/eo/OOh7fITuS9ggSV9L0bKlUfrxpNk9gHqNaqkiD8VDrUDZ4UPR7bB\nVFH409IufvisTz5ScYMMpxQu52AV+avjJAzt3l+Dkc7uh01kKUKF/0tGfjXjN1+m\nHrAtaWRfVGZS0CHp/2cwY60SuwKBgQDjlB+ZnQ2+VW9G8/j2iTM8JUHI/II89WPS\nihsffr/5NLvfXDDxCsYH1UTGayuBShDLWgnfdrVu+f5J0x8ti6YxiRjvfzDkXg3j\nyylLPvGGdeoL4BJtkHz/9rb9RkPtv8p6Axad9vlyhOMm2hD0mwhuXwjuxb0DkXWX\nVPdU7wKrawKBgQDQ/u31LI75xvnHiLCwqI+hT9vILYRxJug3a36aPxOqcgXejiOi\nd8sHOu1MU55xM7lgCvGS3gGK0UiAEQbYbvbi3vJ9lmF3mYBntvC/bmx2EyWxSxiZ\nx4Cj54CsFoa7ErM7C+V9Saa4lJW5U+nLB1W+H0Ag8KjYxFvBxSuRUSEfOQKBgHAM\nPt64B8s9bzNE7cAcXwBu64vUXx86RnKjkqUYF9bP0uwvDN2wyz2SEHGM1HesisZE\nR3YhkUTZiwy4CLK4/hOHh6JrQhw9/qK4JVWp4Oqt5ZUBNrGBITo5M3FSBiHpevxF\nxv3xWnG64cgAN7bnGeiVm+VLsDswg/AFYl0L7ImPAoGAcmmHT6+muQgkwpLKDX6I\nL/Gx4lUUYx7+zKBSlfUxUwqEnlCiKohd1DOk+x4xHXn1gGU4/AmdbbIe+3bGtwmO\n0aPluM1+5nVkqrH3GEt9iOzhquXay5UreYSfWd2Z4Ew5/hK4FS8jaJWHIt7LQoxG\nYtqrnrnSYWLJN1qGZ9vx264=\n-----END PRIVATE KEY-----\n",
  "client_email": "dialogflow@hiu-upjn.iam.gserviceaccount.com",
  "client_id": "101971212035569721794",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/dialogflow%40hiu-upjn.iam.gserviceaccount.com"
}

const getDoc = async () => {
    const doc = new GoogleSpreadsheet("1miAwy9g53saRiR1uxURkoWl_PbmE1yAgtRX3o88El9c");
    
    await doc.useServiceAccountAuth({
        client_email: credenciais.client_email,
        private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
}
getDoc().then(doc => {
     console.log(doc.title);
});
let sheet; 
getDoc().then(doc => {
    sheet = doc.sheetsByIndex[0];
    sheet.getRows().then(rows => {
        rows.map(row => {
            if(row.Senha === Senha){
                row.delete().then(() => {
                    console.log('Dado deletado!');
response.json({
"fulfillmentText": "_O seu anúncio foi excluído com sucesso !_" + "\n\n" +
                "_Para Inserir Seu Produto ou Serviço Fale Comigo No Privado_"
            }); 

  
                });
            }
          else if (row.Senha ===! Senha){
response.json({
"fulfillmentText": "_Senha Inválida !_"                
            }); 
          }
        });
    })
})
}  
  
  //FUNÇÃO DE CADASTRO DE LEADS
async function cadastro(agent) {
const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = {
  "type": "service_account",
  "project_id": "hiu-upjn",
  "private_key_id": "452253436622066a644724387e5cd009d3cb57c2",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMwQLzJR8ohst7\nb54nr9Q+Q0jl3Ijfd7X67BlF3kdhKwm3h8zX6MkazzoblKdgl0pfAZmppTnhi1Ja\nUtqrSMJGUH7Ha4ao5wRlhEQU5lYUAKstnxEALi8PPRgXiBX0Me8mhZdVNigLSeFP\ntXRwz5CAoOtFtnPvgSeJ/oXBf2hk6lwgz1Zog9WXZBT7qNtUSUmV6FWlQu/QRr3r\nuMrQQvb8Clf5WODXuxzcL7bRcyc5/3RoTjfoE06Wx5a4T39fFpfaAAn9Wgr69bQN\nV47kCTLjGl7R1JS2tWg8jT4gt9XrF2P/w14YWSpHVzp2udlB5VmJuo5710y8KYdV\nYgD/T70pAgMBAAECggEADBTbcrNfCkoh2Y+1ekwCrwXTWFTR8rWilEK4HwpFlfMv\nKJgnuxmuPBm8KQJ1edqTddWnVn48UxWgb1nyMycg53s6b9PlZzPya3cJeV45+AYu\nE4wOOb9/4VtOf5z1BqqnnNNHIa0HYdsjI0vmqf1lXmGgYEWqw5gQWDEffVJiO4oJ\njsFVDfJObrjvubaOfZGYKgTFB0lhfqrgj6WxVTih0BD8/PfK9WUPSQ+hV6eVsyDu\nT2YiGsEx9SaoqBETOJz4AuhoIG+g19JHbTedEBHupyWpY04VBze/ijlUY+PwIwAh\nyl67PWWNZWRyAJf4y5owPCatxNYUlDWHiynEc2QhbQKBgQDmUyo4507f6VrKi2il\n0+KhwZ54Q/eo/OOh7fITuS9ggSV9L0bKlUfrxpNk9gHqNaqkiD8VDrUDZ4UPR7bB\nVFH409IufvisTz5ScYMMpxQu52AV+avjJAzt3l+Dkc7uh01kKUKF/0tGfjXjN1+m\nHrAtaWRfVGZS0CHp/2cwY60SuwKBgQDjlB+ZnQ2+VW9G8/j2iTM8JUHI/II89WPS\nihsffr/5NLvfXDDxCsYH1UTGayuBShDLWgnfdrVu+f5J0x8ti6YxiRjvfzDkXg3j\nyylLPvGGdeoL4BJtkHz/9rb9RkPtv8p6Axad9vlyhOMm2hD0mwhuXwjuxb0DkXWX\nVPdU7wKrawKBgQDQ/u31LI75xvnHiLCwqI+hT9vILYRxJug3a36aPxOqcgXejiOi\nd8sHOu1MU55xM7lgCvGS3gGK0UiAEQbYbvbi3vJ9lmF3mYBntvC/bmx2EyWxSxiZ\nx4Cj54CsFoa7ErM7C+V9Saa4lJW5U+nLB1W+H0Ag8KjYxFvBxSuRUSEfOQKBgHAM\nPt64B8s9bzNE7cAcXwBu64vUXx86RnKjkqUYF9bP0uwvDN2wyz2SEHGM1HesisZE\nR3YhkUTZiwy4CLK4/hOHh6JrQhw9/qK4JVWp4Oqt5ZUBNrGBITo5M3FSBiHpevxF\nxv3xWnG64cgAN7bnGeiVm+VLsDswg/AFYl0L7ImPAoGAcmmHT6+muQgkwpLKDX6I\nL/Gx4lUUYx7+zKBSlfUxUwqEnlCiKohd1DOk+x4xHXn1gGU4/AmdbbIe+3bGtwmO\n0aPluM1+5nVkqrH3GEt9iOzhquXay5UreYSfWd2Z4Ew5/hK4FS8jaJWHIt7LQoxG\nYtqrnrnSYWLJN1qGZ9vx264=\n-----END PRIVATE KEY-----\n",
  "client_email": "dialogflow@hiu-upjn.iam.gserviceaccount.com",
  "client_id": "101971212035569721794",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/dialogflow%40hiu-upjn.iam.gserviceaccount.com"
}

const getDoc = async () => {
    const doc = new GoogleSpreadsheet("1miAwy9g53saRiR1uxURkoWl_PbmE1yAgtRX3o88El9c");
    
    await doc.useServiceAccountAuth({
        client_email: credenciais.client_email,
        private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
}
getDoc().then(doc => {
     console.log(doc.title);
});
  //({
 //client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
 // private_key: process.env.GOOGLE_PRIVATE_KEY,
//});

    
    const { nome, desc, ctt, cat, subcat, nnn } = agent.parameters;
   // const data = [
   //   {
   //     Nome: nome,
   //     Desc: desc,
   //     Zap: ctt,
   //     Cat: cat,
   //     Subcat: subcat
   //   }
   // ];
  var desc2 = desc.toLowerCase();
  var desc2 = desc2.replace(".", " ");
  var desc2 = " " + desc2 + " ";
  let sheet; 
getDoc().then(doc => {
    sheet = doc.sheetsByIndex[0];
sheet.addRow({
        Nome: nome,
        Desc: desc2,
        Zap: ctt,
        Cat: cat,
        Subcat: subcat,
        Senha: nnn
      }).then(() => {
        console.log('dado salvo!')
    })
});

    //colocar o link da planilha gerada na API Sheet.Best
   // axios.post(
   //   "https://sheet.best/api/sheets/e577dac2-b3d2-4e50-87a3-97a60ec4ec99",
   //   data
   // );
    agent.add(
      "_O seu anúncio foi publicado com sucesso !_"
    );
    agent.add(
      "Para conferir basta fazer uma pergunta contendo a sua palavra chave. exemplo: *alguém vende quentinha ?*"
    );
  }

  // PESQUISAR CLIENTE E EVENTOS
  function pesquisa(agent) {
    var Telefone = request.body.queryResult.parameters["subcat"];
    var Telefone1 = request.body.queryResult.parameters["cat"];
const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = {
  "type": "service_account",
  "project_id": "hiu-upjn",
  "private_key_id": "452253436622066a644724387e5cd009d3cb57c2",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMwQLzJR8ohst7\nb54nr9Q+Q0jl3Ijfd7X67BlF3kdhKwm3h8zX6MkazzoblKdgl0pfAZmppTnhi1Ja\nUtqrSMJGUH7Ha4ao5wRlhEQU5lYUAKstnxEALi8PPRgXiBX0Me8mhZdVNigLSeFP\ntXRwz5CAoOtFtnPvgSeJ/oXBf2hk6lwgz1Zog9WXZBT7qNtUSUmV6FWlQu/QRr3r\nuMrQQvb8Clf5WODXuxzcL7bRcyc5/3RoTjfoE06Wx5a4T39fFpfaAAn9Wgr69bQN\nV47kCTLjGl7R1JS2tWg8jT4gt9XrF2P/w14YWSpHVzp2udlB5VmJuo5710y8KYdV\nYgD/T70pAgMBAAECggEADBTbcrNfCkoh2Y+1ekwCrwXTWFTR8rWilEK4HwpFlfMv\nKJgnuxmuPBm8KQJ1edqTddWnVn48UxWgb1nyMycg53s6b9PlZzPya3cJeV45+AYu\nE4wOOb9/4VtOf5z1BqqnnNNHIa0HYdsjI0vmqf1lXmGgYEWqw5gQWDEffVJiO4oJ\njsFVDfJObrjvubaOfZGYKgTFB0lhfqrgj6WxVTih0BD8/PfK9WUPSQ+hV6eVsyDu\nT2YiGsEx9SaoqBETOJz4AuhoIG+g19JHbTedEBHupyWpY04VBze/ijlUY+PwIwAh\nyl67PWWNZWRyAJf4y5owPCatxNYUlDWHiynEc2QhbQKBgQDmUyo4507f6VrKi2il\n0+KhwZ54Q/eo/OOh7fITuS9ggSV9L0bKlUfrxpNk9gHqNaqkiD8VDrUDZ4UPR7bB\nVFH409IufvisTz5ScYMMpxQu52AV+avjJAzt3l+Dkc7uh01kKUKF/0tGfjXjN1+m\nHrAtaWRfVGZS0CHp/2cwY60SuwKBgQDjlB+ZnQ2+VW9G8/j2iTM8JUHI/II89WPS\nihsffr/5NLvfXDDxCsYH1UTGayuBShDLWgnfdrVu+f5J0x8ti6YxiRjvfzDkXg3j\nyylLPvGGdeoL4BJtkHz/9rb9RkPtv8p6Axad9vlyhOMm2hD0mwhuXwjuxb0DkXWX\nVPdU7wKrawKBgQDQ/u31LI75xvnHiLCwqI+hT9vILYRxJug3a36aPxOqcgXejiOi\nd8sHOu1MU55xM7lgCvGS3gGK0UiAEQbYbvbi3vJ9lmF3mYBntvC/bmx2EyWxSxiZ\nx4Cj54CsFoa7ErM7C+V9Saa4lJW5U+nLB1W+H0Ag8KjYxFvBxSuRUSEfOQKBgHAM\nPt64B8s9bzNE7cAcXwBu64vUXx86RnKjkqUYF9bP0uwvDN2wyz2SEHGM1HesisZE\nR3YhkUTZiwy4CLK4/hOHh6JrQhw9/qK4JVWp4Oqt5ZUBNrGBITo5M3FSBiHpevxF\nxv3xWnG64cgAN7bnGeiVm+VLsDswg/AFYl0L7ImPAoGAcmmHT6+muQgkwpLKDX6I\nL/Gx4lUUYx7+zKBSlfUxUwqEnlCiKohd1DOk+x4xHXn1gGU4/AmdbbIe+3bGtwmO\n0aPluM1+5nVkqrH3GEt9iOzhquXay5UreYSfWd2Z4Ew5/hK4FS8jaJWHIt7LQoxG\nYtqrnrnSYWLJN1qGZ9vx264=\n-----END PRIVATE KEY-----\n",
  "client_email": "dialogflow@hiu-upjn.iam.gserviceaccount.com",
  "client_id": "101971212035569721794",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/dialogflow%40hiu-upjn.iam.gserviceaccount.com"
}
  
const getDoc = async () => {
    const doc = new GoogleSpreadsheet("1miAwy9g53saRiR1uxURkoWl_PbmE1yAgtRX3o88El9c");
    
    await doc.useServiceAccountAuth({
        client_email: credenciais.client_email,
        private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
}
    //colocar o link da planilha gerada na API Sheet.Best
    //return axios
    //  .get("https://sheet.best/api/sheets/e577dac2-b3d2-4e50-87a3-97a60ec4ec99")
    let sheet; 
getDoc().then(doc => {
    sheet = doc.sheetsByIndex[0];
    sheet.getRows().then(rows => {
        rows.map(row => {
          //  console.log(row.Nome);
              var count2 = rows.length;
           var user_input = request.body.queryResult.queryText;
                     var user_input2 = request.body.queryResult.queryText;
          console.log(user_input);
          var iz;
          for (iz = 0; iz < 5; iz++) {
          var user_input = user_input.toLowerCase();
          var user_input = user_input.replace("?", "");
          var user_input = user_input.replace("?", "");
          var user_input = user_input.replace("?", "");
          var user_input = user_input.replace("?", "");
          var user_input = user_input.replace("compr", "");
          var user_input = user_input.replace("tem ", " ");
          var user_input = user_input.replace("sabe ", " ");
          var user_input = user_input.replace("troca ", " ");
          var user_input = user_input.replace("pode ", " ");
          var user_input = user_input.replace("tel ", " ");
          var user_input = user_input.replace("contato ", " ");
          var user_input = user_input.replace("passar", "");
          var user_input = user_input.replace("enviar", "");
          var user_input = user_input.replace("mandar", "");
          var user_input = user_input.replace("entregue ", " ");
          var user_input = user_input.replace("ado ", " ");
          var user_input = user_input.replace("ido ", " ");
          var user_input = user_input.replace("ndo ", " ");
          var user_input = user_input.replace("entrega ", " ");
          var user_input = user_input.replace("vende ", "vendo ");
          var user_input = user_input.replace("venda", "vendo ");
          var user_input = user_input.replace("aluga", "alugo ");
          var user_input = user_input.replace("alugu", "alugo ");
          var user_input = user_input.replace("com ", " ");
          var user_input = user_input.replace("bom dia", "");
          var user_input = user_input.replace("boa tarde", "");
          var user_input = user_input.replace("boa noite", "");
          var user_input = user_input.replace("número", "");
          var user_input = user_input.replace("faça", "");
          var user_input = user_input.replace(",", " ");
          var user_input = user_input.replace(",", " ");
          var user_input = user_input.replace(",", " ");
          var user_input = user_input.replace(",", " ");
          var user_input = user_input.replace(",", " ");
          var user_input = user_input.replace(",", " ");
          var user_input = user_input.replace(".", " ");
          var user_input = user_input.replace(".", " ");
          var user_input = user_input.replace(".", " ");
          var user_input = user_input.replace(".", " ");
          var user_input = user_input.replace(".", " ");
          var user_input = user_input.replace(".", " ");
          var user_input = user_input.replace("numero", "");
          var user_input = user_input.replace("pedido", "");
          var user_input = user_input.replace("abert", "");
          var user_input = user_input.replace("pra ", " ");
          var user_input = user_input.replace("trabalha", "");
          var user_input = user_input.replace("trabalhe", "");
          var user_input = user_input.replace("mexe", "");
          var user_input = user_input.replace("grupo", "");
          var user_input = user_input.replace("concerta", "");
          var user_input = user_input.replace("conserto", "");
          var user_input = user_input.replace("concerto", "");
          var user_input = user_input.replace("que ", " ");
          var user_input = user_input.replace("atenda ", " ");
          var user_input = user_input.replace("atende ", " ");
          var user_input = user_input.replace("venha ", " ");
          var user_input = user_input.replace("tenha ", " ");
          var user_input = user_input.replace("para ", " ");
          var user_input = user_input.replace("alguém", "");
          var user_input = user_input.replace("que ", " ");
          var user_input = user_input.replace("uma", "");
          var user_input = user_input.replace("são vicente", "");
          var user_input = user_input.replace("roncalle", "");
          var user_input = user_input.replace("roncali", "");
          var user_input = user_input.replace("alguem", "");
          var user_input = user_input.replace("alguma", "");
          var user_input = user_input.replace("algum", "");
          var user_input = user_input.replace("indica", "");
          var user_input = user_input.replace("personalizado", "");
          var user_input = user_input.replace(" de ", " ");
          var user_input = user_input.replace(" do ", " ");
          var user_input = user_input.replace(" da ", " ");
          var user_input = user_input.replace(" em ", " ");
          var user_input = user_input.replace(" no ", "");
          var user_input = user_input.replace(" na ", "");
          var user_input = user_input.replace("tv", "televisao ");
          var user_input = user_input.replace("arredor", "");
          var user_input = user_input.replace(" ", "-!-");
          var user_input = user_input.replace(" ", "-!-");
          var user_input = user_input.replace(" ", "-!-");
          var user_input = user_input.replace(" ", "-!-");
          var user_input = user_input.replace(" ", "-!-");
          var user_input = user_input.replace(" ", "-!-");
          var user_input = user_input.replace(" ", "-!-");
          var user_input = user_input.replace(" ", "-!-");
          var user_input = user_input.trim();
         // var user_input = " " + user_input + " ";
         }
          var user_input = user_input.split("!"); 
          
          user_input = user_input.filter(function(item) { 
  return item.length > 3;
});
          
          var count3 = user_input.length;
          //agent.add(user_input);
    var datax = '';
              var datax3 = '';
          var msgx = '';
          var i = 0;
          var z = 0;
          console.log(user_input);
          for (z = 0; z < count3; z++) {
        for (i = 0; i < count2; i++) {
          var x = z + 1;
          var xn = z - 1;
       //   if (x > count3) {
       //     var x = count3;
       //   }
          var comp = rows[i].Desc;
          var comp = comp.split("lado")[0];
          var comp = comp.split("perto")[0];
          var comp = comp.split("na rua")[0];
          var comp = comp.split("próximo")[0];
          var comp = comp.split("depois")[0];
          var comp = comp.split("proximo")[0];
                    var comp = comp.split("frente")[0];
          var comp = " " + comp;
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
                    var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
                    var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          var comp = comp.replace(" ", "-");
          //console.log(comp);
            //        if (rows[i].Desc.includes(user_input[z]) === true && rows[i].Desc.includes(user_input[x]) === true && datax.includes(rows[i].Nome) === false) {
            //var z = z + 1000;
          var user_input = user_input.filter(e => e !== 'com'); 
          if (datax3.includes(rows[i].Desc) === false) {
          if (comp.includes(user_input[z]) === true && comp.includes(user_input[x]) === true) {
        //   var userc = rows[i].Desc.trim();
          var datax3 = datax3  +
                "*"+rows[i].Nome + "*"+
                "\n" +
                ""+ rows[i].Desc + "" +
                "\n" +
                "_*"+rows[i].Zap + "*_" +
                "\n\n" 
          }
          } 
          
                    if (datax3.includes(rows[i].Desc) === false) {
                      
          if (comp.includes(user_input[xn]) === true && comp.includes(user_input[z]) === true) {
           // var userc = rows[i].Desc.trim();
          var datax3 = datax3  +
                "*"+rows[i].Nome + "*"+
                "\n" +
                ""+ rows[i].Desc + "" +
                "\n" +
                "_*"+rows[i].Zap + "*_" +
                "\n\n" 
          }
          } 
          //var datax2 = datax3;
         // console.log(datax3.length);
          if (datax3.length < 10) {
            var user_input3 = user_input.filter(e => e !== '-vendo');
            var user_input3 = user_input.filter(e => e !== '-alugo');
            var user_input3 = user_input.filter(e => e !== '-casa');
             var user_input3 = user_input.filter(e => e !== '-entrega');
            var user_input3 = user_input.filter(e => e !== '-máquina');
            var user_input3 = user_input.filter(e => e !== '-fazer');
            var user_input3 = user_input.filter(e => e !== '-maquina');
            var user_input3 = user_input.filter(e => e !== '-grupo');
            var user_input3 = user_input.filter(e => e !== '-disponível');
            var user_input3 = user_input.filter(e => e !== '-hoje');
            var user_input3 = user_input.filter(e => e !== '-amanhã');
           // var z3 = " " + user_input3[z] + " ";
          if (comp.includes(user_input3[z]) === true && datax.includes(rows[i].Desc) === false && datax3.length < 10) {
           // var userc = rows[i].Desc.trim();
            //var z = z + 1000;
          var datax = datax  +
                "*"+rows[i].Nome + "*"+
                "\n" +
                ""+ rows[i].Desc + "" +
                "\n" +
                "_*"+rows[i].Zap + "*_" +
                "\n\n" 
           }
          }
        }
      }
          var datax = datax.trim();
          var datax3 = datax3.trim(); 
          var final = datax3;
          if (datax3.length < 1) { var final = datax; }
                    if (datax.length < 10 && datax3.length < 10) {
            var msgx = 'Sua busca: *' + user_input2 + '*' + "\n" + 'Ninguém inseriu um anuncio nesta palavra-chave ainda' + "\n";
          }
          response.json({
//             fulfillmentText:
//              datax  +
//                "\n\n" +
//                "_Para Voltar ao Menu Inicial Digite *OK*_"
"fulfillmentText": "_Quer o seu negócio aqui no topo ? Conheça nossa proposta_" + "\n\n" + final  +
                "\n" +
            msgx +
            "\n" +
                "_Para Inserir Seu Produto ou Serviço Fale Comigo No Privado_"
            }); 
        })
    })
})

  }
}); 

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
