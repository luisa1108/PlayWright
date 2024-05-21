<h1 align="center">Framework Playwright</h1>
En este proyecto usamos el Framework Playwright dentro del programa Visual Studio Code para ejecutar pruebas automatizadas en la pagina "https://buggy.justtestit.org/". A continuación se presentaran los test.


**Integrantes:**
- Johan Javier Triana
- Luisa Fernanda Tamayo Arias
- Santiago Montoya Restrepo

**Enlaces:**
- https://docs.google.com/document/d/1K862oy669VWr1IrlsRjNQiKDsxKxnEhd/edit?usp=sharing&ouid=101929100887908897458&rtpof=true&sd=true
- https://docs.google.com/spreadsheets/d/16pfXTJiRrDxe9tAKNugrN9h9jambCbuG/edit?usp=sharing&ouid=101929100887908897458&rtpof=true&sd=true

## Índice

- [Instalación](#instalación)
- [Instalar Node.js en Windows](#instalar-nodejs-en-windows)
- [Instalar el Framework Playwright](#instalar-el-framework-playwright)
- [Ejecución de pruebas](#ejecución-de-pruebas)
    - [Historia: Registro de Usuario](#historia-registro-de-usuario)
    - [Historia: Actualizar Perfil de Usuario](#historia-actualizar-perfil-de-usuario)
    - [Historia: Votar por Autos](#historia-votar-por-autos)

## Instalación

## Instalar Node.js en Windows

**1. Descargar el instalador:**
- Ve a la página oficial de descargas de Node.js.( https://nodejs.org/en )
- Descarga el instalador LTS (Long Term Support), que es la versión recomendada para la mayoría de los usuarios.

**2. Ejecutar el instalador:**
- Abre el archivo .msi que descargaste.
- Sigue las instrucciones del instalador. Asegúrate de seleccionar la opción que agrega Node.js al PATH del sistema.

**3. Verificar la instalación:**
- Abre una nueva terminal o el símbolo del sistema.
- Ejecuta node -v para verificar la versión de Node.js.
- Ejecuta npm -v para verificar la versión de npm.

**4. En caso de que visual no les reconozca los comandos al ejecutarlos**

**Verificar y configurar el PATH en Windows**
**a. Abrir la configuración del sistema:**
- Abre el Panel de Control.
- Ve a Sistema y seguridad y luego a Sistema.
- Haz clic en Configuración avanzada del sistema en el panel izquierdo.
- En la pestaña Opciones avanzadas, haz clic en Variables de entorno.

**b. Editar la variable PATH:**
- En la sección Variables del sistema, busca y selecciona la variable Path, luego haz clic en Editar.
- En la ventana de edición de la variable, asegúrate de que las rutas al directorio de instalación de Node.js y npm están presentes. Estas rutas generalmente son:

C:\Program Files\nodejs\ o
C:\Users\<tu-usuario>\AppData\Roaming\npm\
Si estas rutas no están en la lista, agrégalas:

Haz clic en Nuevo e ingresa la ruta correspondiente.
Asegúrate de agregar ambas rutas si ambas están presentes en tu sistema.

**c. Aplicar y reiniciar:**
- Haz clic en Aceptar para cerrar todas las ventanas de configuración.
- Reinicia tu computadora para que los cambios surtan efecto.
- Verificar la instalación y el PATH

**d. Abrir la terminal en VSCode:**
- Abre VSCode.
- Ve a Terminal > New Terminal para abrir una nueva terminal.

**e. Verificar node y npm:**
- Ejecuta node -v para verificar la versión de Node.js.
- Ejecuta npm -v para verificar la versión de npm.

## Instalar el Framework Playwright


**Dentro de visual Hacemos los siguientes pasos:**
- Buscar en la barra lateral izquierda el simbolo de extensiones como se señala en la imagen
- Luego buscar "Playwright"
- Seleccionar la primera opción que es la oficial de Microsoft
- Donde esta subrayado en rojo darle al boton de instalar(en mi caso ya está instalado)

  ![image](https://github.com/luisa1108/PlayWright/assets/113460466/e552a6ba-48b1-47ba-a0a8-9ca0f0aafbad)

- Ahora usamos el comando ctrl + shift + P, se nos abrira una barra de busqueda y escribimos "Install PlayWright"
- Se nos abrira un cuadro de chekeadores, seleccionamos los señalados en la siguiente imagen y le damos al boton ok
- Esperamos a que instale todas las dependencias y lo que sea necesario.

![Captura de pantalla (38)](https://github.com/luisa1108/PlayWright/assets/113460466/d21a4bd2-2ea4-420a-b4ee-9b16c8a32693)

## Ejecución de pruebas

**Creación de archivos de Test:**
1. Una vez todo instalado clickeamos en el simbolo que parece de laboratorio en la barra lateral izquierda tal como se muestra en la imagen
2. abajo en la sub barra lateral izquierda en la sección de PlayWright presionamos donde dice "Record New"
3. Se nos creara el archivo de test y podremos empezar

![image](https://github.com/luisa1108/PlayWright/assets/113460466/c00f3fab-45bc-4638-a98b-7e5435d77976)

### Historia: Registro de Usuario

**Archivo:** `tests/TestHistoria_Registro_Usuario.spec.ts`

**Descripción:** En esta prueba vamos a registrar un usuario con datos válidos.

**Pasos de TestRegistroUsuario:**
1. Navegar a la página de registro.
2. Ingresar "Johan10" en el campo Login, "Johan" en First Name y "Triana" en Last Name.
3. Ingresar "Johan*" en los campos de Password y Confirm Password.(para compropar si la clave es de minimo 6 caracteres)
4. Ingresar la clave cumpliendo con los requisitos de la pagina, "John777*" en los campos de Password y Confirm Password.
5. Hacer clicK en el botón "Register".

```javascript
test('TestRegistroUsuario', async ({ page }) => {//CRITERIOS DE ACEPTACIÓN 1 Y 2
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('link', { name: 'Register' }).click();//El registro pide todos los campos obligatorios para poder registrar
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('Johan10');//Campo nombre de usuario obligatorio
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Johan');//Campo nombre obligatorio
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Triana');//Campo apellido obligatorio
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('Johan*');//Contraseña de 6 caracteres con letra mayuscula y caracter especial obligatorio
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('Johan*');//Confirmación de contraseña obligatorio
  await page.getByRole('button', { name: 'Register' }).click();
  //Despues de darle al boton de registrar nos sale el siguiente error:
  await page.getByText('InvalidPasswordException:').click();//Esto se debe a que realmente la clave debe de ser de minimo 8 caracteres + los requisitos mencionados
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('John777*');//Cambio a clave de 8 caracteres + requisitos anteriores mencionados
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('John777*');//Confirmación de contraseña cambiada 
  await page.getByRole('button', { name: 'Register' }).click();
  //Registro exitoso, sale el siguiente mensaje al darle click "await page.getByText('Registration is successful').click();"
});
```
**Pasos de TestRegistrarMismoUsuario:**
1. Navegar a la página de registro.
2. Ingresar los mismos datos en los mismos campos tal como en el anterior test.
3. Hacer clicK en el botón "Register".

```javascript
test('TestRegistrarMismoUsuario', async ({ page }) => {//CRITERIO DE ACEPTACIÓN 3
  await page.goto('https://buggy.justtestit.org/register');//Intento de registrar nuevamente al mismo usuario
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('Johan10');//Insertamos el mismo nombre de usuario
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Johan');//Insertamos el mismo nombre 
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Triana');//Insertamos el mismo apellido
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('John777*');//Insertamos la misma contraseña
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('John777*');//Confirmación de contraseña 
  await page.getByRole('button', { name: 'Register' }).click();
  //Al darle click al boton registrar sale el siguiente mensaje: "await page.getByText('UsernameExistsException: User').click();"
});
```
### Historia: Actualizar Perfil de Usuario

**Archivo:** `tests/TestActualizarPerfilUsuario.spec.ts`

**Descripción:** Esta prueba verifica la actualización del perfil de un usuario, incluyendo nombre, apellido, dirección, teléfono, hobby y la actualización de la contraseña que debe ser como mínimo de 8 caracteres (1 letra mayúscula + un carácter especial + 1 número)

**Pasos de TestActualizarDatosUsuario:**
1. Navegar a la página principal.
2. Ingresar "Johan10" en el campo de Login.
3. Ingresar "John777*" en el campo de Password.
4. Hacer clicK en el botón "Login".
5. Hacer clicK en el botón "Profile".
6. Actualizar los campos First Name con "John", Last Name con "Wick", Addresscon "Calle 30B #5 - 224", Phone con "35202025", Hobby con "Video Games", en Current Password la contraseña actual "John777*", en New Pasword con "Johan10*" y en Confirm Password con "Johan10"
8. Guardar los cambios dando click en el boton "Save"
9. **Nota:** En el siguiente codigo los comentarios de codigo explicaran el flujo del mismo y el progreso y dificultades que se presentaron.

```javascript
test('TestActualizarDatosUsuario', async ({ page }) => {//CRITERIOS DE ACEPTACIÓN 1, 2 y 3
  await page.goto('https://buggy.justtestit.org');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('Johan10');//Nombre de usuario para acceder
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('John777*');//Contraseña para acceder
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();//Apartado de perfil para actualizar datos
  await page.getByLabel('First Name').click();
  //await page.getByText('First Name is required').click();//Mensaje de aviso de que el campo Nombre no puede estar vacio
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('John');//Actualización de nombre
  await page.getByLabel('Last Name').click();
  //await page.getByText('Last Name is required').click();//Mensaje de aviso de que el campo Apellido no puede estar vacio
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Wick');//Actualización de apellido
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('Calle 30B #5 - 224');//Actualización de dirección
  await page.getByLabel('Phone').click();
  await page.getByLabel('Phone').fill('35202025');//Actualización de telefono
  await page.getByLabel('Hobby').selectOption('Video Games');//Actualización de hobby
  await page.getByLabel('Current Password').click();
  await page.getByLabel('Current Password').fill('John777*');//Ingreso de contraseña actual
  await page.getByLabel('New Pasword').click();
  await page.getByLabel('New Pasword').fill('Jonathan');//Intento de contraseña de 8 caracteres para validar requisitos
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('Jonathan');//Confirmación de contraseña
  await page.getByRole('button', { name: 'Save' }).click();//Boton de actualizar datos
  //await page.getByText('InvalidPasswordException:').first().click();//Mensaje de error debido a que la contraseña no cumple los requisitos
  await page.getByLabel('New Pasword').click();
  await page.getByLabel('New Pasword').fill('Johan10*');//Actualización de contraseña cumpliendo los requisitos
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('Johan10*');//Confirmación de contraseña
  await page.getByRole('button', { name: 'Save' }).click();
  //Al actualizar los datos exitosamente sale el siguiente mensaje: "await page.getByText('The profile has been saved').first().click();"
  
  //NOTA IMPORTANTE: Se vuelve a colocar la contraseña inicial debido a que cuando se ejecuta el test, este hace todo el proceso desde cero,
  //por lo tanto como se actualizo la contraseña a una diferente, ya no se puede iniciar con la primera contraseña registrada,
  //causando asi que la ejecución del test de error y por consiguiente no pueda avanzar al siguiente paso registrado para simularlo o imitarlo.
  await page.getByLabel('Current Password').click();
  await page.getByLabel('Current Password').fill('Johan10*');//Ingreso de contraseña actual
  await page.getByLabel('New Pasword').click();
  await page.getByLabel('New Pasword').fill('John777*');//Actualización de contraseña a la inicial cumpliendo los requisitos
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('John777*');//Confirmación de contraseña
  await page.getByRole('button', { name: 'Save' }).click();
});
//Nota Adicional: la pagina esta super mal hecha por lo tanto el test corre de manera correcta,
// pero la contraseña no la deja cambiar sacando el siguiente mensaje: LimitExceededException: Attempt limit exceeded, please try after some time.
//Indicando que se excedio el limite de veces que se puede cambiar la contraseña
```

### Historia: Votar por Autos

**Archivo:** `tests/TestVotarPorAutos.spec.ts`

**Pasos de TestVotoAutosSinAutenticar:**
1. Navegar a la página principal.
2. Dar click en la imagen boton de Lamborghini
3. Seleccionar el carro por el  cual deseamos votar y clickear
4. Verificar el mensaje de que necesitamos estar autenticados o registrados para poder votar

```javascript
test('TestVotoAutosSinAutenticar', async ({ page }) => {//CRITERIO DE ACEPTACIÓN 1
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('link', { name: 'Lamborghini' }).click();
  await page.getByRole('link', { name: 'Lamborghini Veneno' }).click();
  await page.getByText('You need to be logged in to').click();
  await page.getByRole('link', { name: 'Lamborghini' }).click();
});
```

**Pasos de TestVotoAutosSinAutenticar:**
1. Navegar a la página principal.
2. Ingresar "Johan10" en el campo de Login.
3. Ingresar "John777*" en el campo de Password.
4. Hacer clicK en el botón imagen del logo de lamborghini para ir a la sección de votar
5. Hacer clicK en el botón imagen del auto por el cual deseamos votar
6. Verificar la cantidad de votos que tiene el auto
7. Clickear en el espacio de comentario para escribir el comentario que deseemos
8. Hacer click en el botón "Vote!"
9. Verificar que la cantidad de votos incremento con nuestro voto y que sale el mensaje que certifica que votamos por el auto
10. clickeamos la imagen para volver a la selección de autos
11. seleccionamos el mismo auto por el cual votamos para verificar
12. nuevamente vemos el mismo mensaje certificando que ya hemos votado

```javascript
//Nota importante: el siguiente test solo puedo ser ejecutado una vez ya que el mismo test se ejecuta desde cero,
//por lo tanto al haber registado el voto, ya no apareceran los mismos campos que quedaron registrados la primera vez
// y al ser ejecutado una segunda vez dara error porque no puede avanzar siguiendo los pasos.
test('TestVotoAutos', async ({ page }) => {//CRITERIOS DE ACEPTACIÓN 2, 3 y 4
  await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('Johan10');//Nombre de usuario para acceder
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('John777*');//Contraseña para acceder
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Lamborghini' }).click();//Imagen para ir a la votación de autos 
  await page.getByRole('link', { name: 'Lamborghini Veneno' }).click();//Seleccionamos imagen del tipo de auto por el cual vamos a votar
  await page.getByText('797').click();//Numero de votos antes de nuestro voto
  await page.getByLabel('Your Comment (optional)').click();
  await page.getByLabel('Your Comment (optional)').fill('Pagina mas mala no puede ser');//comentario al momento de votar
  await page.getByRole('button', { name: 'Vote!' }).click();//Votamos por el auto
  await page.getByText('Thank you for your vote!').click();//mensaje que sale cuando votamos
  await page.getByText('798').click();//Numero de votos despues de nuestro voto
  await page.getByRole('link', { name: 'Lamborghini' }).click();//clickeamos la imagen para volver a la selección de autos
  await page.getByRole('link', { name: 'Lamborghini Veneno' }).click();//seleccionamos el mismo auto para verificar
  await page.getByText('Thank you for your vote!').click();//nuevamente vemos el mismo mensaje certificando que ya hemos votado
});
```
