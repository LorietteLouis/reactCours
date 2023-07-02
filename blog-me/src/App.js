
import './App.css';
import ArticleList from './ArticleList';
import CartProduct from './CartProduct';
import Footer from './Footer';
import Header from './Header';
import LastArticle from './LastArticle';

function App() {
const cartFromApi = {
  items: [
    {
      product: "Chaise",
      amount: 200,
      quantity: 2,
    },
  ],
  totalAmount: 400,
  createdAt: "2021-09-01T10:00:00.000Z",
  user: "John Doe",
};

const productsFromApi = [
  {
    name: "Chaise",
    price: 100,
    description: "Une chaise",
    publishedAt: "2021-10-01T10:00:00.000Z",
    category: "meuble",
  },
  {
    name: "Table",
    price: 200,
    description: "Une table",
    publishedAt: "2021-09-01T10:00:00.000Z",
    category: "meuble",
  },
  {
    name: "Canapé",
    price: 300,
    description: "Un canapé",
    publishedAt: "2021-09-01T10:00:00.000Z",
    category: "meuble",
  },
  {
    name: "Télé",
    price: 400,
    description: "Une télé",
    publishedAt: "2021-08-05T10:00:00.000Z",
    category: "électroménager",
  },
  {
    name: "Frigo",
    price: 500,
    description: "Un frigo",
    publishedAt: "2021-06-03T10:00:00.000Z",
    category: "électroménager",
  },
  {
    name: "Four",
    price: 600,
    description: "Un four",
    publishedAt: "2021-08-12T10:00:00.000Z",
    category: "électroménager",
  },
]; 


  return (
    <>
    <Header cartFromApi={cartFromApi}/>
    <div className = "articleProduct">
      <LastArticle productsFromApi = {productsFromApi}/>
      <ArticleList productsFromApi={productsFromApi}/>
    </div>
    <CartProduct cartFromApi={cartFromApi}/>
    <Footer/>
    </>
  );

}

export default App;
