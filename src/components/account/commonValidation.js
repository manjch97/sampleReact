import validation from './validation.json';
import isEmail from "validator/lib/isEmail";
import isPassword from "validator/lib/isStrongPassword";
import trim from "validator/lib/trim";
import isEmpty from "validator/lib/isEmpty";
import isURL from "validator/lib/isURL";
import moment from 'moment';
const validateNameRegex=(string_inp)=> {
    const regex = /^[A-Za-z_ ]+$/;
    return regex.test(string_inp);
}
const validateAgeRegex=(string_inp)=> {
    const regex = /^(1[789]|[2-9][0-9]|1[0][0-5])$/;
    return regex.test(string_inp);
}
const validateState=(string_inp)=>{
    const regex=/^[A-Za-z_ ]+$/;
    return regex.test(string_inp);
}
const validateJobTitle=(string_inp)=>{
    const regex=/^[A-Za-z_ ]+$/;
    return regex.test(string_inp);
}
const validateAlphaNumeric=(string_inp)=>{
    const regex=/^[0-9A-Za-z]+$/;
    return regex.test(string_inp)
}
const validateSubscriberCount=(input_str)=>{
      const re=/^\d+$/;
      return re.test(input_str);
}
const validatedateofBirth=(string_inp)=>{
    const regex = /^((0[1-9]|1[0-2])\/((0|1)[0-9]|2[0-9]|3[0-1])\/((19|20)\d\d))$/;
    return regex.test(string_inp)
}

const validatePhoneNumber=(input_str)=>{
    
    const reg1 = /^(\+){1}(\d){1,3}(\s?)[(\()]{1}?((\([0-9]{3}\))|[0-9]{3})(\))[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
    let isValid = false;
    isValid = reg1.test(input_str);
    if(!isValid){
        const reg2 = /^(\+){1}(\d){1,3}(\-?)((\([0-9]{3}\))|[0-9]{3})(\-?)[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
        isValid = reg2.test(input_str);
    }
    if(!isValid){
        const reg3 = /^((\([0-9]{3}\))|[0-9]{3})(\-?)[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
        isValid = reg3.test(input_str);
    }
    if(!isValid){
        const reg4 = /^(\+){1}(\d){1,3}(\s?)((\([0-9]{3}\))|[0-9]{3})(\-?)[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
        isValid = reg4.test(input_str);
    }
    return isValid;
}

const validateCompany=(input_str)=>{
    const re= /^(?=.*?[A-Za-z])[A-Za-z0-9]+$/;
    return re.test(input_str);
}
export const passwordOptions = {
    minLength: validation[0].password.PASSWORD_LENGTH,
    minLowercase: validation[0].password.PASSWORD_VALID_MIN_LOWER,
    minUppercase: validation[0].password.PASSWORD_VALID_MIN_UPPER,
    minNumbers: validation[0].password.PASSWORD_VALID_MIN_NUMBER,
    minSymbols: 0
}
export const validateData=(formData)=>{
    let errors = {};
    console.log(formData,"formData")
    Object.keys(formData).map(fieldname=>{
        switch(fieldname){
            case 'firstName':

                if(isEmpty(trim(formData[fieldname]))&&validation[0].firstname.required==="true"){
                    errors[fieldname] = "Please enter First Name";
                    break;
                }
                
                if(!validateNameRegex(formData[fieldname].trim())) {
                    errors[fieldname] = "Please enter Alphabetic Characters only ";
                }

                if(formData[fieldname].trim().length < validation[0].firstname.minlength){
                    errors[fieldname] = "First Name must be at least "+validation[0].firstname.minlength+" characters";        
                }
                if(formData[fieldname].trim().length > validation[0].firstname.maxlength){
                    errors[fieldname] = "First Name must be less than "+validation[0].firstname.maxlength+" characters";        
                }
                break;
            case 'lastName':

                if(isEmpty(trim(formData[fieldname]))&&validation[0].lastname.required==="true"){
                    errors[fieldname] = "Please enter Last Name";
                    break; 
                }
                    
                if(!validateNameRegex(formData[fieldname].trim())) {
                    errors[fieldname] = "Please enter Alphabetic Characters only ";
                }
    
                if(formData[fieldname].trim().length < validation[0].lastname.minlength){
                    errors[fieldname] = "Last Name must be at least "+validation[0].lastname.minlength+" characters";        
                }
                if(formData[fieldname].trim().length > validation[0].lastname.maxlength){
                    errors[fieldname] = "Last Name must be less than "+validation[0].lastname.maxlength+" characters";        
                }
            break;
            case 'eventName':

                if(isEmpty(trim(formData[fieldname]))&&validation[0].eventName.required==="true"){
                    errors[fieldname] = "Please enter Event Name";
                    break; 
                }
                    
                if(!validateNameRegex(formData[fieldname].trim())) {
                    errors[fieldname] = "Please enter Alphabetic Characters only ";
                }
    
                if(formData[fieldname].trim().length < validation[0].eventName.minlength){
                    errors[fieldname] = "Event Name must be at least "+validation[0].eventName.minlength+" characters";        
                }
                if(formData[fieldname].trim().length > validation[0].eventName.maxlength){
                    errors[fieldname] = "Event Name must be less than "+validation[0].eventName.maxlength+" characters";        
                }
            break;
            case "publicationName":
                if(isEmpty(trim(formData[fieldname]))&&validation[0].publicationname.required==="true"){
                    errors[fieldname] = "Please enter Publication Name";
                    break; 
                }
                if(!validateNameRegex(formData[fieldname].trim())){
                    errors[fieldname] = "Enter valid Publication Name";        
                }
                if(formData[fieldname].trim().length < validation[0].publicationname.minlength){
                    errors[fieldname] = "Publication Name must be at least "+validation[0].publicationname.minlength+" characters";        
                }
                if(formData[fieldname].trim().length > validation[0].publicationname.maxlength){
                    errors[fieldname] = "Publication Name must be less than "+validation[0].publicationname.maxlength+" characters";        
                }
            break;
            case "publicationLink":
                if(isEmpty(trim(formData[fieldname]))&&validation[0].publicationlink.required==="true"){
                    errors[fieldname] = "Please enter Publication Link";
                    break; 
                }
                if(formData[fieldname].trim().length < validation[0].publicationlink.minlength){
                    errors[fieldname] = "Publication Link must be at least "+validation[0].publicationname.minlength+" characters";        
                }
                if(formData[fieldname].trim().length > validation[0].publicationlink.maxlength){
                    errors[fieldname] = "Publication Link must be less than "+validation[0].publicationname.maxlength+" characters";        
                }
                console.log(formData[fieldname][0])
                if(formData[fieldname][0]==','){
            
                    if(!isEmpty(trim(formData[fieldname]))&&isURL(formData[fieldname]) === false){
                        errors[fieldname] = "Please enter valid Publication Link";
                        
                    }
                    break;
                }
                else{
                const arr=formData[fieldname].split(',');
                arr.map((field,index)=>{
                    console.log(field);
                    if(field!=""){
                    if(isURL(field) === false){
                        errors[fieldname] = "Please enter valid Publication Link";
                        
                    }
                   }
                })
                }
            break;
            case 'jobTitle':
                if(isEmpty(trim(formData[fieldname]))&&validation[0].jobtitle.required==="true"){
                    errors[fieldname] = "Please enter Job Title";
                    break; 
                }
                if(!validateJobTitle(formData[fieldname].trim())) {
                    errors[fieldname] = "Special characters and Numbers are not allowed";
                }
                if(formData[fieldname].trim().length < validation[0].jobtitle.minlength){
                    errors[fieldname] = "Job Title must be at least "+validation[0].company.minlength+" characters";        
                }
                if(formData[fieldname].trim().length > validation[0].jobtitle.maxlength){
                    errors[fieldname] = "Job Title must be less than "+validation[0].company.maxlength+" characters";        
                }
            break;
            case 'Age':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Age";
                    break; 
                }
                if(!validateAgeRegex(formData[fieldname])){
                    errors[fieldname] = "Please enter valid Age";
                    break; 
                }
               
            break;
            case 'dateofBirth':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Date of Birth";
                    break; 
                }
                if(!validatedateofBirth(formData[fieldname].trim())) {
                    errors[fieldname] = "Invalid Date of Birth";
                    break;
                }
                if(formData[fieldname].trim().length === 10){
                    let fullDate = formData[fieldname].split('/');      
                     
                    let month= parseInt(fullDate[0]);      
                    let day = parseInt(fullDate[1]);      
                    let year = parseInt(fullDate[2]);    
                    let ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31]; 
                    let date =  moment(new Date()).format("MM/DD/YYYY");
                    let selectedValue = moment(formData[fieldname],"MM/DD/YYYY");
                    let currentValue = moment(date,"MM/DD/YYYY");
                    let difference = currentValue.diff(selectedValue, 'years'); 
                    if (month==1 || month>2){      
                        if (day>ListofDays[month-1]){      
                            ///This check is for Confirming that the date is not out of its range      
                            errors[fieldname] = "Please Check the Date of Birth";   
                        }      
                    }else if (month==2){      
                        let leapYear = false;      
                        if ( (!(year % 4) && year % 100) || !(year % 400)) {      
                            leapYear = true;      
                        }      
                        if ((leapYear == false) && (day>=29)){      
                            errors[fieldname] = "Please Check the Date of Birth";    
                        }else      
                        if ((leapYear==true) && (day>29)){      
                            errors[fieldname] = "Please Check the Date of Birth";             
                        }      
                    }
                    if(difference<13 || difference>110){
                        if(difference<13){
                            errors[fieldname] = "You should be 13 or older to register";
                        }
                        if(difference>110){
                            errors[fieldname] = "Invalid Date of Birth";
                        }
                        break; 
                    }
                    break; 
                }
                
            break;
            case 'gender':
                if(isEmpty(trim(formData[fieldname]))&&validation[0].gender.required==="true"){
                    errors[fieldname] = "Please enter Gender";
                    break; 
                }
            break;
            case 'attendedE3':
                if(isEmpty(trim(formData[fieldname]))&&validation[0].attendede3.required==="true"){
                    errors[fieldname] = "Please enter Have you attended E3 or not";
                    break; 
                }
            break;
            case 'isMember':
                if(isEmpty(trim(formData[fieldname]))&&validation[0].ismember.required==="true"){
                    errors[fieldname] = "Please enter Are you a member of AIAS";
                    break; 
                }
                if(!validateNameRegex(formData[fieldname].trim())) {
                    errors[fieldname] = "Only alphabets are allowed";
                }
            break;
            case 'supervisorName':
                if(isEmpty(trim(formData[fieldname]))&&validation[0].supervisorname.required==="true"){
                    errors[fieldname] = "Please enter Supervising Editor Name";
                    break; 
                }
                if(!validateNameRegex(formData[fieldname].trim())) {
                    errors[fieldname] = "Please enter Alphabetic Characters only ";
                }
    
                if(formData[fieldname].trim().length < validation[0].supervisorname.minlength){
                    errors[fieldname] = "Supervising Editor Name must be at least "+validation[0].supervisorname.minlength+" characters";        
                }
                if(formData[fieldname].trim().length > validation[0].supervisorname.maxlength){
                    errors[fieldname] = "Supervising Editor Name must be less than "+validation[0].supervisorname.maxlength+" characters";        
                }
            break;
            case 'supervisorEmail':
                if(isEmpty(trim(formData[fieldname]))&&validation[0].supervisoremail.required==="true"){
                    errors[fieldname] = "Please enter Supervising Editor Email";
                    break; 
                }
                if(!isEmail(formData[fieldname].trim())){
                    errors[fieldname] = "Supervising Editor Email Address entered is Invalid"; 
                }
                if(formData['email']===formData[fieldname]){
                    errors[fieldname] = "Email and Supervising Editor Email should not be same";
                }
            break;
            case 'subscriberCount':
                    if(isEmpty(trim(formData[fieldname]))&&validation[0].subscribercount.required==="true"){
                        errors[fieldname] = "Please enter Subscriber Count";
                        break; 
                    }
                    if(formData[fieldname].trim().length > validation[0].subscribercount.maxlength){
                        errors[fieldname] = "Subscriber Count must be less than "+validation[0].subscribercount.maxlength+" characters";        
                    }
                    if(!validateSubscriberCount(formData[fieldname].trim())) {
                        errors[fieldname] = "Please enter only Numbers ";
                   }
            break;
            case 'linktoChannel':
                if(formData[fieldname].trim().length < validation[0].linktochannel.minlength){
                    errors[fieldname] = "Link to Channel must be at least "+validation[0].linktochannel.minlength+" characters";        
                }
                if(formData[fieldname].trim().length > validation[0].linktochannel.maxlength){
                    errors[fieldname] = "Link to Channel must be less than "+validation[0].linktochannel.maxlength+" characters";        
                }
                if(isEmpty(trim(formData[fieldname]))&&validation[0].linktochannel.required==="true"){
                    errors[fieldname] = "Please enter Link to Channel";
                    break; 
                }
                if(!isEmpty(trim(formData[fieldname]))&&isURL(formData[fieldname]) === false){
                    errors[fieldname] = "Please enter valid Link to Channel";
                    break;
                }
               
            break;
            case 'linktoWebsite':
              if(formData[fieldname].trim().length < validation[0].linktowebsite.minlength){
                    errors[fieldname] = "Link to Website must be at least "+validation[0].linktowebsite.minlength+" characters";        
                }
                if(formData[fieldname].trim().length > validation[0].linktowebsite.maxlength){
                    errors[fieldname] = "Link to Website must be less than "+validation[0].linktowebsite.maxlength+" characters";        
                }
                if(isEmpty(trim(formData[fieldname]))&&validation[0].linktowebsite.required==="true"){
                    errors[fieldname] = "Please enter Link to Website";
                    break; 
                }
                if(!isEmpty(trim(formData[fieldname]))&&isURL(formData[fieldname]) === false){
                    errors[fieldname] = "Please enter valid Link to Website";
                    break;
                }
               
            break;
            case 'webSite':
                console.log('webSite')
                if(!isEmpty(trim(formData[fieldname]))&&isURL(formData[fieldname]) === false){
                    errors[fieldname] = "Please enter valid Website";
                    break;
                }
            break;
            case 'onlineHandle':
                if(isEmpty(trim(formData[fieldname]))&&validation[0].onlinehandle.required==="true"){
                    errors[fieldname] = "Please enter Online Handle";
                    break; 
                }
                if(!validateJobTitle(formData[fieldname].trim())) {
                    errors[fieldname] = "Please enter Alphabetic Characters only ";
                }
                if(formData[fieldname].trim().length < validation[0].onlinehandle.minlength){
                    errors[fieldname] = "Online Handle must be at least "+validation[0].onlinehandle.minlength+" characters";        
                }
                if(formData[fieldname].trim().length > validation[0].onlinehandle.maxlength){
                    errors[fieldname] = "Online Handle must be less than "+validation[0].onlinehandle.maxlength+" characters";        
                }
            break;
            case 'partneredChannel':
                if(isEmpty(trim(formData[fieldname]))&&validation[0].partneredchannel.required==="true"){
                    errors[fieldname] = "Please enter the Partnered Channel";
                    break; 
                }
                if(!validateJobTitle(formData[fieldname].trim())) {
                    errors[fieldname] = "Please enter Alphabetic Characters only ";
                }
                if(formData[fieldname].trim().length < validation[0].partneredchannel.minlength){
                    errors[fieldname] = "Partnered Channel must be at least "+validation[0].partneredchannel.minlength+" characters";        
                }
                if(formData[fieldname].trim().length > validation[0].partneredchannel.maxlength){
                    errors[fieldname] = "Partnered Channel must be less than "+validation[0].partneredchannel.maxlength+" characters";        
                }
            break;
            case 'nameofChannel':
            if(isEmpty(trim(formData[fieldname]))&&validation[0].nameofchannel.required==="true"){
                errors[fieldname] = "Please enter the Name of Channel";
                break; 
            }
            if(formData[fieldname].trim().length < validation[0].nameofchannel.minlength){
                errors[fieldname] = "Name of Channel must be at least "+validation[0].nameofchannel.minlength+" characters";        
            }
            if(formData[fieldname].trim().length > validation[0].nameofchannel.maxlength){
                errors[fieldname] = "Name of Channel must be less than "+validation[0].nameofchannel.maxlength+" characters";        
            }
            break;
            // case 'coveredE3':
            //     if(formData[fieldname].length===0){
            //         errors[fieldname] = "Please select the years";
            //         break; 
            //     }
            // break;
            case 'socialMediaHandles':
                if(isEmpty(trim(formData[fieldname]))&&validation[0].socialmediahandles.required==="true"){
                    errors[fieldname] = "Please enter Social Media Handles";
                    break;
                }
                if(!validateNameRegex(formData[fieldname].trim())) {
                    errors[fieldname]  = "Please enter Alphabetic Characters only ";
                }
                if(formData[fieldname].trim().length < validation[0].socialmediahandles.minlength){
                    errors[fieldname]  = "Social Media Handles must be at least "+validation[0].socialmediahandles.minlength+" characters";      
                }
                if(formData[fieldname].trim().length > validation[0].socialmediahandles.maxlength){
                    errors[fieldname]  = "Social Media Handles must be less than "+validation[0].socialmediahandles.maxlength+" characters";       
                }
                break;
                
            case 'socialMediaHandlesArray':
                for(let i=0; i<formData[fieldname].length; i++) {
                    if(isEmpty(trim(formData[fieldname][i].handle))&&validation[0].socialmediahandles.required==="true"){
                        errors["socialMediaHandles_Field_"+i] = "Please enter Social Media Handles";
                        // continue;
                    }
                    if(!isEmpty(trim(formData[fieldname][i].handle)) && !validateNameRegex(formData[fieldname][i].handle.trim())) {
                        errors["socialMediaHandles_Field_"+i]  = "Please enter Alphabetic Characters only ";
                        // continue;
                    }
                    if(!isEmpty(trim(formData[fieldname][i].handle)) && formData[fieldname][i].handle.trim().length < validation[0].socialmediahandles.minlength){
                        errors["socialMediaHandles_Field_"+i]  = "Social Media Handles must be at least "+validation[0].socialmediahandles.minlength+" characters";
                        // continue;        
                    }
                    if(formData[fieldname][i].handle.trim().length > validation[0].socialmediahandles.maxlength){
                        errors["socialMediaHandles_Field_"+i]  = "Social Media Handles must be less than "+validation[0].socialmediahandles.maxlength+" characters"; 
                        // continue;       
                    }
                    console.log(formData[fieldname][i].subscriberCount,"formData[fieldname]",validation[0].subscribercount.required)
                    if(isEmpty(trim(formData[fieldname][i].subscriberCount)) && validation[0].subscribercount.required==="true"){
                        errors["subscriberCount_Field_"+i]  = "Please enter Subscriber Count";
                        // continue; 
                    }
                    if(formData[fieldname][i].subscriberCount.trim().length > validation[0].subscribercount.maxlength){
                        errors["subscriberCount_Field_"+i]  = "Subscriber Count must be less than "+validation[0].subscribercount.maxlength+" characters";
                        // continue;        
                    }


                }
                
            break;
            case 'employerPhone':
            if(isEmpty(trim(formData[fieldname]))&&validation[0].employerphone.required==="true"){
                errors[fieldname] = "Please enter Primary Business Phone of Employer";
                break; 
            }
            if(!validatePhoneNumber(formData[fieldname].trim())){
                errors[fieldname] = "Phone Number is Invalid";        
            }
            break;
            case 'country':
            if(isEmpty(trim(formData[fieldname]))&&validation[0].country.required==="true"){
                errors[fieldname] = "Please enter Country";
                break; 
            }
            if(!validateState(formData[fieldname].trim())) {
                errors[fieldname] = "Special characters and numbers are not allowed";
            }
            break;
            case 'state':
            if(isEmpty(trim(formData[fieldname]))&&validation[0].state.required==="true"){
                errors[fieldname] = "Please enter State";
                break;
            }
            if(!validateState(formData[fieldname].trim())) {
                errors[fieldname] = "Special characters and numbers are not allowed";
            }
            if(formData[fieldname].trim().length < validation[0].state.minlength){
                errors[fieldname] = "State name must be at least "+validation[0].state.minlength+" characters";        
            }
            if(formData[fieldname].trim().length > validation[0].state.maxlength){
                errors[fieldname] = "State name must be less than "+validation[0].state.maxlength+" characters";        
            }
            break;
            case 'city':
            if(isEmpty(trim(formData[fieldname]))&&validation[0].city.required==="true"){
                errors[fieldname] = "Please enter City";
                break; 
            }
            if(!validateState(formData[fieldname].trim())) {
                errors[fieldname] = "Special characters and numbers are not allowed";
            }
            if(formData[fieldname].trim().length < validation[0].city.minlength){
                errors[fieldname] = "City name must be at least "+validation[0].city.minlength+" characters";        
            }
            if(formData[fieldname].trim().length > validation[0].city.maxlength){
                errors[fieldname] = "City name must be less than "+validation[0].city.maxlength+" characters";        
            }
            break;
            case 'postalCode':
            if(isEmpty(trim(formData[fieldname]))&&validation[0].postalcode.required==="true"){
                errors[fieldname] = "Please enter Postal Code";
                break; 
            }
            if(!validateAlphaNumeric(formData[fieldname].trim())) {
                errors[fieldname] = "Special characters are not allowed in Postal Code";
            }
            if(formData[fieldname].trim().length < validation[0].postalcode.minlength){
                errors[fieldname] = "Postal Code must be at least "+validation[0].postalcode.minlength+" characters";        
            }
            if(formData[fieldname].trim().length > validation[0].postalcode.maxlength){
                errors[fieldname] = "Postal Code must be less than "+validation[0].postalcode.maxlength+" characters";        
            }
            break;
            case 'address':

                if(isEmpty(trim(formData[fieldname]))&&validation[0].address.required==="true"){
                    errors[fieldname] = "Please enter Address";
                    break; 
                }

                if(formData[fieldname].trim().length < validation[0].address.minlength){
                    errors[fieldname] = "Address must be at least "+validation[0].address.minlength+" characters";        
                }
                if(formData[fieldname].trim().length > validation[0].address.maxlength){
                    errors[fieldname] = "Address must be less than "+validation[0].address.maxlength+" characters";        
                }
            break;
            case 'contactNumber':

                if(isEmpty(trim(formData[fieldname]))&&validation[0].contactnumber.required==="true"){
                    errors[fieldname] = "Please enter Phone Number";
                    break; 
                }

                if(!validatePhoneNumber(formData[fieldname].trim())){
                    errors[fieldname] = "Phone Number is Invalid";        
                }
            break; 
            case 'email':

                if(isEmpty(trim(formData[fieldname]))&&validation[0].email.required==="true"){
                    errors[fieldname] = "Please enter Email Address";
                    break; 
                }

                if(!isEmail(formData[fieldname].trim())){
                    errors[fieldname] = "Email Address entered is Invalid"; 
                }
                // validate email format
            break; 
            case 'password':
            case 'pwd':
                if(isEmpty(trim(formData[fieldname]))&&validation[0].password.required==="true"){
                    errors[fieldname] = "Please enter Password";
                }

                if(isEmpty(trim(formData[validation[0].password.CONFIRM_PASSOWRD_FIELD]))){
                    errors[validation[0].password.CONFIRM_PASSOWRD_FIELD] = "Please enter Confirm Password";
                }

                if( formData[validation[0].password.CONFIRM_PASSOWRD_FIELD] != undefined && 
                    isEmpty(trim(formData[validation[0].password.CONFIRM_PASSOWRD_FIELD]))){
                    errors[validation[0].password.CONFIRM_PASSOWRD_FIELD] = "Please enter Confirm Password";
                    break;
                }

                if(formData[fieldname].trim().length < validation[0].password.PASSWORD_LENGTH){
                    errors[fieldname] = "Password must be at least "+validation[0].password.PASSWORD_LENGTH+" characters";      
                    break;  
                }
                if(formData[fieldname].trim().length > validation[0].password.PASSWORD_MAX_LENGTH){
                    errors[fieldname] = "Password must be less than "+validation[0].password.PASSWORD_MAX_LENGTH+" characters";      
                    break;  
                }

                /*if(formData[validation[0].password.CONFIRM_PASSOWRD_FIELD] != undefined && 
                    formData[validation[0].password.CONFIRM_PASSOWRD_FIELD].trim().length < validation[0].password.PASSWORD_LENGTH){
                    errors[validation[0].password.CONFIRM_PASSOWRD_FIELD] = "Confirm Password must be at least "+
                    validation[0].password.PASSWORD_LENGTH+" characters";        
                    break;
                }*/

                if(formData[validation[0].password.CONFIRM_PASSOWRD_FIELD] != undefined && 
                    formData[fieldname].trim().length >= validation[0].password.PASSWORD_LENGTH && 
                    formData[validation[0].password.CONFIRM_PASSOWRD_FIELD].trim() !== formData[fieldname].trim()){
                    errors[validation[0].password.CONFIRM_PASSOWRD_FIELD] = "Passwords not matching";        
                    break;
                }
                if(formData[validation[0].password.CONFIRM_PASSOWRD_FIELD] != undefined &&
                     !isPassword(formData[fieldname].trim(),passwordOptions)){
                    errors[fieldname] = "Please enter strong Password"
                    break;
                }

            break; 
            case 'licenseFileUpload':
                if(isEmpty(trim(formData[fieldname]))&&validation[0].licensefileupload.required==="true"){
                    errors[fieldname] = "Please upload License File";
                }
            break; 
            case 'photoFileUpload':
                console.log(formData[fieldname])
                if(Object.keys(formData[fieldname]).length === 0){
                    errors[fieldname] = "Please upload Photo ID Of Your Media Outlet";
                }
            break;
            case 'multiFileUpload':
                console.log(formData,"multi")
                console.log("length",Object.keys(formData[fieldname]).length)
                if(Object.keys(formData[fieldname]).length === 0){
                    errors[fieldname] = "Please upload Support Documents";
                }
                if(Object.keys(formData[fieldname]).length < formData.minVal && Object.keys(formData[fieldname]).length !== 0){
                    errors[fieldname] = "Minimum "+formData.minVal+" Support Documents Required";
                }
                if(Object.keys(formData[fieldname]).length > formData.maxVal){
                    errors[fieldname] = "Maximum "+formData.maxVal+" Support Documents Allowed";
                }
            break;
            case 'terms':
                if(!(formData[fieldname].Agreed)){
                    errors[fieldname] = "Please accept Terms of Services";    
                }
            break;  
            case 'company':
                if(formData[fieldname]){
                    if(formData[fieldname].trim().length < validation[0].company.minlength){
                        errors[fieldname] = "Company Name must be at least "+validation[0].company.minlength+" characters";        
                    }
                    if(formData[fieldname].trim().length > validation[0].company.maxlength){
                        errors[fieldname] = "Company Name must be less than "+validation[0].company.maxlength+" characters";        
                    }
                    if(!validateCompany(formData[fieldname].trim())){
                        errors[fieldname] = "Enter valid Company Name";        
                    }
                }
            break;
            case 'notes':
                if(formData[fieldname]){
                    if(formData[fieldname].trim().length < validation[0].notes.minlength){
                        errors[fieldname] = "Notes must be at least "+validation[0].notes.minlength+" characters";        
                    }
                    if(formData[fieldname].trim().length > validation[0].notes.maxlength){
                        errors[fieldname] = "Notes must be less than "+validation[0].notes.maxlength+" characters";        
                    }
                }
            break;
            case 'ManagerEmail':
                if(formData[fieldname]){
                    
                    if(!isEmail(formData[fieldname].trim())){
                        errors[fieldname] = "Manager Email Address entered is Invalid"; 
                    }
                    
                }
            break;
            case 'ManagerName':
                if(formData[fieldname]){
                    if(formData[fieldname].trim().length < validation[0].managername.minlength){
                        errors[fieldname] = "Manager Name must be at least "+validation[0].managername.minlength+" characters";        
                    }
                    if(formData[fieldname].trim().length > validation[0].managername.maxlength){
                        errors[fieldname] = "Manager Name must be less than "+validation[0].managername.maxlength+" characters";        
                    }
                    
                }
            break;
            case 'couponCode':
                if(formData[fieldname].trim().length !== 0 && !validateAlphaNumeric(formData[fieldname].trim())) {
                    errors[fieldname] = "Special characters are not allowed";
                }
                if(formData[fieldname].trim().length !== 0 && formData[fieldname].trim().length < validation[0].couponCode.minlength){
                    errors[fieldname] = "Coupon Code must be at least "+validation[0].couponCode.minlength+" characters";        
                }
                if(formData[fieldname].trim().length > validation[0].couponCode.maxlength){
                    errors[fieldname] = "Coupon Code must be less than "+validation[0].couponCode.maxlength+" characters";        
                }
            break;
            
        }
            

      });

    return errors;
}
export default validateData;