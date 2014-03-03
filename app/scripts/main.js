console.log('Great Job!');

var cheapItems = new ItemsCollection();
cheapItems.url += "&tags=art,painting&min_price=40.0&max_price=100";

var expensiveItems = new ItemsCollection();
expensiveItems.url += "&tags=art,painting&min_price=1000.0&max_price=5000";

var readyCollections = 0;

cheapItems.fetch().then(function(){ readyCollections += 1 })
expensiveItems.fetch().then(function(){ readyCollections += 1 })

var collectionReadyLoop = setInterval(function(){
  if (readyCollections === 2) {
    renderRows();
    clearInterval(collectionReadyLoop);
  }
}, 50)



function renderRows () {
  console.log('BOTH ARE FINISHED!')

  //                                    condition              if true              if false
  var sampleAmount = cheapItems.length < expensiveItems.length ? cheapItems.length : expensiveItems.length

  var quizArray = _.zip(  _.sample(cheapItems.models, sampleAmount),
                          _.sample(expensiveItems.models, sampleAmount));

  console.log("QUIZ ARRRRRRRRRRAY", quizArray);

  _.each(quizArray, function(row){
    new RowView({models: row});
  })
}
