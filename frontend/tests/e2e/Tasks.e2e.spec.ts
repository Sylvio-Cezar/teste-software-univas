import { test, expect } from '@playwright/test'

test.describe('Tarefas', () => {
  test('navega para Tarefas e lista itens do backend', async ({ page }) => {
    await page.goto('/') // Dashboard
    await page.getByRole('link', { name: 'Tarefas' }).click()
    // Título da seção
    await expect(page.getByRole('heading', { name: /Tarefas/i })).toBeVisible()
    // Tarefas semeadas (seed do backend)
    await expect(page.getByText('Complete project proposal')).toBeVisible()
    await expect(page.getByText('Review team performance')).toBeVisible()
    await expect(page.getByText('Learn TypeScript')).toBeVisible()
  })

  test('cria tarefa e aparece na lista', async ({ page }) => {
    await page.goto('/tasks')
    await page.getByRole('button', { name: /Adicionar Tarefa/i }).click()
    const uniqueTitle = `Tarefa ${Date.now()}`
    await page.getByLabel('Título:').fill(uniqueTitle)
    await page.getByLabel('Descrição:').fill('Descrição da tarefa E2E')
    await page.getByLabel('Status:').selectOption('PENDING')
    await page.getByLabel('Prioridade:').selectOption('MEDIUM')
    await page.getByLabel('Usuário:').selectOption({ index: 1 })
    await page.getByLabel('Categoria:').selectOption({ index: 1 })
    await page.getByRole('button', { name: /Criar/i }).click()
    await expect(page.getByText(uniqueTitle)).toBeVisible()
  })
})