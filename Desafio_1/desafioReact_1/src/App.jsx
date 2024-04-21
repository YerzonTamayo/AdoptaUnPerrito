import './App.css'
import MyCard from './components/MyCard';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>  
    <div className='content_2'>
    <Header titulo="Adopta un perrito"></Header>
      <div className='content'>
      <MyCard raza="Belga" color="primary" descripcion="Soy muy jugueton,cariñoso, tranquilo, estare hay para ti y tu para mi." nombre= "Rasputin" imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ve0uiDXMuxZ8Ki3qA-D3Lsa4OLr9yLq6skCbCj_Y3bSoHVuy4AhIVJuiPV2T0lUSPAw&usqp=CAU"></MyCard>
      <MyCard raza="Pitbull"  color="success" descripcion="Soy muy comfiable, amigable y dormilon, prometo no comerme tus zapatos." nombre= "king" imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIo0HDUNcpdVgFlnRmCQ-COuN2o9WGhb1EA&s"></MyCard>
      <MyCard raza="Terrier" color="secondary" descripcion = "Simpre te acompañare en las buenas y las malas, estare hay para ti." nombre="Lupe" imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEwQab3oo2_2V7uzp0BtsooHE-68o6L7tlQ&s"></MyCard>
      </div>
      <Footer></Footer>
    </div>
    </>
  )
}
export default App
