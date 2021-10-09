import moment from "moment";

//Convert UTC to Local without specifying any format
export const convertUTCtoLocal = utcDateTime => {
    try{
        /*
                moment('2010-10-20T08:40'); // should parse to local time
                moment.utc('2010-10-20T08:40'); // should parse to utc time
                moment.utc('2012-12-14T00:29:40.276Z').format(); // "2012-12-14T00:29:40+00:00"

                
                utcTime = moment.utc().format('YYYY-MM-DD HH:mm:ss');
                var localTime  = moment.utc(utcTime).toDate();
                localTime = moment(localTime).format('YYYY-MM-DD HH:mm:ss');
        */
        return moment.utc(utcDateTime).local().format();
    }catch (err) {
        console.error('Error: ', err.message);
        throw err;
    } 
}

//Convert Local to UTC without specifying any format
export const convertLocalToUTC = localDateTime => {
    try{
        return moment(localDateTime).utc();
    }catch (err) {
        console.error('Error: ', err.message);
        throw err;
    } 
};

export const convertUTCtoLocalWithFormat = (utcDateTime, dateFormat) => {   
    //dataFormat: 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss a', etc.,
    try{
        return moment.utc(utcDateTime).local().format(dateFormat);
    }catch (err) {
        console.error('Error: ', err.message);
        throw err;
    } 
};

export const convertLocalToUTCWithFormat = (localDateTime, dateFormat) => {   
    //dataFormat: 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss a', etc.,
    try{
        return moment(localDateTime).utc().format(dateFormat);
    }catch (err) {
        console.error('Error: ', err.message);
        throw err;
    } 
};

export const convertUTCtoLocalWithFormats = (utcDateTime, utcDateFormat, localDateFormat) => {   
    //dataFormat: 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss a', etc.,
    try{
        return moment.utc(utcDateTime, utcDateFormat).local().format(dateFormat);
    }catch (err) {
        console.error('Error: ', err.message);
        throw err;
    } 
};

export const convertLocalToUTCWithFormats = (localDateTime, utcDateFormat, localDateFormat) => {   
    //dataFormat: 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss a', etc.,
    try{
        return moment(localDateTime, localDateFormat).utc().format(utcDateFormat);
    }catch (err) {
        console.error('Error: ', err.message);
        throw err;
    } 
};

export const isValidDateFormat = (dateString, dateFormat) => {
    try{
        return moment(dateString, dateFormat, true).isValid();
    }catch (err) {
        console.error('Error: ', err.message);
        throw err;
    } 
}

export const convertStringToLocalDate = dateString => {
    //dateString = 'Thu Jul 15 2021 19:31:44 GMT+0200 (CEST)';
    try{
        return new Date(dateString);
    }catch (err) {
        console.error('Error: ', err.message);
        throw err;
    } 
}

export const formatDate = (dateString, dateFormat) => {
    //dateString = 'Thu Jul 15 2021 19:31:44 GMT+0200 (CEST)';
    try{
        const dateObj = new Date(dateString);
        const momentObj = moment(dateObj);
        const momentString = momentObj.format(dateFormat); // 'YYYY-MM-DD'
        return momentString;
    }catch (err) {
        console.error('Error: ', err.message);
        throw err;
    } 
}
export const changeDateFormat = (dateString, originalDateFormat, requiredDateFormat) => {
    //dateString = '07-15-2021';
    try{
        const momentObj = moment(dateString, originalDateFormat); //'MM-DD-YYYY'
        const momentString = momentObj.format(requiredDateFormat); //'YYYY-MM-DD'
        return momentString;
    }catch (err) {
        console.error('Error: ', err.message);
        throw err;
    } 
}