import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import CartContextProvider from './context/CartContext';
import { CategoryContext } from './context/CategoryContext';
//import axios from "axios";
import ItemCartContainer from './components/CartContainer';
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";
import { collection, getDocs } from "firebase/firestore" //addDoc

function App() {
  const [dataMock, setDataMock] = useState()
  const contextCategory = useContext(CategoryContext)

  const firebaseConfig = {
    apiKey: "",
    authDomain: "wineshop-blackcabe.firebaseapp.com",
    projectId: "wineshop-blackcabe",
    storageBucket: "wineshop-blackcabe.appspot.com",
    messagingSenderId: "533829335597",
    appId: "1:533829335597:web:f579693529f10dd15fd6a4",
    measurementId: "G-H7DMC2NDWH"
  };

  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  const db = getFirestore(app)


  const getData = async () => {
    // const response = await axios.get("/mock/mock-data.json")
    // setDataMock(response.data)
    const productList = []
    const querySnapshot = await getDocs(collection(db, "wines"));
  querySnapshot.forEach((doc) => {   
    productList.push({ id: doc.id, ...doc.data() }) 
  }
  );
  setDataMock(productList);

  }
  // async function addData(){
  //   try {
  //     const docRef = await addDoc(collection(db, "wines"), 
  //     {
  //       "cantidad":1,
  //       "stock":19,
  //       "nombre": "Espumante Casillero del Diablo Extra Brut",
  //       "marca": "CONCHA Y TORO",
  //       "precio": 1360,
  //       "categoria": "Espumante",
  //       "imagen": "https://cdn.shopify.com/s/files/1/0215/7051/9140/products/espumante-casillero-del-diablo-extra-brut-vino-concha-y-toro-436773_500x.jpg?v=1636549366",
  //       "descripcion": "La emblemática marca chilena de vinos ahora también se produce en Mendoza, de la mano de cinco etiquetas. Cuando se habla de Casillero del Diablo, de bodega Concha y Toro, automáticamente se piensa en una marca de origen chileno, muy fuerte a nivel global, dado que está presente en unos 140 países y se posicionó como una de las top a nivel mundial. Hace más de 100 años para evitar que sus vinos desaparecieran Don Melchor de Concha y Toro difundió el rumor que en su bodega habitaba el Diablo. Dicen que, como el fuego, rápidamente el rumor se propagó y que en poco tiempo en todos se instaló el temor. Nunca nadie pudo confirmar el rumor acerca del guardián de sus bodegas y su existencia... Hoy, La Leyenda sigue viva. Aroma tropical con notas cítricas, florales y de futa seca. En boca tiene cxcelente balance de la acidez, entrada fresca . Final dulce, redondo y largo. Color amarillo verdoso con tonos plata."
  //   }
  //     );
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  useEffect(() => {
    getData()
    // addData()
      // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          {dataMock && <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a Black Cave Wine Shop" dataMock={dataMock} />} />
            <Route path="/category/:id" element={<ItemListContainer greeting={"Encuntra los mejores vinos " + contextCategory?.category} dataMock={dataMock} />} />
            <Route path="/item/:id" element={<ItemDetailContainer greeting="Detalle de producto" dataMock={dataMock} />} />
            <Route path="/cart" element={<ItemCartContainer greeting="Bienvenido a tu carrito" />} />
          </Routes>}
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
