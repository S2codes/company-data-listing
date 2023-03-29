const express = require('express');
const cors = require('cors');
const connectDB = require("./config/dbConnection");
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const companyRouter = require('./routes/company');
const signRoute = require('./routes/imageRoute');
const checkAuth = require('./middleware/checkAuth');

const app = express();
const port = 5000;



app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/company', companyRouter);

app.use(checkAuth);
app.use('/api/image',signRoute);

(async () => {
    await connectDB(process.env.DB_URI);
    const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log("listening on port", PORT);
  });
  })();