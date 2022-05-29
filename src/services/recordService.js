const Record = require("../database/Record");

const getRecordForWorkout = ( workoutId ) => {
    try {
        const record = Record.getRecordWorkout( workoutId );
        return record;
    } catch ( error ) {
        throw error;
    }
};

module.exports = { getRecordForWorkout };