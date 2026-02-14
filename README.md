# Calculadora de Propinas y Consumo

Este proyecto es una aplicación web desarrollada con **React** y estilizada con **Tailwind CSS** que simula el sistema de pedidos y facturación de un restaurante.

El objetivo principal es aplicar conceptos fundamentales de React como el manejo de estado complejo, la comunicación entre componentes, el uso de hooks y la reactividad en tiempo real.


---

### ¿Qué es React?

React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas. En este proyecto, aprovechamos su capacidad de dividir la interfaz en **componentes reutilizables** y su manejo eficiente del DOM para actualizar los totales y la lista de consumo instantáneamente sin recargar la página.

---

### Instalación y Ejecución

Para correr este proyecto localmente, necesitas tener instalado **Node.js** en tu computadora.

#### 1. Clonar el proyecto
```bash
git clone <URL_DE_TU_REPOSITORIO>

```

#### 2. Instalar dependencias

React y Vite necesitan varias librerías para funcionar. Ejecuta este comando en la carpeta del proyecto para descargar la carpeta `node_modules`:

```bash
npm install

```

#### 3. Ejecutar el proyecto

Inicia el servidor de desarrollo local (Vite):

```bash
npm run dev

```

Esto te mostrará una URL (generalmente `http://localhost:5173/`) para ver la app.

---

### Cómo se creó este proyecto

Este proyecto fue inicializado utilizando **Vite**, una herramienta de compilación moderna y rápida.

Comando de creación:

```bash
npm create vite@latest

```

* **Framework:** React
* **Variant:** JavaScript

---

### Arquitectura de Componentes

En React, la interfaz se divide en piezas independientes llamadas componentes. En este proyecto utilizamos la siguiente estructura:

* **`App`**: Componente principal (Padre) que contiene el estado y la lógica.
* **`Header`**: Encabezado visual de la aplicación.
* **`MenuItem`**: Muestra cada platillo disponible y el botón para agregarlo.
* **`OrderContents`**: Muestra la lista de lo que el usuario ha consumido.
* **`TipPercentageForm`**: Formulario para seleccionar la propina (10%, 20%, 50%).
* **`OrderTotals`**: Calcula y muestra los subtotales y el total final.

---

### Componentes Padre e Hijo

Un concepto clave aplicado aquí es el flujo de datos unidireccional.

* **Componente Padre (`App`)**: Define los estados (`order`, `tip`) y las funciones (`addItem`, `removeItem`).
* **Componentes Hijo**: Reciben estos datos y funciones a través de **props**.

Por ejemplo, `App` le pasa la función `addItem` al componente `MenuItem` para que este pueda comunicarse de vuelta cuando el usuario hace clic en un platillo.

---

### Hooks Utilizados

Los hooks son funciones que permiten "enganchar" características de React en componentes funcionales.

#### 1. `useState`

Usado para manejar la información dinámica:

```javascript
const [order, setOrder] = useState([]) // Almacena los productos del pedido
const [tip, setTip] = useState(0)      // Almacena el porcentaje de la propina

```

#### 2. `useMemo`

Utilizado en `OrderTotals` para optimizar el rendimiento. `useMemo` guarda el resultado de los cálculos matemáticos (subtotal, total) y solo los recalcula si las dependencias (`order` o `tip`) cambian, evitando cálculos innecesarios en cada renderizado.

---

### Inmutabilidad del Estado

En React, el estado nunca debe modificarse directamente. En este proyecto aplicamos inmutabilidad al agregar items al carrito:

* **No usamos `push**`: Modificar el array original es una mala práctica.
* **Usamos Spread Operator (`...`) y `map**`: Creamos copias del arreglo anterior agregando el nuevo elemento o modificando la cantidad de uno existente.

Ejemplo de cómo agregamos un item sin mutar:

```javascript
const newItem = {...item, quantity: 1}
setOrder([...order, newItem]) // Crea un nuevo arreglo con lo anterior + lo nuevo

```

---

### Manejo de Eventos (Event Handling)

Utilizamos el evento `onClick` y `onChange` para interactuar con el usuario.

* **En `MenuItem**`: Detectamos el click para disparar la función `addItem`.
* **En `TipPercentageForm**`: Detectamos el cambio en los inputs de radio para actualizar el estado de la propina (`setTip`).

---

### Estilos con Tailwind CSS

A diferencia de las clases tradicionales de CSS, aquí utilizamos **Tailwind CSS** para aplicar estilos directamente en el JSX mediante la propiedad `className`.

Ejemplo de botón estilizado:

```jsx
<button className="bg-teal-400 hover:bg-teal-500 w-full p-3 font-bold uppercase text-white">

```

---

### Renderizado Condicional

Usamos el operador ternario para mejorar la experiencia de usuario. Si la orden está vacía, mostramos un mensaje; si tiene elementos, mostramos el resumen de cuenta.

```jsx
{order.length > 0 ? (
    // Mostrar Orden
) : (
    <p>La orden está vacía</p>
)}

```

## Estructura del Proyecto

```text
src/
├── components/      # Componentes (MenuItem, Order, OrderTotals, etc.)
├── data/            # Datos simulados (db.js)
├── helpers/         # Funciones de utilidad (si aplica)
├── App.jsx          # Componente principal
└── main.jsx         # Punto de entrada

```

## Autor

* **Oscar Martin Espinosa** - *Desarrollo*

