function QuoteController(){

	//Check to see if this should change to QuoteController
	var qc = new QuoteService()

	drawQuote = function (quote) {
        var template = ''
        var quoteElem = document.getElementById('quote')
        // var
		template += `
			<div class="quotes">${quote.quote}</div>
			<div class="quotes-author">~${quote.author}~</div>
        `
        quoteElem.innerHTML = template
    }
	
	
	qc.getQuote(function(quote){
		//console.log('What is the quote', quote)
		qc.getQuote(drawQuote)
	}) 
}
