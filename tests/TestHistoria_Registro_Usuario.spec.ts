import { test, expect } from '@playwright/test';

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