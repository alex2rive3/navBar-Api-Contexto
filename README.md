# Contexto de la barra de navegación
Crea un proyecto React que tenga una barra de navegación con un mensaje que diga el nombre del usuario ("¡Hola, *nombre usuario *!"). En el cuerpo de la página, incluye una entrada donde el usuario pueda cambiar dinámicamente el nombre de la barra de navegación. Deberás crear los siguientes componentes:

### Estructura que debe tener app.js
```
function App() {
    return (
        <Wrapper>
            <Navbar/>
            <FormWrapper/>
        </Wrapper>
    );
}    
```
[Modelo de la pagina](https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/NavBar_Context_Assignment.png)

## Requerimientos del programa
- Form.js: este componente debería contener el campo de entrada.
- FormWrapper.js: este componente solo debe envolver el componente de formulario como hijo. Esto es para ilustrar que se pueden usar componentes anidados con contexto sin pasar por props.
- Navbar.js: este componente debe ser tu barra de navegación que contiene el saludo.
- Wrapper.js: este componente debe ajustar la barra de navegación y los componentes FormWrapper (y accederá a useState).
- También deberás crear el objeto de contexto.
- Tu función App.js debería verse así (ten en cuenta que Navbar y FormWrapper no admiten ninguna propiedad): 