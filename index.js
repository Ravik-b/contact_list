const express =require('express');
const path =require('path')
const port =8000;

const app =express();

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname ,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList = [

           {
            name:"RAVI",
            phone:"8295776481"
           },

           {
            name:"PANKAJ",
            phone:"7404541016"
           },
           {
            name:"TINKU",
            phone:"9671921162"
           },
           {
            name:"HOME",
            phone:"9812805578"
           },
           {
            name:"SAMARTH",
            phone:"9588126517"
           },
           {
            name:"RAVI",
            phone:"8295776481"
           },

           {
            name:"PANKAJ",
            phone:"7404541016"
           },
           {
            name:"TINKU",
            phone:"9671921162"
           },
           {
            name:"HOME",
            phone:"9812805578"
           },
           {
            name:"SAMARTH",
            phone:"9588126517"
           },
           {
            name:"RAVI",
            phone:"8295776481"
           },

           {
            name:"PANKAJ",
            phone:"7404541016"
           },
           {
            name:"TINKU",
            phone:"9671921162"
           },
           {
            name:"HOME",
            phone:"9812805578"
           },
           {
            name:"SAMARTH",
            phone:"9588126517"
           },
       
     
     

]





app.get('/' ,function(req ,res){

      return res.render('./home' ,
       {title: 'contact_list',
        contact_list :contactList
    
    
    });

});

app.post('/create-contact' ,function(req ,res){

         
         contactList.push(req.body);

          return res.redirect('/');

});

app.get('/delete-contact' ,function(req,res){

        
            let phone =req.query.phone;   
            let contactIndex =contactList.findIndex(contact =>contact.phone==phone)      
             
           if(contactIndex != -1)
           {
                     contactList.splice(contactIndex ,1);
           }

           return res.redirect('back');

});


app.listen(port ,function(err)
{
    if(err){console.log("error is present :" ,err)}
    console.log("server is running on the port :" ,port)


});