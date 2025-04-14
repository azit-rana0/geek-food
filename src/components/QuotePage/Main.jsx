import "./Quote.css";
import Quote from "./Quote";
export default function Main() {
  const data = [
    {
      text: "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      title: "Adam Scott",
    },
    {
      text: "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
      title: "Adelle Davis",
    },
    {
      text: "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
      title: "Adelle Davis",
    },
    {
      text: "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
      title: "Albert Einstein",
    },
    {
      text: "Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
      title: "Alice May Brock",
    },
    {
      text: "Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, 'Your fatness is an affront to me, so we have the right to treat you as offensively as you appear.' Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.",
      title: "Calvin Trillin",
    },
    {
      text: "Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.",
      title: "Calvin Trillin",
    },
    {
      text: "Tell me what you eat, and I will tell you what you are.",
      title: "Cyra McFadden",
    },
    { text: "Health food makes me sick.", title: "Eike von Repkow" },
    {
      text: "The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found.",
      title: "Epictetus",
    },
    {
      text: "I no longer prepare food or drink with more than one ingredient.",
      title: "Epictetus",
    },
    {
      text: "Eating is really one of your indoor sports. You play three times a day, and it's well worth while to make the game as pleasant as possible.",
      title: "Fran Lebowitz",
    },
    {
      text: "My ability to tolerate shame, to compartmentalize it, to swallow it, increased right along with my belt size. it came with the territory of being heavy. Obese people have a lifetime of experience with shame.",
      title: "Fran Lebowitz",
    },
    {
      text: "The people who can most successfully lose weight and maintain a healthy life style are foodies. When it comes to healthy eating, people who know how to cook and make ingredients taste good have a distinct advantage over those who can't.",
      title: "G. K. Chesterton",
    },
    {
      text: "He who comes first, eats first. [Familiar as: First come first served.]",
      title: "Geoffrey Neighor",
    },
    {
      text: "Bear in mind that you should conduct yourself in life as at a feast.",
      title: "George Bernard Shaw",
    },
    {
      text: "Preach not to others what they should eat, but eat as becomes you, and be silent.",
      title: "George Dennison Prentice",
    },
    {
      text: "I have never cared much for fish - it floats in the belly as much as in the pond.",
      title: "Henry Bromel",
    },
    {
      text: "If the divine creator has taken pains to give us delicious and exquisite things to eat, the least we can do is prepare them well and serve them with ceremony.",
      title: "J. R. R. Tolkien",
    },
    { text: "Food is an important part of a balanced diet.", title: "" },
    { text: "My favourite animal is steak.", title: "" },
    {
      text: "Music with dinner is an insult both to the cook and the violinist.",
      title: "",
    },
    {
      text: "Just as animal research tells us that gluttony and sloth are side effects of a drive to accumulate body fat, it also says that eating in moderation and being physically active (literally, having the energy to exercise) is not evidence of moral rectitude. Rather, they're the metabolic benefits of a body that's programmed to remain lean.",
      title: "",
    },
    {
      text: "We don't get fat because we overeat; we overeat because we're getting fat.",
      title: "",
    },
    { text: "Good food ends with good talk.", title: "" },
    { text: "There is no love sincerer than the love of food.", title: "" },
    {
      text: "What some call health if purchased by perpetual anxiety about diet, isn't much better than tedious disease.",
      title: "",
    },
    { text: "It's important to begin a search on a full stomach.", title: "" },
    {
      text: "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
      title: "",
    },
  ];
  return (
    <>
      <div className="quoteMain">
        <Quote data={data} />
      </div>
    </>
  );
}
