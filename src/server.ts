import app from './app';
import mongoose, { ConnectOptions } from 'mongoose';
import bluebird from 'bluebird';
import { MONGODB_URI } from './utils/secrets';

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
mongoose.Promise = bluebird;
mongoose.set('strictQuery', false);

if (mongoUrl) {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));
} else console.warn('MongoUrl not found');

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  console.log(
    'App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  );
  console.log('Press CTRL-C to stop\n');
});

export default server;
