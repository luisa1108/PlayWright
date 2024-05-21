import { test, expect } from '@playwright/test';

test('TestVotoAutosSinAutenticar', async ({ page }) => {//CRITERIO DE ACEPTACIÓN 1
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('link', { name: 'Lamborghini' }).click();
  await page.getByRole('link', { name: 'Lamborghini Veneno' }).click();
  await page.getByText('You need to be logged in to').click();
  await page.getByRole('link', { name: 'Lamborghini' }).click();
});

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