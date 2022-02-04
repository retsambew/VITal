import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import notesRoute from './routes/notes.js';
import papersRoute from './routes/papers.js';
import clubRoute from './routes/clubs.js';
import facultyRoute from './routes/faculty.js';
import eventRoute from './routes/event.js';
import courseRoute from './routes/courses.js';
import roadmapRoute from './routes/roadmap.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/notes', notesRoute);
app.use('/papers', papersRoute);
app.use('/clubs', clubRoute);
app.use('/faculty', facultyRoute);
app.use('/event', eventRoute);
app.use('/roadmap', roadmapRoute);
app.use('/courses', courseRoute);

const CONNECTION_URL= 'mongodb+srv://Core:Core123@maincluster.tvjun.mongodb.net/MainDB';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch( (error) => console.log(error.message));

