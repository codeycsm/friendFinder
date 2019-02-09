let express = require("express"),
  router = express.Router(),
  friends = require("../data/friends");

router.get("/api/friends", function(req, res) {
  res.json(friends);
});

router.post("/api/friends", function(req, res) {
  let difference = 50;
  let newFriend = req.body;
  let foundFriend = {
    name: "",
    image: "",
    answers: []
  };
  for (let i = 0; i < friends.length; i++) {
    let total = 0;
    for (let j = 0; j < friends[i].answers.length; j++) {
      total += newFriend.answers[j] - friends[i].answers[j];
    }
    if (Math.abs(total) < difference) {
      difference = Math.abs(total);
      foundFriend.name = friends[i].name;
      foundFriend.image = friends[i].image;
      foundFriend.answers = friends[i].answers;
    }
  }
  res.json(foundFriend);
  friends.push(newFriend);
});

module.exports = router;
