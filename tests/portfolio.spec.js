import { test, expect } from '@playwright/test';

const titles = ['Vivienda alpina · El Maitén', 'Vivienda unifamiliar · Epuyén', 'Casa Diana y Agustin', 'Vivienda unifamiliar · Lago Puelo'];
const checkImage = async (image) => {
  await image.scrollIntoViewIfNeeded();
  await expect.poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
};

test('estructura, metadatos, anclas y contenido confirmado', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle('Lara Diaz | Arquitecta');
  await expect(page.locator('html')).toHaveAttribute('lang', 'es-AR');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Lara Diaz/);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', 'Lara Diaz | Arquitecta');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Lara Diaz');
  await expect(page.locator('body')).not.toContainText('Lara D\u00edaz');
  await expect(page.locator('.hero-statement')).toHaveText('Servicios profesionales que acompañan las necesidades reales y el desarrollo del usuario, el territorio y la comunidad');
  await expect(page.locator('.hero-description')).toHaveCount(0);
  expect(await page.locator('main > section').evaluateAll((sections) => sections.map((section) => section.id))).toEqual(['inicio', 'sobre-mi', 'formacion', 'experiencia', 'proyectos', 'servicios', 'contacto']);
  for (const href of await page.locator('a[href^="#"]').evaluateAll((links) => links.map((link) => link.getAttribute('href')))) {
    await expect(page.locator(href)).toHaveCount(1);
  }
  await expect(page.locator('.project-card')).toHaveCount(4);
  await expect(page.locator('.project-title')).toHaveText(titles);
  await expect(page.getByText('Contenido provisional', { exact: true })).toHaveCount(0);
  await expect(page.locator('.project-art')).toHaveCount(0);
  await expect(page.locator('#formacion').getByText('En curso', { exact: true })).toHaveCount(2);
  await expect(page.locator('.group-heading h3')).toHaveText(['Formación académica', 'Especializaciones', 'Publicaciones']);
  const master = page.locator('.education-group li').filter({ hasText: 'Magíster en Construcción en Madera' });
  await expect(master).toContainText('2025');
  await expect(master).toContainText('Universidad del Bío-Bío, Chile');
  await expect(master).toContainText('En curso');
  await expect(page.locator('.education-group')).toHaveCount(3);
  await expect(page.locator('.education-group li')).toHaveCount(5);
  await expect(page.locator('.experience-row')).toHaveCount(5);
  await expect(page.locator('.experience-row h3').first()).toHaveText('Cooperativa AEP');
  await expect(page.locator('.experience-date').first()).toHaveText('Inicio: 2019');
  await expect(page.locator('.experience-description ul')).toHaveCount(0);
  await expect(page.locator('.about-copy > p')).toHaveText([
    'Soy arquitecta egresada de la Universidad Nacional de La Plata.',
    'Mi recorrido profesional está vinculado con una variedad de temáticas, para lograr una arquitectura integral que resuelva las problemáticas de cada usuario en particular, respetando los valores comunitarios y al ambiente en el cual se inserta la obra. Esto implica no sólo pensar proyectos personalizados ajustados a las necesidades particulares, sino también el impacto de la obra desde su construcción y en toda su vida útil, promoviendo materiales y sistemas constructivos locales que respeten el ambiente y el desarrollo territorial.',
    'Mi experiencia incluye el proyecto y la dirección de obras públicas y privadas, desde el trabajo profesional individual y cooperativo, la formación en sistemas constructivos sustentables como las estructuras de madera, la permacultura y la bioconstrucción en general, y la docencia en escuela técnica como parte de la promoción de los valores cooperativos y socioambientales para la comunidad.',
  ]);
  await expect(page.locator('.about-image-slot img')).toHaveAttribute('src', '/images/optimized/lara.webp');
  await checkImage(page.locator('.about-image-slot img'));
  const uep = page.locator('.experience-row').filter({ hasText: 'Unidad Ejecutora Provincial (UEP)' });
  await expect(uep).toContainText('2016–2017');
  await expect(uep).toContainText('Arquitecta proyectista');
  await expect(uep).toContainText('establecimientos educativos rurales');
  const teaching = page.locator('.experience-row').filter({ hasText: 'Experiencia docente' });
  await expect(teaching.locator('.experience-date')).toHaveText('Actualidad');
  await expect(teaching).toContainText('Docencia universitaria, terciaria y secundaria técnica');
  await expect(teaching.locator('.experience-description')).toHaveText('Experiencia en enseñanza de proyectos arquitectónicos, y otras materias técnicas en la formación de Arquitectura y Maestro Mayor de Obras, además de políticas públicas en diversas Tecnicaturas');
  await expect(page.locator('.services-list h3')).toHaveText(['Proyecto arquitectónico', 'Dirección, gestión de obra, representación técnica', 'Proyecto urbano', 'Asesorías técnicas específicas']);
  await expect(page.locator('.services-list p')).toHaveText([
    'Diseño de espacios habitables desde cero, ampliaciones, remodelaciones, adaptados a las distintas necesidades y recursos',
    'Acompañamiento profesional en la planificación, gestión y construcción de obras',
    'Diseño intradisciplinario y participativo, planificación territorial para el desarrollo',
    'Construcción en madera, Políticas públicas, Desarrollo Territorial',
  ]);
  await expect(page.getByText(/según CV|pendiente de confirmar|continuidad por confirmar|documentado hasta 2024|propuesta inicial.*validación/i)).toHaveCount(0);
  await expect(page.getByText('Espacio / materia / territorio', { exact: true })).toHaveCount(0);
  await expect(page.locator('.about-terms')).toHaveCount(0);
  await expect(page.getByText('Actualidad', { exact: true })).toHaveCount(1);
  await expect(page.locator('a[href^="mailto:"]')).toHaveAttribute('href', 'mailto:diazlara.arq@gmail.com');
  expect(errors).toEqual([]);
});

test('las cuatro fichas abren, contienen el foco y restauran la card y el scroll', async ({ page }) => {
  await page.goto('/');
  for (let index = 0; index < 4; index++) {
    const trigger = page.getByRole('button', { name: `Abrir ${titles[index]}`, exact: true });
    await trigger.focus();
    await page.keyboard.press('Enter');
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAttribute('aria-modal', 'true');
    await expect(dialog.getByRole('heading', { level: 2 })).toHaveText(titles[index]);
    await expect(dialog.locator('.project-facts, .project-gallery, .project-technical')).toHaveCount(3);
    await expect(dialog.locator('.project-technical')).toContainText(['75 m²', '80 m²', '90 m²', '80 m²'][index]);
    await checkImage(dialog.locator('.project-gallery img'));
    await expect(dialog.locator('.slider-controls')).toHaveCount(index < 2 ? 0 : 1);
    await expect(dialog.locator('dt').filter({ hasText: /^Rol$/ })).toHaveCount(index === 2 ? 1 : 0);
    await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');
    const close = dialog.getByRole('button', { name: 'Cerrar proyecto' });
    await close.focus();
    await page.keyboard.press('Shift+Tab');
    await expect(index < 2 ? close : dialog.getByRole('button', { name: 'Imagen siguiente' })).toBeFocused();
    await page.keyboard.press('Tab');
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
      images: [{ src: '/brand/favicon-48.png', alt: 'Recurso de prueba', caption: 'Epígrafe de prueba' }],
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
    await page.getByRole('button', { name: `Abrir ${titles[0]}` }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    expect(await dialog.locator('.dialog-surface').evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true);
    await dialog.getByRole('button', { name: 'Cerrar proyecto' }).click();
    for (const img of await page.locator('main img').all()) await checkImage(img);
    const cards = await page.locator('.project-card').evaluateAll((items) => items.map((item) => ({ x: item.getBoundingClientRect().x, y: item.getBoundingClientRect().y })));
    expect(cards[0].y === cards[1].y).toBe(width > 760);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.locator('#inicio').scrollIntoViewIfNeeded();
    await page.screenshot({ path: `test-results/portfolio-${width}.png`, fullPage: true });
    if (width === 390 || width === 1440) {
      // Ocultar la cabecera fija solo en capturas aisladas: no pertenece al bloque.
      const style = '.site-header, .skip-link { visibility: hidden !important; }';
      await page.locator('#formacion').screenshot({ path: `test-results/formacion-${width}.png`, style });
      await page.locator('#experiencia').screenshot({ path: `test-results/experiencia-${width}.png`, style });
      await page.locator('#sobre-mi').screenshot({ path: `test-results/sobre-mi-${width}.png`, style });
      await page.locator('#proyectos').screenshot({ path: `test-results/proyectos-${width}.png`, style });
      for (const index of [2, 3]) {
        await page.getByRole('button', { name: `Abrir ${titles[index]}` }).click();
        await checkImage(page.locator('.project-gallery img'));
        await page.locator('.slider-controls').scrollIntoViewIfNeeded();
        await expect(page.locator('.dialog-close')).toBeInViewport();
        expect(await page.locator('.dialog-surface').evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true);
        await page.screenshot({ path: `test-results/slider-${index}-${width}.png` });
        await page.keyboard.press('Escape');
      }
    }
  });
}

test('sliders: imágenes completas, carga diferida, teclado, foco y reinicio', async ({ page }) => {
  const errors = [];
  const requested = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('response', (response) => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  page.on('request', (request) => { if (request.resourceType() === 'image') requested.push(request.url()); });
  await page.goto('/');
  for (const img of await page.locator('main img').all()) await checkImage(img);
  expect(requested.filter((url) => /optimized\/(diana|lago)-/.test(url) && !url.includes('-cover'))).toEqual([]);
  for (const [index, count] of [[2, 5], [3, 3]]) {
    const trigger = page.getByRole('button', { name: `Abrir ${titles[index]}` });
    await trigger.click();
    const gallery = page.getByRole('region', { name: 'Galería' });
    const status = gallery.getByRole('status');
    const img = gallery.locator('img');
    const next = gallery.getByRole('button', { name: 'Imagen siguiente' });
    const previous = gallery.getByRole('button', { name: 'Imagen anterior' });
    await expect(status).toContainText(`Imagen 1 de ${count}`);
    const sources = new Set();
    for (let i = 0; i < count; i++) {
      await checkImage(img);
      await expect(img).toHaveCSS('object-fit', 'contain');
      await expect(img).toHaveCSS('animation-name', 'none');
      sources.add(await img.getAttribute('src'));
      await expect(status).toContainText(`Imagen ${i + 1} de ${count}`);
      await next.click();
      await expect(next).toBeFocused();
    }
    expect(sources.size).toBe(count);
    await expect(status).toContainText(`Imagen 1 de ${count}`);
    await previous.click();
    await expect(status).toContainText(`Imagen ${count} de ${count}`);
    await page.keyboard.press('ArrowRight');
    await expect(status).toContainText(`Imagen 1 de ${count}`);
    await expect(previous).toBeFocused();
    await gallery.locator('.slider-image').focus();
    await page.keyboard.press('ArrowLeft');
    await expect(status).toContainText(`Imagen ${count} de ${count}`);
    await page.getByRole('button', { name: 'Cerrar proyecto' }).focus();
    await page.keyboard.press('ArrowRight');
    await expect(status).toContainText(`Imagen ${count} de ${count}`);
    await page.keyboard.press('Escape');
    await expect(trigger).toBeFocused();
    await trigger.click();
    await expect(page.getByRole('status')).toContainText(`Imagen 1 de ${count}`);
    await page.keyboard.press('Escape');
  }
  expect(errors).toEqual([]);
});

test('gestos táctiles horizontales cambian imágenes; los verticales no', async ({ browser }) => {
  const context = await browser.newContext({ hasTouch: true, viewport: { width: 390, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  const session = await context.newCDPSession(page);
  try {
    await page.goto('/');
    for (const [index, count] of [[2, 5], [3, 3]]) {
      await page.getByRole('button', { name: `Abrir ${titles[index]}` }).click();
      const area = page.locator('.slider-image');
      await checkImage(area.locator('img'));
      await area.scrollIntoViewIfNeeded();
      const box = await area.boundingBox();
      const x = box.x + box.width / 2;
      const y = box.y + box.height / 2;
      const swipe = async (dx, dy) => {
        await session.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
        for (let step = 1; step <= 6; step++) await session.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x + dx * step / 6, y: y + dy * step / 6 }] });
        await session.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
      };
      await swipe(-90, 0);
      await expect(page.getByRole('status')).toContainText(`Imagen 2 de ${count}`);
      await swipe(90, 0);
      await expect(page.getByRole('status')).toContainText(`Imagen 1 de ${count}`);
      await swipe(0, -60);
      await expect(page.getByRole('status')).toContainText(`Imagen 1 de ${count}`);
      await page.keyboard.press('Escape');
    }
  } finally { await context.close(); }
});

test('movimiento reducido desactiva las animaciones decorativas', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.hero-copy')).toHaveCSS('animation-name', 'none');
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
});

test('subrayado de navegación con hover, foco y transición inversa', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Navegación principal' });
  for (const name of ['Sobre mí', 'Contacto']) {
    const link = nav.getByRole('link', { name, exact: true });
    const underline = () => link.locator('.nav-label').evaluate((element) => getComputedStyle(element, '::after').transform);
    await expect.poll(underline).toBe('matrix(0, 0, 0, 1, 0, 0)');
    await link.hover();
    await expect.poll(underline).toBe('matrix(1, 0, 0, 1, 0, 0)');
    await page.mouse.move(0, 0);
    await expect.poll(underline).toBe('matrix(0, 0, 0, 1, 0, 0)');
    await link.focus();
    await page.keyboard.press('Shift');
    await expect(link).toBeFocused();
    await expect(link).toHaveCSS('outline-style', 'solid');
    await expect.poll(underline).toBe('matrix(1, 0, 0, 1, 0, 0)');
    const style = await link.locator('.nav-label').evaluate((element) => {
      const style = getComputedStyle(element, '::after');
      return [style.height, style.transformOrigin, style.transitionDuration];
    });
    expect(style[0]).toBe('1px');
    expect(style[1]).toMatch(/^0px/);
    expect(style[2]).toBe('0.25s');
    await link.evaluate((element) => element.blur());
    await expect.poll(underline).toBe('matrix(0, 0, 0, 1, 0, 0)');
  }
});

test('en pantallas táctiles el subrayado responde al foco y evita hover artificial', async ({ browser }) => {
  const context = await browser.newContext({ hasTouch: true, viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  try {
    await page.goto('/');
    const link = page.locator('.main-navigation a').first();
    await link.hover();
    expect(await link.locator('.nav-label').evaluate((element) => getComputedStyle(element, '::after').transform)).toBe('matrix(0, 0, 0, 1, 0, 0)');
  } finally { await context.close(); }
});
