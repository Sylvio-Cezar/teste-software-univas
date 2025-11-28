import { test, expect } from '@playwright/test'

test.describe('Categorias', () => {
  test('navega para Categorias e lista itens do backend', async ({ page }) => {
    await page.goto('/') // Dashboard
    await page.getByRole('link', { name: 'Categorias' }).click()  
    // Título da seção
    await expect(page.getByRole('heading', { name: /Categorias/i })).toBeVisible()
    // Categorias semeadas (seed do backend)
    await expect(page.getByText(/Study/i)).toBeVisible()
    await expect(page.getByText(/Educational and learning tasks/i)).toBeVisible()
  })

  test('cria categoria e aparece na lista', async ({ page }) => {
    await page.goto('/categories')
    await page.getByRole('button', { name: /Adicionar Categoria/i }).click()
    
    const uniqueName = `Categoria ${Date.now()}`
    await page.getByLabel('Nome:').fill(uniqueName)
    await page.getByRole('button', { name: /Criar/i }).click()
    await expect(page.getByText(uniqueName)).toBeVisible()
  })

  test('atualiza categoria e reflete na lista', async ({ page }) => {
    await page.goto('/categories')
    await page.getByRole('button', { name: /Editar/i }).first().click()
    
    const updatedName = `Categoria Atualizada ${Date.now()}`
    await page.getByLabel('Nome:').clear()
    await page.getByLabel('Nome:').fill(updatedName)
    await page.getByRole('button', { name: /Atualizar/i }).click()
    await expect(page.getByText(updatedName)).toBeVisible()
  })

  test('exclui categoria da lista', async ({ page }) => {
    await page.goto('/categories')
    const lastCategoryName = await page.locator('tr').last().locator('td').nth(1).textContent()
    page.on('dialog', dialog => dialog.accept())
    await page.getByRole('button', { name: /Excluir/i }).last().click()
    await expect(page.getByText(lastCategoryName || '')).not.toBeVisible()
  })

})