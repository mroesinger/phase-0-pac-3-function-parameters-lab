function introduction(name){
    if(name === "Aki"){
    return `Hi, my name is ${name}.`
    }
    if(name === "Samip"){
    return `Hi, my name is ${name}.`
    }
}

function introductionWithLanguage(name, language){
    if(name === "Aki", "Ember.js"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
    }
    if(name === "Samip", "React"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`    
    }
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
    if(name === "Gracie", language === "Javascript", language === "Python"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
    }
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
    
}

