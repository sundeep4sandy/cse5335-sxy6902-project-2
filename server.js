var express  = require('express');
var _ = require('underscore');
var pg = require("pg")
var http = require("http")
var app = express();
var fs = require('fs');
var querystring = require('querystring');



app.set('port', (process.env.PORT || 3000));



var client = new pg.Client({
    user: "qpepjbrxhkbpmm",
    password: "6rz4MpOzT3UuoimrYY8o6GcnPF",
    database: "dbqejka3cf5hfa",
    port: 5432,
    host: "ec2-54-243-199-161.compute-1.amazonaws.com",
    ssl: true
}); 
client.connect();

console.log(client);

app.get('/getData/:id', function(request, response) {
var i=1;
	  var res ="";

	  var results = [];
	console.log('called');
	    var query = client.query('SELECT * FROM web LIMIT 1 OFFSET '+parseInt(request.params.id));
  console.log("select query step");
   query.on('row',function(row,result){
	   result.addRow(row);
   });
   
   query.on('end',function (result){
	var res = JSON.parse(JSON.stringify(result.rows,null," "));
	console.log(res[0]);
	response.end(JSON.stringify(res[0]));
	
	  
	
   });
   
			  
	})















/*
app.get('/getData', function(request, response) {
	
	var i=1;
	  var results = [];
	  var res ="";
	console.log('called');
	    var query = client.query('SELECT * FROM web;');
  console.log("select query step");
  query.on('row', (row) => {
      
	  results.push(row);
	         res += querystring.stringify(row);
	  			console.log(row);
	     
	console.log("result "+res);	
	
		   var count = client.query('SELECT COUNT(id) FROM web;');
			//console.log(count);

	if(i==3)
	{
		
		response.end(res);
		
	}
					//	response.end(querystring.stringify(row)); 	

		//console.log(i);

	  i++;
		//response.end(results); 

		//  response.end("asdad");
        //  console.log(results);
 // response.write(results.toString());

			//	response.end(row['id']);
  // response.end("asdad");
//   response.end(row.toString());
 // response.write(row.toString());
 // response.write(row.stringify());
 
	});
	});
	*/
	/*

app.get('/getData', function(request, response) {
	  response.end("asdad");


	});
*/
/*
app.get('/getData', function (req, res) {
	
	  const results = [];

	console.log('called');
	    const query = client.query('SELECT * FROM web;');
  console.log("select query step");
  query.on('row', (row) => {
      results.push(row);
	  			console.log(row);
				    res.end(row);

    });	

	});
*/
app.get('/', function(request, response) {
  response.sendFile( __dirname + "/" + "index.html" );
});

/*
app.get('/selectall/:client_id',function(req, res)
{
  console.log('called');
  client.query("Select * from web",[req.params.client_id]);
   res.send('done');
});
	*/

/*
app.get('/getData',function(req,res){
    fs.readFile("data.json",'utf8',function(err,data){
    console.log(data);
    res.end(data);
     });
})
*/

/*
app.get('/', function (req, res) {
	console.log('called');
  client.query("Select * from web");
  console.log("select query step");
  
    query.on('row', function(row) {
			console.log(row);
   res.send(row);
});
  //res.sendFile( __dirname + "/" + "index.html" );

})
*/
/*
app.get('/selectall/:client_id',function(req, res)
{
  console.log('called');
  client.query("Select * from web",[req.params.client_id]);
   res.send('done');
});
	*/
app.get('/main.ctrl.js', function(request, response) {
  response.sendFile( __dirname + "/" + "main.ctrl.js" );
});
app.get('/app.js', function(request, response) {
  response.sendFile( __dirname + "/" + "app.js" );
});


app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!')
})