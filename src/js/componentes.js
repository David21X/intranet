    import '../css/componentes.css';

    export const saludar = ( nombre ) => {

        console.log('Creando etiqueta h1');

        const h1 = document.createElement('h1')
        h1.innerText = `Holaaa, ${ nombre }!!!`;

        document.body.append( h1 );

        // Image
        // console.log(webpacklogo);
        // const img = document.createElement('img');
        // img.src = webpacklogo;
        // document.body.append( img);
    }