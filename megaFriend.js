var result =['lamia','rehenuma','nazia', 'jamila' ]
function megaFriend(string){
    var longest = string [0];
    for(var i=0; i<string.length; i++){
        var element =string [i];
        if(element> longest){
            longest=element;
        }
    }
    return longest;
}
