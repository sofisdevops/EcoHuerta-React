# Analisis del proyecto EcoHuerta – Filterable Plant List

## ¿Como se aplica el flujo de datos unidireccional en este proyecto?

En EcoHuerta el flujo de datos unidireccional se aplica desde los componentes padres hacia los hijos. Esto significa que los datos solo viajan en una sola direccion, desde el componente principal que contiene el estado hasta los componentes que los muestran o los usan. Por ejemplo, el componente principal pasa la lista de plantas y las funciones de filtrado a los componentes hijos mediante props, y estos solo se encargan de mostrar la informacion sin modificarla directamente.

## ¿Que papel cumple el estado (useState) en los diferentes componentes y como influye en el renderizado?

El hook useState se utiliza para manejar los valores que cambian dentro de la aplicacion, como el texto que el usuario escribe para buscar una planta o los filtros que selecciona. Cada vez que el estado cambia, React vuelve a renderizar solo los componentes que dependen de ese valor, actualizando la interfaz de manera automatica sin recargar toda la pagina.

## ¿Por que es importante separar la UI en componentes reutilizables y puros?

Separar la interfaz en varios componentes ayuda a que el proyecto sea mas ordenado y facil de entender. Al tener partes del codigo que se pueden usar varias veces, no es necesario escribir lo mismo en diferentes lugares. Los componentes puros solo muestran la informacion que reciben y no cambian nada por si mismos, lo que hace que la aplicacion funcione de forma mas estable y sin errores. Ademas, si en el futuro se quiere cambiar algo del diseño, es mas facil hacerlo porque todo esta dividido en partes pequeñas y claras.

## ¿Que ventajas aporta el uso de JSX declarativo frente al enfoque imperativo del DOM tradicional?

JSX sirve para escribir la parte visual de la aplicacion de una forma mas clara y facil. En lugar de decirle al navegador paso a paso que cambie cada cosa, con JSX solo se escribe lo que se quiere mostrar, y React se encarga de actualizarlo cuando cambian los datos. Esto hace que el trabajo sea mas rapido, el codigo se entienda mejor y haya menos errores al modificar la interfaz.

## ¿Como podrias mejorar la app agregando tres componentes nuevos sin romper la coherencia del diseño ni la logica?

1. **Un buscador**: En donde el usuario pueda buscar mas rapido el producto que quiera.
2. **Seccion de historial**: En donde el usuario vea que productos ha agregado.
3. **Footer**: En donde halla informacion basica sea de la pagina o del desarrollador, mas que nada para darle mejor estructura a la pagina.

