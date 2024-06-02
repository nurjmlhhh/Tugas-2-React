import Card from "./Card"

const biodata = [
    {id : 1, image : "harry.jpg", name : "Harry Potter", age : 13, born : "31 Juli 1980", address : "Inggris", hobby : ["Football", " Watching", "Singing"]},
    {id : 2, image : "Ron.jpg", name : "Ron Weasly", age : 13, born : "01 Maret 1980", address : "Paris", hobby : ["Badminton", " Writing", " Telling"]},
    {id : 3, image : "hermione.jpg", name : "Hermione Granger", age : 14, born : "19 September 1979", address : "New York", hobby : ["Read", " Swimming", " Travelling"]}
];

export default function CardList(){
    return(
        <>
        <div className="card-list">{biodata.map((a)=>(
            <Card key = {a.id} cardProps={a}/>
        ))}
        </div>
        </>
    )
}