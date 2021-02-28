import bcrypt from 'bcryptjs';

const data={
    users:[
        {
        name:'Anmol',
        email:'anmol.garg98@gmail.com',
        password:bcrypt.hashSync('meanmolme',8),
        isAdmin:true,
        rollNo:'2017UEC2133'
        },
    {
        name:'John',
        email:'abc@example.com',
        password:bcrypt.hashSync('123',8),
        isAdmin:false,
        rollNo:'NA'
        
    }],
    products:[
        {
            name:'ECE',
            image:'/images/p1.jpg',
            description:'cotton',
            countInStock:1
        },
        {
            name:'BT',
            image:'/images/p1.jpg',
            description:'cotton',
            countInStock:1
        },
        {
            name:'COE',
            image:'/images/p1.jpg',
            description:'cotton',
            countInStock:0
        },
        {
            name:'ICE',
            image:'/images/p1.jpg',
            description:'cotton',
            countInStock:0
        },
        {
            name:'IT',
            image:'/images/p1.jpg',
            description:'cotton',
            countInStock:0
        },
        {
            name:'ME',
            image:'/images/p1.jpg',
            description:'cotton',
            countInStock:0
        },
        {
            name:'MPAE',
            image:'/images/p1.jpg',
            description:'cotton',
            countInStock:0
        },
    ]
};

export default data;