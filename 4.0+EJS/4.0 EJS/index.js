import express from 'express'

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    const today = new Date();
    const day = today.getDay();

    console.log(day);

    let type, adv = '';

    switch(day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            type= 'a weekday';
            adv= 'Get to work!';
            break;
        case 0:
        case 6:
            type= 'a weekend';
            adv= 'Go play!';
            break;
        default: 
            type= '';
            adv= '';
    }


    res.render("index.ejs", {
        dayType: type, 
        advice: adv
    })
})

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})