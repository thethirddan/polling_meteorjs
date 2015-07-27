Template.pollForm.events({

  //handle form submission
  'submit form': function(event){

    //stop form from submitting
    event.preventDefault();

    //get the data we need for the form.
    var newPoll = {
      question: event.target.question.value,
      choices: [
        {text: event.target.choice1.value, votes: 0},
        {text: event.target.choice2.value, votes: 0},
        {text: event.target.choice3.value, votes: 0}
      ]
    };
      Polls.insert(newPoll);
  }
});
