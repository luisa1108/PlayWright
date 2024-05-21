import { test, expect } from '@playwright/test';

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



