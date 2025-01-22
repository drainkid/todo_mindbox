describe('Todo app', () => {
  beforeEach(() => {
    // Инициализация приложения перед каждым тестом
    cy.visit('http://localhost:5173/mindbox_test')
  })

  it('should add a new task', () => {
    const newTask = 'Test task';

    // Вводим задачу в input
    cy.get('#task_input').type(newTask)

    // Нажимаем клавишу Enter
    cy.get('#task_input').type('{enter}')

    // Проверяем, что задача появилась в списке
    cy.get('#todo_list').should('contain', newTask)
  });

  it('should toggle task completion', () => {
    const newTask = 'Test task'

    // Добавляем задачу
    cy.get('#task_input').type(newTask);
    cy.get('#task_input').type('{enter}')

    // Проверяем, что задача не завершена
    cy.get('input[type="checkbox"]').first().should('not.be.checked')

    // Переключаем статус задачи
    cy.get('input[type="checkbox"]').first().click()

    // Проверяем, что задача теперь завершена
    cy.get('input[type="checkbox"]').first().should('be.checked')
  });

  it('should filter tasks by "All"', () => {
    const task1 = 'Task 1'
    const task2 = 'Task 2'

    // Добавляем задачи
    cy.get('#task_input').type(task1)
    cy.get('#task_input').type('{enter}')
    cy.get('#task_input').type(task2)
    cy.get('#task_input').type('{enter}')

    // Фильтруем все задачи
    cy.contains('All').click()

    // Проверяем, что обе задачи отображаются
    cy.get('#todo_list')
        .should('contain', task1)
        .and('contain', task2)
  });

  it('should filter tasks by "Active"', () => {
    const task1 = 'Task 1'
    const task2 = 'Task 2'

    // Добавляем задачи
    cy.get('#task_input').type(task1);
    cy.get('#task_input').type('{enter}')
    cy.get('#task_input').type(task2)
    cy.get('#task_input').type('{enter}')

    // Завершаем одну задачу
    cy.get('.MuiCheckbox-root').first().click()

    // Фильтруем активные задачи
    cy.contains('Active').click()

    // Проверяем, что только активная задача отображается
    cy.get('#todo_list')
        .should('contain', task2)
        .and('not.contain', task1)
  })

  it('should filter tasks by "Completed"', () => {
    const task1 = 'Task 1'
    const task2 = 'Task 2'

    // Добавляем задачи
    cy.get('#task_input').type(task1)
    cy.get('#task_input').type('{enter}')
    cy.get('#task_input').type(task2)
    cy.get('#task_input').type('{enter}')

    // Завершаем одну задачу
    cy.get('.MuiCheckbox-root').first().click()

    // Фильтруем завершенные задачи
    cy.contains('Completed').click()

    // Проверяем, что только завершенная задача отображается
    cy.get('#todo_list')
        .should('contain', task1)
        .and('not.contain', task2)
  })
})
