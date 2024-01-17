
let URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const btn = document.getElementById('newbtn');
const word = document.getElementById('word');
const text = document.getElementById('text');
const synonyms = document.getElementById('synonyms');
const meaning = document.getElementById('meaning');



btn.addEventListener('click', () => {
    let dataword = document.getElementById('dataword').value;
    URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${dataword}`;
    dictionary();
});

async function dictionary() {
    
   try {
        const response = await fetch(URL);
        const data =  await response.json();
        word.innerHTML = data[0].word;
        text.innerHTML = `${data[0].meanings[0].partOfSpeech} / ${data[0].phonetics[1].text} /`;
        meaning.innerHTML = data[0].meanings[0].definitions[0].definition;
        synonyms.innerHTML = data[0].meanings[0].synonyms[0];
   } catch (error) {
        console.log("error --------------------")
        console.log(error);
       
   }
    
}



