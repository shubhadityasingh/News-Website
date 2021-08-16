console.log('index.js ACTIVATED!');
// cdd394ad60af4d22b57a3c34bea5f021

let source = 'bbc-news';
let apikey = 'cdd394ad60af4d22b57a3c34bea5f021';

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');
console.log(newsAccordion);
// Creating an AJAX GET request
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);

        let newsHTML = "";
        articles.forEach(function(element, index) {
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Breaking News: </b>  ${element.title}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="accordion-body">
                                    ${element.description} <a href="${element.url}" target="_blank">Read more</a>
                                </div>
                            </div>
                        </div>`;
            newsHTML += news;
        });

        newsAccordion.innerHTML = newsHTML;
    }
    else {
        console.error('Some error occured!');
    }
}

xhr.send();

let news = `<div class="accordion" id="newsAccordion">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the
                collapse plugin adds the appropriate classes that we use to style each element. These classes
                control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                modify any of this with custom CSS or overriding our default variables. It's also worth noting
                that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                does limit overflow.
            </div>
        </div>
    </div>
</div>`