export const validator = (name, last, email, service_type, checkbox) => {
    let errs = [];
    if (name.length < 2 && last.length < 2 ){
        errs.push('Please enter a valid First Name')
    }
    else if (email.trim().length < 5){
        errs.push('Enter a valid email ')
    }
    else if (service_type.length === 0){
        errs.push('Service Type can\'t be empty, pick one')
    }
    else if (checkbox === false){
        errs.push('Read and check if you agree with the terms of service for THE NETWORK and the Privacy Policy')
    }
    return errs;
}

