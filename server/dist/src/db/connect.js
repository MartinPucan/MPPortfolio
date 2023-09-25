import mongoose from 'mongoose';
export const connectDB = (url) => {
    return mongoose.connect(url);
};
// const connection =
//   'mongodb+srv://<username>:<password>@mpblogcluster.eqymvhd.mongodb.net/?retryWrites=true&w=majority';
