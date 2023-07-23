import mongoose from 'mongoose'


const conectarDB = async () => {
    try{
        const connection = await mongoose.connect('mongodb+srv://sysadmin:s18247256@cluster0.8olhbb0.mongodb.net/MERN_Uptask?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`Connnected to mongoDB ${url}`)
    }

    catch(e){
        console.log(e)
        process.exit(1)

    }

}

export default conectarDB