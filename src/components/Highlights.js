import Card from "./Card";
import Salad from "../assets/greek salad.jpg";
import Bruschetta from "../assets/bruchetta.svg";
import Dessert from "../assets/lemon dessert.jpg"

function Highlights() {
    const cards = [
        {
            img: Salad,
            title: "Greek salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutouns."
        },
        {
            img: Bruschetta,
            title: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
            img: Dessert,
            title: "Lemon dessert",
            price: "$5.99",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ]
    return (
        <section className="highlights">
            <div className="highlights-container">
                <div className="highlights-title">
                    <h2>This weeks special!</h2>
                    <button type="button"><h3>Online menu</h3></button>
                </div>
                <div className="highlights-cards">
                    <Card card={cards[0]} />
                    <Card card={cards[1]} />
                    <Card card={cards[2]} />
                </div>
            </div>
        </section>
    )
}

export default Highlights