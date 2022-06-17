import React from 'react'
import styles from "./Cabecera.module.css"


export default function Cabecera({cantidad}) {
  
  return (
    <header  className={styles.encabezado}>
        <h1 className={styles.titulo}>Carrito de compras</h1>
        <p >cantidad de productos <span className={styles.descripcion}>{cantidad}</span></p>
    </header>
  )
}
