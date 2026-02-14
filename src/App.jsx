import { getDb } from "../src/db/db"
import { useState } from "react"
import Header from "./Components/Header"
import Order from "./Components/Order"
import MenuItem from "./Components/MenuItem"
import TipPercentageForm from "./Components/TipPercentageForm"
import OrderTotals from "./Components/OrderTotals" 
import './App.css'

function App() {

  const [order, setOrder] = useState([])
  const [tip, setTip] = useState(0)

  const addItem = (item) => {
    const itemExist = order.find(orderItem => orderItem.id === item.id)
    
    if(itemExist) {
        const updatedOrder = order.map( orderItem => orderItem.id === item.id ? 
            {...orderItem, quantity: orderItem.quantity + 1} : orderItem
        )
        setOrder(updatedOrder)
    } else {
        const newItem = {...item, quantity: 1}
        setOrder([...order, newItem])
    }
  }

  const removeItem = (id) => {
    setOrder(order.filter(item => item.id !== id))
  }

  const placeOrder = () => {
    setOrder([])
    setTip(0)
  }

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        
        {/*  El menu a la izquierda */}
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className="mt-10">
            {getDb.map(item => (
              <MenuItem 
                key={item.id} 
                item={item} 
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        {/* El pedido a la derecha */}
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              {/* Productos seleccionados */}
              <Order 
                order={order} 
                removeItem={removeItem}
              />
              
              {/* Formulario de propinas */}
              <TipPercentageForm 
                setTip={setTip}
                tip={tip}
              />

              {/* Totales y botón de guardar */}
              <OrderTotals 
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="text-center">La orden esta vacía</p>
          )}
        </div>

      </main>
    </>
  )
}

export default App