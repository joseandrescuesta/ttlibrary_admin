import React from 'react'
import Bookmanager from './Bookmanager'
import Header from './Header'
import { useDispatch } from 'react-redux'
import { setLibros } from '../reducers'

const demobooks = [
    {
        id: 1,
        tipo: "Libro",
        topografico: "370.1M67e",
        titulo: "Educar en la era planetaria",
        autores: ["Edgar Morin", "Emilio Roger Ciurana", "Raul Domingo Motta"],
        editorial: "Gedisa",
        anno: 2002,
        isbn: 9788474328356,
        paginas: 140,
        ejemplares: 2,
        disponibles: 1,
        resumen: "La especie humana tiene grandes potenciales aún no desarrollados, lo que queda patente en el abismo que hay entre nuestros más preciados valores éticos y la barbarie moral real en la que convivimos día a día. También nuestras capacidades intelectuales las empleamos sólo en una mínima parte, como muestran las investigaciones sobre el cerebro. Por tanto, no estamos al final sino al principio de un largo proceso de convertirnos en seres verdaderamente humanos y de hacer de nuestras prácticas de convivencia una auténtica civilización global. Para poder avanzar en la creciente complejidad de nuestro mundo y no perder de vista nuestro proyecto de futuro, Edgar Morin propone su «mapa» del pensamiento complejo. Su estructura multidireccional y polifacética permite captar la realidad y orientarse pese a sus cambios constantes, pero bajo la condición de aceptar que hoy ya no se puede aspirar a verdades o sistemas acabados. El pensamiento complejo puede romper con los antiguos esquemas mentales que guían nuestra visión limitada y egocéntrica del mundo. Nos permitirá desarrollar nuevas políticas globales basadas en el pleno respeto por la diversidad, para avanzar hacia una coexistencia futura nueva y, finalmente, humana.",
        tema: "Filosofia de la educación"

    },
    {
        id: 2,
        tipo: "Libro",
        topografico: "380.2G67a",
        titulo: "Libro de Prueba 1",
        autores: ["Pedro Perez"],
        editorial: "LoremIpsum",
        anno: 2024,
        isbn: 1234567890,
        paginas: 100,
        ejemplares: 2,
        disponibles: 2,
        resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula ut mauris ut mollis. Nullam finibus aliquet dui, in efficitur sem vulputate quis. Duis quis risus quis lectus sodales efficitur. Nunc finibus molestie aliquet. Morbi blandit quam quis lobortis commodo. Nunc a sem eros. Vestibulum eget libero dignissim, tempus dui.",
        tema: "Prueba de libro 01"
    },
    {
        id: 3,
        tipo: "Libro",
        topografico: "390.3G65c",
        titulo: "Libro de Prueba 2",
        autores: ["Jaime Jaramillo"],
        editorial: "LoremIpsum",
        anno: 2024,
        isbn: 22222222222,
        paginas: 100,
        ejemplares: 3,
        disponibles: 2,
        resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula ut mauris ut mollis. Nullam finibus aliquet dui, in efficitur sem vulputate quis. Duis quis risus quis lectus sodales efficitur. Nunc finibus molestie aliquet. Morbi blandit quam quis lobortis commodo. Nunc a sem eros. Vestibulum eget libero dignissim, tempus dui.",
        tema: "Prueba de libro 02"
    },
    {
        id: 4,
        tipo: "Libro",
        topografico: "391.3G65",
        titulo: "Libro de Prueba 3",
        autores: ["Carlos Cortes"],
        editorial: "LoremIpsum",
        anno: 2020,
        isbn: 333333333333,
        paginas: 120,
        ejemplares: 1,
        disponibles: 1,
        resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula ut mauris ut mollis. Nullam finibus aliquet dui, in efficitur sem vulputate quis. Duis quis risus quis lectus sodales efficitur. Nunc finibus molestie aliquet. Morbi blandit quam quis lobortis commodo. Nunc a sem eros. Vestibulum eget libero dignissim, tempus dui.",
        tema: "Prueba de libro 03"
    },
    {
        id: 5,
        tipo: "Libro",
        topografico: "377.3G23t",
        titulo: "Libro de Prueba 4",
        autores: ["Maria Morales"],
        editorial: "LoremIpsum",
        anno: 2001,
        isbn: 4444444444444,
        paginas: 100,
        ejemplares: 3,
        disponibles: 2,
        resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula ut mauris ut mollis. Nullam finibus aliquet dui, in efficitur sem vulputate quis. Duis quis risus quis lectus sodales efficitur. Nunc finibus molestie aliquet. Morbi blandit quam quis lobortis commodo. Nunc a sem eros. Vestibulum eget libero dignissim, tempus dui.",
        tema: "Prueba de libro 04"
    }


]

const Main = () => {
    let disp = useDispatch();
    disp(setLibros(demobooks))
    return (
        <div>
            <Header />

            <Bookmanager />
        </div>
    )
}

export default Main