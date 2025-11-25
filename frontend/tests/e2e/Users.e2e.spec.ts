import { test, expect } from '@playwright/test'
test.describe('Usuários', () => {

    test('navega para Usuários e lista itens do backend', async ({ page }) => {
        await page.goto('/') // Dashboard
        await page.getByRole('link', { name: 'Usuários' }).click()
        // Título da seção
        await expect(page.getByRole('heading', { name: /Usuários/i })).toBeVisible()
        // Emails semeados (seed do backend)
        await expect(page.getByText(/john.doe@example.com/i)).toBeVisible()
        await expect(page.getByText(/jane.smith@example.com/i)).toBeVisible()
    });

    test('cria usuário e aparece na lista', async ({ page }) => {
        await page.goto('/users')
        await page.getByRole('button', { name: /Adicionar Usuário/i }).click()
        const uniqueEmail = `aluno.${Date.now()}@ex.com`
        await page.getByLabel('Nome:').fill('Aluno E2E')
        await page.getByLabel('Email:').fill(uniqueEmail)
        await page.getByRole('button', { name: /Criar/i }).click()
        // Aguarda recarga da lista
        await expect(page.getByText(uniqueEmail)).toBeVisible()
    });

    test('atualiza usuário e reflete na lista', async ({ page }) => {
        await page.goto('/users')
        await page.getByRole('button', { name: /Editar/i }).first().click()

        const updatedEmail = `updated.${Date.now()}@ex.com`
        await page.getByLabel('Nome:').clear()
        await page.getByLabel('Nome:').fill('Nome Atualizado')
        await page.getByLabel('Email:').clear()
        await page.getByLabel('Email:').fill(updatedEmail)
        await page.getByRole('button', { name: /Atualizar/i }).click()
        await expect(page.getByText(updatedEmail)).toBeVisible()
    })

    test('exclui usuário da lista', async ({ page }) => {
        await page.goto('/users')
        const lastUserEmail = await page.locator('tr').last().locator('td').nth(1).textContent()
        page.on('dialog', dialog => dialog.accept())
        await page.getByRole('button', { name: /Excluir/i }).last().click()
        await expect(page.getByText(lastUserEmail || '')).not.toBeVisible()
    })

});
