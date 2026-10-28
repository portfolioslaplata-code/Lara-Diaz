import { test, expect } from '@playwright/test';

test('estructura, metadatos, anclas y contenido provisional', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle('Lara Díaz | Arquitecta');
  await expect(page.locator('html')).toHaveAttribute('lang', 'es-AR');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Lara Díaz/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Lara Díaz');
  expect(await page.locator('main > section').evaluateAll((sections) => sections.map((section) => section.id))).toEqual(['inicio', 'sobre-mi', 'formacion', 'experiencia', 'proyectos', 'servicios', 'contacto']);
  for (const href of await page.locator('a[href^="#"]').evaluateAll((links) => links.map((link) => link.getAttribute('href')))) {
    await expect(page.locator(href)).toHaveCount(1);
  }
  await expect(page.locator('.project-card')).toHaveCount(3);
  await expect(page.getByText('Contenido provisional', { exact: true })).toHaveCount(3);
  await expect(page.getByText('En curso según CV de 2024', { exact: true })).toBeVisible();
  await expect(page.getByText('Actualidad', { exact: false })).toHaveCount(0);
  await expect(page.locator('a[href^="mailto:"]')).toHaveAttribute('href', 'mailto:diazlara.arq@gmail.com');
  expect(errors).toEqual([]);
});

test('las tres fichas abren, contienen el foco y restauran la card y el scroll', async ({ page }) => {
  await page.goto('/');
  for (let index = 0; index < 3; index++) {
    const trigger = page.getByRole('button', { name: `Abrir Proyecto 0${index + 1}`, exact: true });
    await trigger.focus();
    await page.keyboard.press('Enter');
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAttribute('aria-modal', 'true');
    await expect(dialog.getByRole('heading', { level: 2 })).toHaveText(`Proyecto 0${index + 1}`);
    await expect(dialog.locator('.project-facts, .project-gallery, .project-technical')).toHaveCount(0);
    await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');
    const close = dialog.getByRole('button', { name: 'Cerrar proyecto' });
    await expect(close).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(close).toBeFocused();
    await page.keyboard.press('Shift+Tab');
    await expect(close).toBeFocused();
    if (index === 0) await page.keyboard.press('Escape');
    else if (index === 1) await close.click();
    else await page.mouse.click(3, 3);
    await expect(dialog).toHaveCount(0);
    await expect(trigger).toBeFocused();
    await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
  }
});

test('una ficha con contenido futuro tiene scroll interno y omite campos vacíos', async ({ page }) => {
  // Fixture exclusiva del test: nunca se incorpora al contenido de la clienta.
  await page.route('**/src/data/projects.js', (route) => route.fulfill({
    contentType: 'application/javascript',
    body: `export const projects = ${JSON.stringify([{
      id: 'fixture', title: 'Ficha de prueba automatizada', provisional: false, artwork: 1,
      category: 'Categoría de prueba', year: 'Año de prueba', location: '', role: '',
      description: 'Texto de prueba.', narrative: Array.from({ length: 25 }, (_, i) => `Párrafo de verificación ${i}. Contenido de prueba para verificar el desplazamiento interno.`),
      images: [{ src: '/favicon.svg', alt: 'Recurso de prueba', caption: 'Epígrafe de prueba' }],
      technical: [{ label: 'Dato de prueba', value: 'Valor de prueba' }, { label: '', value: '' }],
    }])};`,
  }));
  await page.goto('/');
  await page.getByRole('button', { name: 'Abrir Ficha de prueba automatizada' }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByText('Categoría de prueba', { exact: true })).toBeVisible();
  await expect(dialog.locator('dt', { hasText: 'Ubicación' })).toHaveCount(0);
  expect(await dialog.locator('.dialog-surface').evaluate((element) => element.scrollHeight > element.clientHeight)).toBe(true);
  await dialog.locator('.dialog-surface').evaluate((element) => { element.scrollTop = element.scrollHeight; });
  await expect(dialog.getByText('Valor de prueba')).toBeVisible();
  await expect(dialog.getByRole('img', { name: 'Recurso de prueba' })).toBeVisible();
  await expect(dialog.getByRole('button', { name: 'Cerrar proyecto' })).toBeInViewport();
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
});

for (const width of [320, 390, 768, 1440]) {
  test(`responsive y navegación a ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const nav = page.getByRole('navigation', { name: 'Navegación principal' });
    if (width <= 760) {
      const toggle = page.getByRole('button', { name: /^(Menú|Cerrar menú)$/ });
      await expect(nav).toBeHidden();
      await toggle.click();
      await expect(toggle).toHaveAttribute('aria-expanded', 'true');
      await page.keyboard.press('Escape');
      await expect(toggle).toBeFocused();
      await expect(nav).toBeHidden();
      await toggle.click();
    }
    await nav.getByRole('link', { name: 'Proyectos', exact: true }).click();
    await expect(page).toHaveURL(/#proyectos$/);
    if (width <= 760) await expect(nav).toBeHidden();
    await page.getByRole('button', { name: 'Abrir Proyecto 01' }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    expect(await dialog.locator('.dialog-surface').evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true);
    await dialog.getByRole('button', { name: 'Cerrar proyecto' }).click();
    await page.locator('#inicio').scrollIntoViewIfNeeded();
    await page.screenshot({ path: `test-results/portfolio-${width}.png`, fullPage: true });
  });
}

test('movimiento reducido desactiva las animaciones decorativas', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.hero-copy')).toHaveCSS('animation-name', 'none');
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
});
