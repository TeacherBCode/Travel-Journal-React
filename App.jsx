import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/Card.jsx'
import Header from './components/Header.jsx'
import data from './components/data.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    {data.map((item) => {
                        return <Card key={item.id}  item={item} />
                        })}
  </React.StrictMode>
)
