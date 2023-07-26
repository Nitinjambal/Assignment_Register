import mongoose from "mongoose";

//dataBase
export const connectDB = () => {
    mongoose
        .connect("mongodb+srv://myAtlasDBUser:0HyPACFplml2oWv1@myatlasclusteredu.mqmkmac.mongodb.net/?retryWrites=true&w=majority", {
            dbName: "UserData",
        })
        .then(() => {
            console.log("DataBase Connected");
        })
        .catch((err) => {
            console.log(err);
        });
}
