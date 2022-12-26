const app = require('./app');

const {PORT} = process.env;

app.listen(PORT,()=>{
    console.log(`I am listening at port ${PORT}`);
})