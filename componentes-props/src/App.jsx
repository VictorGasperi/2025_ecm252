import Pedido from "./Pedido"

const App = () => {

  return (
    
    <div className="container border p-3 mt-2">

      <div className="row">
        
        <div className="col-lg-6 col-xxl-3"> 
        {/* A responsividade com bootstrap dentro do grid system é feita dessa maneira */}

          <Pedido 
            data="22/02/2024" 
            titulo="SSD"
            descricao="Um SSD de 516GB"
            icone="hdd"
          />

        </div>

        <div className="col-lg-6 col-xxl-3">

        <Pedido 
            data={new Date().toLocaleDateString()}
            titulo="Livro"
            descricao="Harry Potter"
            icone="book"
          />

        </div>

        <div className="col-lg-6 col-xxl-3">
          
        <Pedido 
            data="21/07/2021" 
            titulo="Hipopótamo"
            descricao="Sim, isso mesmo"
            icone="hippo"
          />

        </div>

        <div className="col-lg-6 col-xxl-3">
          
        <Pedido 
            data={new Date().toLocaleTimeString()}
            titulo="Boneco de neve"
            descricao="Um boneco de neve"
            icone="snowman fa-shake"
          />

        </div>

      </div>

    </div>

  )

}

export default App