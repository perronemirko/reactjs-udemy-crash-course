const isArrayEmpty = (arr) => {
    if (arr !== undefined && arr !== null && arr.lenght > 0) {
        return true;
    }else{
        return false;
    }
}

const dumplogs = (message) => {
    console.log(message);
    
}

export {isArrayEmpty, dumplogs} ; // Name Exports you must import with their real name