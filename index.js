function introduction(aki) {
    const name = aki
    const greeting = (`Hi, my name is ${name}.`)
    return (greeting)
}
function introductionWithLanguage(aki, Emberjs) {
    const name = aki
    const language = Emberjs
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
function introductionWithLanguageOptional(aki, language = "JavaScript") {
    const name = aki
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}