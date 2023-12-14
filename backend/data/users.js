import bcrypt from 'bcryptjs';

const users = [
    {
        name : 'Admin User',
        email : 'admin@emai.com',
        password : bcrypt.hashSync('123456',10), //10 is salt
        isAdmin : true,
    },
    {
        name : 'john dev',
        email : 'john@emai.com',
        password : bcrypt.hashSync('123456',10), //10 is salt
        isAdmin : false,
    },
    {
        name : 'jane dev',
        email : 'jane@emai.com',
        password : bcrypt.hashSync('123456',10), //10 is salt
        isAdmin : false,
    }
]

export default users;