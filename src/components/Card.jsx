import "./style.css";
import { HeartHandshake, BadgeInfo, MessageSquareMore } from "lucide-react";
/* eslint-disable react/prop-types */
export default function Card({ cardProps }) {
  const greet = () => {
    alert("Annyeong " + cardProps.name + "👋");
  };
  const info = () => {
    alert(
      "My Biodata📓 \n\nNama : " +
        cardProps.name +
        "\nBorn : " +
        cardProps.born +
        "\nAge : " +
        cardProps.age +
        "\nAddress : " +
        cardProps.address +
        "\nHobby : " +
        (cardProps.hobby ? cardProps.hobby.join(", ") : "None")
    );
  };
  const comment = () => {
    const userInput = prompt("Please enter your comment:");

    if (userInput === null || userInput.trim() === "") {
      alert("Comment cannot be empty");
    } else {
      alert("success added : " + userInput);
    }
  };
  return (
    <>
      <div className="card">
        <img src={cardProps.image} alt="" className="card" />
        <p>{cardProps.name}</p>
        <button onClick={greet}>
          <HeartHandshake />
        </button>
        <button onClick={() => info()}>
          <BadgeInfo />
        </button>
        <button onClick={() => comment()}>
          <MessageSquareMore />
        </button>
      </div>
    </>
  );
}
