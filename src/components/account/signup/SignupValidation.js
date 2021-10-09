const NAME_LENGTH=5;
const PASSWORD_LENGTH=8;
const COMPANY_LENGTH=3
const FIRST_NAME_LENGTH=3;
const LAST_NAME_LENGTH=1;
const WEBSITE_LENGTH=3
const MEDIA_CREDENTIALS_LENGTH=3;
const ADDRESS_LENGTH=10;
const CONTACT_NUMBER_LENGTH=10;
const CONFIRM_PASSOWRD_FIELD="confirmPassword";

const PASSWORD_VALID_MIN_LOWER = 1;
const PASSWORD_VALID_MIN_UPPER = 1;
const PASSWORD_VALID_MIN_NUMBER = 1;

import isEmail from "validator/lib/isEmail";
import isPassword from "validator/lib/isStrongPassword";
import trim from "validator/lib/trim";
import isEmpty from "validator/lib/isEmpty";

export const passwordOptions = {
    minLength: PASSWORD_LENGTH,
    minLowercase: PASSWORD_VALID_MIN_LOWER,
    minUppercase: PASSWORD_VALID_MIN_UPPER,
    minNumbers: PASSWORD_VALID_MIN_NUMBER,
    minSymbols: 0
}

const validatePhoneNumber=(input_str) =>
{
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(input_str);
}
const validateNameRegex=(string_inp)=> {
    var regex = /^[-\w ]+$/;
    return regex.test(string_inp);
}

export const validateSignupData = (formData) => {
    let errors = {};
    Object.keys(formData).map(fieldname=>{
        switch(fieldname){
            case 'name':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Name";
                    break; 
                }

                if(!validateNameRegex(formData[fieldname].trim())) {
                    errors[fieldname] = "Special characters are not allowed";
                }

                if(formData[fieldname].trim().length < NAME_LENGTH){
                    errors[fieldname] = "Name must be at least "+NAME_LENGTH+" characters";        
                }
                break;

            case 'firstName':

                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter First Name";
                    break; 
                }

                if(!validateNameRegex(formData[fieldname].trim())) {
                    errors[fieldname] = "Special characters are not allowed";
                }

                if(formData[fieldname].trim().length < FIRST_NAME_LENGTH){
                    errors[fieldname] = "Must be at least "+FIRST_NAME_LENGTH+" characters";        
                }
                break;
            case 'publicationName':

                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Name of Publication";
                    break; 
                }
                break;
            
            case 'publicationLink':

                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Link to Publication";
                    break; 
                }
                break;
            case 'jobTitle':

                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Job Title";
                    break; 
                }
                break;

            case 'Age':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Age";
                    break; 
                }
                break;
            
            case 'dateofBirth':
                if(isEmpty(trim(formData[fieldname]))|| formData[fieldname] === "Invalid date"){
                    errors[fieldname] = "Please enter Date of Birth";
                    break; 
                }
                break;
            
            case 'gender':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Gender";
                    break; 
                }
                break;
            
            case 'attendedE3':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Have you attended E3 or not";
                    break; 
                }
                break;
            case 'isMember':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Are you a member of AIAS";
                    break; 
                }
                break;
            case 'supervisorName':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Supervising Editor Name";
                    break; 
                }
                break;
            case 'supervisorEmail':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Supervising Editor Email";
                    break; 
                }
                break;
            case 'subscriberCount':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Subscriber Count";
                    break; 
                }
                break;
            case 'linktoChannel':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Link to the Channel";
                    break; 
                }
                break;
            case 'onlineHandle':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Online Handle";
                    break; 
                }
                break;
            case 'partneredChannel':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter the Partnered Channel";
                    break; 
                }
                break;
            case 'nameofChannel':
            if(isEmpty(trim(formData[fieldname]))){
                errors[fieldname] = "Please enter the Name of Channel";
                break; 
            }
            break;
            case 'coveredE3':
                if(formData[fieldname].length===0){
                    errors[fieldname] = "Please select the years";
                    break; 
                }
                break;
            case 'socialMediaHandles':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter socialMediaHandles";
                    break; 
                }
                break;
            case 'employerPhone':
            if(isEmpty(trim(formData[fieldname]))){
                errors[fieldname] = "Please enter Primary Business Phone of Employer";
                break; 
            }
            break;
            case 'country':
            if(isEmpty(trim(formData[fieldname]))){
                errors[fieldname] = "Please enter country";
                break; 
            }
            break;
            case 'state':
            if(isEmpty(trim(formData[fieldname]))){
                errors[fieldname] = "Please enter state";
                break;
            }
            break;
            case 'city':
            if(isEmpty(trim(formData[fieldname]))){
                errors[fieldname] = "Please enter city";
                break; 
            }
            break;
            case 'postalCode':
            if(isEmpty(trim(formData[fieldname]))){
                errors[fieldname] = "Please enter PostalCode";
                break; 
            }
            break;
            case 'lastName':

                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Last Name";
                    break; 
                }

                if(!validateNameRegex(formData[fieldname].trim())) {
                    errors[fieldname] = "Special characters are not allowed";
                }

                if(formData[fieldname].trim().length < LAST_NAME_LENGTH){
                    errors[fieldname] = "Must be at least "+LAST_NAME_LENGTH+" characters";        
                }
                break;
            case 'company':
                // if(formData[fieldname].trim().length <= COMPANY_LENGTH){
                //     errors[fieldname] = "Company must be at least "+COMPANY_LENGTH+" characters";        
                // }
                 break;
            case 'webSite':
                // if(formData[fieldname].trim().length <= WEBSITE_LENGTH){
                //     errors[fieldname] = "Website must be at least "+WEBSITE_LENGTH+" characters";        
                // }
                break;     
            case 'address':

                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Address";
                    break; 
                }

                if(formData[fieldname].trim().length < ADDRESS_LENGTH){
                    errors[fieldname] = "Must be at least "+ADDRESS_LENGTH+" characters";        
                }
                break;
            case 'contactNumber':

                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Phone Number";
                    break; 
                }

                if(!validatePhoneNumber(formData[fieldname].trim())){
                    errors[fieldname] = "Phone Number is Invalid";        
                }
                break; 
            case 'email':

                if(isEmpty(trim(formData[fieldname]))){
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
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please enter Password";
                    break; 
                }

                if( formData[CONFIRM_PASSOWRD_FIELD] != undefined && isEmpty(trim(formData[CONFIRM_PASSOWRD_FIELD]))){
                    errors[CONFIRM_PASSOWRD_FIELD] = "Please enter Confirm Password";
                    break; 
                }

                if(formData[fieldname].trim().length < PASSWORD_LENGTH){
                    errors[fieldname] = "Must be at least "+PASSWORD_LENGTH+" characters";      
                    break;  
                }

                if(formData[CONFIRM_PASSOWRD_FIELD] != undefined && formData[CONFIRM_PASSOWRD_FIELD].trim().length < PASSWORD_LENGTH){
                    errors[CONFIRM_PASSOWRD_FIELD] = "Confirm Password must be same as Password";        
                    break;
                }

                if(formData[CONFIRM_PASSOWRD_FIELD] != undefined && formData[fieldname].trim().length >= PASSWORD_LENGTH && formData[CONFIRM_PASSOWRD_FIELD].trim() !== formData[fieldname].trim()){
                    errors[fieldname] = "Passwords not matching";        
                    break;
                }
                if(formData[CONFIRM_PASSOWRD_FIELD] != undefined && !isPassword(formData[fieldname].trim(),passwordOptions)){
                    errors[fieldname] = "Please enter Strong password"; 
                    break;
                }

                break; 
            case 'mediaCredentials':
                // if(formData[fieldname].trim().length <= MEDIA_CREDENTIALS_LENGTH){
                //     errors[fieldname] = "Address must be at least "+MEDIA_CREDENTIALS_LENGTH+" characters";        
                // }
                break; 
            case 'licenseFileUpload':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please upload License file";
                }
                break; 
            case 'photoFileUpload':
                if(Object.keys(formData[fieldname]).length === 0){
                    errors[fieldname] = "Please upload Photo ID Of Your Media Outlet";
                }
                break;
            case 'multiFileUpload':

                if(Object.keys(formData[fieldname]).length === 0){
                    errors[fieldname] = "Please upload Support Documents";
                }
                if(Object.keys(formData[fieldname]).length < formData.minVal && Object.keys(formData[fieldname]).length !== 0){
                    errors[fieldname] = "Minimum "+formData.minVal+" Support Documents Required";
                }
                if(Object.keys(formData[fieldname]).length > formData.maxVal){
                    errors[fieldname] = "Maximum "+formData.maxVal+" Support Documents Required";
                }
                break;
            case 'mediaOptions':
                if(isEmpty(trim(formData[fieldname]))){
                    errors[fieldname] = "Please select Industry type";
                }

                break;
            case 'terms':
                if(!(formData[fieldname].Agreed)){
                    errors[fieldname] = "Please accept Terms of services";    
                }
                break;                   
        }

      });

    return errors;
    
}