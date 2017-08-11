function QuoteController(){

	//Check to see if this should change to QuoteController
	var qs = new QuoteService()

	qs.getQuote(function(quote){
		console.log('What is the quote', quote)
	})
}
