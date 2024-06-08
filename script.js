const quoteBtn =document.getElementById('quote_btn');
const tweetBtn = document.getElementById('tweet_btn');

const quote= document.getElementById('quote');
const author= document.getElementById('author')

async function resetQuote() {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        if (response.ok) {
          quote.textContent = `"${data.content}"`;
          author.textContent = `-${data.author}`;

        } else {
          quote.textContent = "An error occured";
          console.log(data);
        }
}

resetQuote();

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML+ "---- by"+ author.innerHTML,"Tweet Window", "width=600, height=300")
}

quoteBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    resetQuote();
});

tweetBtn.addEventListener('click', tweet);