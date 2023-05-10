const express = require('express'); 
const connectDB =require('../Devconnector/config/db');



const app = express();

connectDB();

app.use(express.json({extended : false}));  
app.get('/',(req,res)=> res.send('API RUNNING'));

app.use('/user', require('./routes/user'));
app.use('/auth',require('./routes/auth'));
app.use('/posts',require('./routes/posts'));
app.use('/profile',require('./routes/profile'));

const PORT =process.env.PORT ||5500
 


app.listen(PORT ,()=> console.log('Server started on $(PORT)'));