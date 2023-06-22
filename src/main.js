import { createApp } from 'vue';
import App from './App.vue';
//import mongoose from 'mongoose';
//const URL = 'mongodb://localhost:27017/ads';

const start = async () => {
  //   await mongoose.connect(URL, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });
  createApp(App).mount('#app');
};

start();
