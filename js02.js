const selfClosingTagRegex = /<\w+(\s+\w+="[^"]*"\s*\/>)/;

const validTags = [
    "</>",
    "<img src = />"

];

validTags.forEach(tag => {
    console.log('${tag} : ${selfClosingTagRegex.test(tag) ? "Valid" : "Invalid"}');
});

invalidTags.forEach(tag => {
    console.log('${tag} : ${selfClosingTagRegex.test(tag) ? "Valid" : "Invalid"}');
});