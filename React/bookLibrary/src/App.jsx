import Book from "./components/Book"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'
function App ()
{
  const books = [
		{
			url: "https://rukminim1.flixcart.com/image/832/832/kufuikw0/book/p/5/5/wings-of-fire-original-imag7j7xgquhgn3k.jpeg?q=70",
			title: "Wings of Fire",
			author: "APJ Abdul Kalam, Arun Tiwari",
		},
		{
			url: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg",
			title: "Rich Dad Poor Dad",
			author: "Robert T. Kiyosaki",
		},
		{
			url: "https://m.media-amazon.com/images/I/61OByUf1TfL._AC_UY327_FMwebp_QL65_.jpg",
			title: "The Monk Who Sold His Ferrari",
			author: "Robin Sharma",
		},
		{
			url: "https://m.media-amazon.com/images/I/71zytzrg6lL._AC_UY327_FMwebp_QL65_.jpg",
			title: "Atomic Habits",
			author: "James Clear",
		},
		{
			url: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UY327_FMwebp_QL65_.jpg",
			title: "Sapiens: A Brief History of Humankind",
			author: "Yuval Noah Harari",
		},
		{
			url: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg",
			title: "Ikigai: The Japanese Secret to a Long and Happy Life",
			author: "Héctor García, Francesc Miralles",
		},
		{
			url: "https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY327_FMwebp_QL65_.jpg",
			title: "The Psychology of Money",
			author: "Morgan Housel",
		},
		{
			url: "https://m.media-amazon.com/images/I/81Fyh2mrw4L._AC_UY327_FMwebp_QL65_.jpg",
			title: "Harry Potter and the Sorcerer's Stone",
			author: "J.K. Rowling",
		},
		{
			url: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UY327_FMwebp_QL65_.jpg",
			title: "To Kill a Mockingbird",
			author: "Harper Lee",
		},
		{
			url: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UY327_FMwebp_QL65_.jpg",
			title: "1984",
			author: "George Orwell",
		},
		{
			url: "https://m.media-amazon.com/images/I/71Q1tEcROZL._AC_UY327_FMwebp_QL65_.jpg",
			title: "Pride and Prejudice",
			author: "Jane Austen",
		},
		{
			url: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UY327_FMwebp_QL65_.jpg",
			title: "The Great Gatsby",
			author: "F. Scott Fitzgerald",
		},
		{
			url: "https://m.media-amazon.com/images/I/8125BDk3ulL._AC_UY327_FMwebp_QL65_.jpg",
			title: "The Catcher in the Rye",
			author: "J.D. Salinger",
		},
		{
			url: "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UY327_FMwebp_QL65_.jpg",
			title: "The Lord of the Rings",
			author: "J.R.R. Tolkien",
		},
		{
			url: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UY327_FMwebp_QL65_.jpg",
			title: "The Hobbit",
			author: "J.R.R. Tolkien",
		},
		{
			url: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg",
			title: "The Alchemist",
			author: "Paulo Coelho",
		},
		{
			url: "https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UY327_FMwebp_QL65_.jpg",
			title: "The Da Vinci Code",
			author: "Dan Brown",
		},
		{
			url: "https://m.media-amazon.com/images/I/61JfG+OllAL._AC_UY327_FMwebp_QL65_.jpg",
			title: "The Hunger Games",
			author: "Suzanne Collins",
		},
		{
			url: "https://m.media-amazon.com/images/I/71F4+7rkfqL._AC_UY327_FMwebp_QL65_.jpg",
			title: "Gone Girl",
			author: "Gillian Flynn",
		},
		{
			url: "https://m.media-amazon.com/images/I/81cpDnbOW4L._AC_UY327_FMwebp_QL65_.jpg",
			title: "The Girl on the Train",
			author: "Paula Hawkins",
		},
		{
			url: "https://m.media-amazon.com/images/I/81h2gWPTYJL._AC_UY327_FMwebp_QL65_.jpg",
			title: "Becoming",
			author: "Michelle Obama",
		},
		{
			url: "https://m.media-amazon.com/images/I/71zKMhJf56L._AC_UY327_FMwebp_QL65_.jpg",
			title: "Educated",
			author: "Tara Westover",
		},
		{
			url: "https://m.media-amazon.com/images/I/71m+kC4vjuL._AC_UY327_FMwebp_QL65_.jpg",
			title: "Thinking, Fast and Slow",
			author: "Daniel Kahneman",
		},
		{
			url: "https://m.media-amazon.com/images/I/61nTspM+BYL._AC_UY327_FMwebp_QL65_.jpg",
			title: "Man's Search for Meaning",
			author: "Viktor E. Frankl",
		},
		{
			url: "https://m.media-amazon.com/images/I/71t+V5APNsL._AC_UY327_FMwebp_QL65_.jpg",
			title: "How to Win Friends and Influence People",
			author: "Dale Carnegie",
		},
		{
			url: "https://m.media-amazon.com/images/I/61UH7NMOJpL._AC_UY327_FMwebp_QL65_.jpg",
			title: "The 7 Habits of Highly Effective People",
			author: "Stephen R. Covey",
		},
		{
			url: "https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UY327_FMwebp_QL65_.jpg",
			title: "The Subtle Art of Not Giving a F*ck",
			author: "Mark Manson",
		},
		{
			url: "https://m.media-amazon.com/images/I/81X5GedpiOL._AC_UY327_FMwebp_QL65_.jpg",
			title:
				"Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
			author: "Steven D. Levitt, Stephen J. Dubner",
		},
		{
			url: "https://m.media-amazon.com/images/I/71Ki+674IgL._AC_UY327_FMwebp_QL65_.jpg",
			title: "Blink: The Power of Thinking Without Thinking",
			author: "Malcolm Gladwell",
		},
		{
			url: "https://m.media-amazon.com/images/I/713j+tMLpgL._AC_UY327_FMwebp_QL65_.jpg",
			title: "Outliers: The Story of Success",
			author: "Malcolm Gladwell",
		},
		{
			url: "https://m.media-amazon.com/images/I/714FbKtXS+L._AC_UY327_FMwebp_QL65_.jpg",
			title: "The Power of Now: A Guide to Spiritual Enlightenment",
			author: "Eckhart Tolle",
		},
		{
			url: "https://m.media-amazon.com/images/I/81d+pLIFk+L._AC_UY327_FMwebp_QL65_.jpg",
			title: "Dune",
			author: "Frank Herbert",
		},
		{
			url: "https://m.media-amazon.com/images/I/81nDG92dGUL._AC_UY327_FMwebp_QL65_.jpg",
			title: "A Brief History of Time",
			author: "Stephen Hawking",
		},
		{
			url: "https://m.media-amazon.com/images/I/81vmJCNCm6L._AC_UY327_FMwebp_QL65_.jpg",
			title: "The Diary of a Young Girl",
			author: "Anne Frank",
		},
		{
			url: "https://m.media-amazon.com/images/I/71nlqBpNfTL._AC_UY327_FMwebp_QL65_.jpg",
			title: "Shantaram",
			author: "Gregory David Roberts",
		},
		{
			url: "https://m.media-amazon.com/images/I/61fqa6HNf3L._AC_UY327_FMwebp_QL65_.jpg",
			title: "Life of Pi",
			author: "Yann Martel",
		},
		{
			url: "https://m.media-amazon.com/images/I/81+j6+NXupL._AC_UY327_FMwebp_QL65_.jpg",
			title: "The Kite Runner",
			author: "Khaled Hosseini",
		},
		{
			url: "https://m.media-amazon.com/images/I/71Wu7kXqI+L._AC_UY327_FMwebp_QL65_.jpg",
			title: "A Thousand Splendid Suns",
			author: "Khaled Hosseini",
		},
		{
			url: "https://m.media-amazon.com/images/I/71+s6I+o6NL._AC_UY327_FMwebp_QL65_.jpg",
			title: "Brave New World",
			author: "Aldous Huxley",
		},
		{
			url: "https://m.media-amazon.com/images/I/61z7RDG3OIL._AC_UY327_FMwebp_QL65_.jpg",
			title: "Fahrenheit 451",
			author: "Ray Bradbury",
		},
	]
  return (
		<div>
			<Header />
			<div className='books'>
        {
          books.map((v,i) =>
          (
            <Book imgLink={v.url} title={v.title} author={v.author} />
          ))
        }
			</div>
			<Footer />
		</div>
	)
}
export default App