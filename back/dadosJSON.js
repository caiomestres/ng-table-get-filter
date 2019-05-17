var express = require('express');
var app = express();


var dataOptions = {
  Status: 200,
  Data: [
    {
      Codigo: '1',
      Estado: 'Estado1'
    },
    {
      Codigo: '2',
      Estado: 'Estado2'
    },
    {
      Codigo: '3',
      Estado: 'Estado3'
    },
    {
      Codigo: '4',
      Estado: 'Estado4'
    },
    {
      Codigo: '5',
      Estado: 'Estado5'
    },
    {
      Codigo: '6',
      Estado: 'Estado6'
    },
    {
      Codigo: '7',
      Estado: 'Estado7'
    },
    {
      Codigo: '8',
      Estado: 'Estado8'
    },
    {
      Codigo: '9',
      Estado: 'Estado9'
    },
    {
      Codigo: '10',
      Estado: 'Estado10'
    },
    {
      Codigo: '11',
      Estado: 'Estado11'
    },
    {
      Codigo: '12',
      Estado: 'Estado12'
    },
    {
      Codigo: '13',
      Estado: 'Estado13'
    },
    {
      Codigo: '14',
      Estado: 'Estado14'
    },
    {
      Codigo: '15',
      Estado: 'Estado15'
    },
    {
      Codigo: '16',
      Estado: 'Estado16'
    },
    {
      Codigo: '17',
      Estado: 'Estado17'
    },
    {
      Codigo: '18',
      Estado: 'Estado18'
    },
    {
      Codigo: '19',
      Estado: 'Estado19'
    },
    {
      Codigo: '20',
      Estado: 'Estado20'
    },
    {
      Codigo: '21',
      Estado: 'Estado21'
    }
  ]
};


app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get('/clientes', function (req, res) {
  res.json(dataOptions);
});

var PORT = process.env.PORT || 3412;

app.listen(PORT, () => {
  console.log('listening ')
});


