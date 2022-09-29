const express = require("express");
const bodyParser = require("body-parser");
//const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const gameRouter = require("./v1/routes/gameRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/Swagger");
const path = require("path");

const app = express();
//const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

// for testing purposes
app.use(bodyParser.json());
//app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

//app.use(express.static(path.join(__dirname, "static/HeatMachine")));
app.use("/heatmachine", gameRouter);

app.listen( PORT, () => {
    console.log(`API is listening on port ${PORT}`);
    V1SwaggerDocs( app, PORT );
});