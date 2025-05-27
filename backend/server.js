const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

try {
    const authRoute = require('./routes/auth');
    app.use('/auth', authRoute);
}
catch (e) {
    console.log(e)
};


app.listen(3001, ()=> {
    console.log("App is runing on port 3001")
});