/* Make the api's requests here*/
import $ from "jquery";

const bibleApiUrl = 'https://labs.bible.org/api/?passage=random&type=json';
const kanyeApiUrl = 'https://api.kanye.rest';

export function getKanyeSentence(callback){
    $.ajax({
        url: kanyeApiUrl, 
        success: function(result){
            callback(result.quote);
        }
    });
}

export function getBibleSentence(callback) {
    $.ajax({
        url: bibleApiUrl, 
        crossDomain: true,
        dataType: 'jsonp',
        success: function(result){
            callback(result[0].text.split("<a")[0]);
        }
    });
}
