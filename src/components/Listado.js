import React from 'react'
import Item from './Item'
import data from "./data.json"
import styles from "./Listado.module.css"


export default function Listado({setCantidad}) {
  return (
    <div className={styles.container}>
      {data.map(producto => <Item key={producto.id} producto={producto} setCantidad={setCantidad}></Item>)}
    </div>
  )
}
