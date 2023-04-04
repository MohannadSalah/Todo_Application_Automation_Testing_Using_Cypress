/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import TodoApi from '../api/todoApi';
import UserApi from '../api/userApi';
import TodoPage from '../pages/todoPage';
import NewTodoPage from '../pages/newTodoPage';



describe('todo test cases', () => {
    let token;
    beforeEach(() => {
        UserApi.register().then(response => {
            token = response.body.access_token
        })
    })

    it('Should be able to add a todo', () => {
        new TodoPage()
        .load()
        .clickOnAddButton()
        .addTodo('learn Automation')
        .TodoName('learn Automation')
        
    })

    it('Should be able to mark a todo completed', () => {
        
        TodoApi.add(token);
    
        new TodoPage()
            .load()
            .markFirstTodoBox()
            .firstTodoShouldHaveColor('rgb(33, 76, 97)')
        

    })

// https://cloud.cypress.io/projects/drrd5p/runs/1/specs
})
