const path=require('path')
const express=require('express')
const hbs=require('hbs')
const { request } = require('express')
const forecast=require('./utils/forecast')
const geocode=require('./utils/geocode')

const app=express()
const publicPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'weather App',
        name:'Misri'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Misri'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Me',
        name:'Misri'
    })
})
app.get('/product',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:"you have to provide search term "
        })
    }
    console.log(req.query.rating)
  res.send({
            products:[]
  })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
         res.send({
            error:"you have to provide an address"
        })
    }
  
  
geocode(req.query.address,(error,{latitude, longitute,placeName}={})=>{
    if(error){
        return res.send({error})
    }


forecast(latitude,longitute ,(error,forecastData)=>{
    if(error){
      return res.send({error})
    }
    res.send({
        forecast : forecastData,
        placeName,
        address:req.query.address

    })
})
})
})
/*app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Misri',
        errorMessage: 'Help page Not found'

    })

})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Misri',
        errorMessage: 'page Not found'

    })

})*/
app.listen(3000,()=>{
    console.log("done")
})



