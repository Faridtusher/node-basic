const fs = require('fs')
fs.rename('World.txt', 'Bangladesh.txt' , (err) =>{
   if(err){
      console.log(err)
   }
   else{
      console.log('success')
   }
})


fs.writeFileSync('Test.txt', 'This is my second test.')
