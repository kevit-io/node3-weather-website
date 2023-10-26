const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoibWlzcmkiLCJhIjoiY2txdDllZWpoMXdlbDJ2cGNkZmttdmZlaSJ9.I9qSrHh4C1OXnn-TjLxrmw&limit=1'
    
    
    request({url:url,json:true},(error,response)=>{
        if(error){ 
            callback('unable to cinnect with geo services',undefined)
        }else if(response.body.features.length==0){
           callback('unable to find location',undefined) 
        }else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitute:response.body.features[0].center[0],
                placeName:response.body.features[0].place_name
                
    
            })
        }
    })
    }
    geocode('Los Angeles, California',(error,data)=>{
   
    console.log('data',data)
    })