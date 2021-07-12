const request= require('request');

const url='http://api.weatherstack.com/current?access_key=fa09d053651e156a3d7e0f5fad7e69a8&query=india&units='

request({url:url,json:true},(error,response)=>{
   
//console.log(response.body.current)
console.log('It is currently'+ response.body.current.temperature +' degress out. There is a space'+ response.body.current.feelslike+' % chance rain')
})