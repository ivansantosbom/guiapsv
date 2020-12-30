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
  intentMap.set("alimentacao", pesquisa);
  intentMap.set("excluir", exclui);
  intentMap.set("emergencia", pesquisa);
  intentMap.set("achados", pesquisa);
  intentMap.set("animais", pesquisa);
  intentMap.set("automoveis", pesquisa);
  intentMap.set("beleza", pesquisa);
  intentMap.set("celulares", pesquisa);
  intentMap.set("construcao", pesquisa);
  intentMap.set("decoracao", pesquisa);
  intentMap.set("diversao", pesquisa);
  intentMap.set("doacao", pesquisa);
  intentMap.set("educacao", pesquisa);
  intentMap.set("festas", pesquisa);
  intentMap.set("hospedagem", pesquisa);
  intentMap.set("imoveis", pesquisa);
  intentMap.set("industria", pesquisa);
  intentMap.set("informatica", pesquisa);
  intentMap.set("instituicao", pesquisa);
  intentMap.set("moda", pesquisa);
  intentMap.set("moveis", pesquisa);
  intentMap.set("musica", pesquisa);
  intentMap.set("prestadores", pesquisa);
  intentMap.set("propaganda", pesquisa);
  intentMap.set("saude", pesquisa);
  intentMap.set("transportes", pesquisa);

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
                "_Para Voltar ao Menu Inicial Digite *OK*_"
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
  let sheet; 
getDoc().then(doc => {
    sheet = doc.sheetsByIndex[0];
sheet.addRow({
        Nome: nome,
        Desc: desc,
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
      "Para Voltar ao Menu Inicial Digite *OK*"
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
            console.log(row.Nome);
              var count2 = rows.length;
    var datax = '';
          var i = 0;
        for (i = 0; i < count2; i++) {
          if (rows[i].Cat === Telefone1 && rows[i].Subcat === Telefone)
          var datax = datax  +
                "*"+rows[i].Nome + "*"+
                "\n" +
                "_"+rows[i].Desc + "_" +
                "\n" +
                "_*"+rows[i].Zap + "*_" +
                "\n\n" 
        }

          response.json({
//             fulfillmentText:
//              datax  +
//                "\n\n" +
//                "_Para Voltar ao Menu Inicial Digite *OK*_"
"fulfillmentText": "_Quer o seu negócio aqui no topo ? Conheça nossa proposta_" + "\n\n" + datax  +
                "\n\n" +
                "_Para Voltar ao Menu Inicial Digite *OK*_"
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