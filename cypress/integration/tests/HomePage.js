/// <reference types="Cypress" />
import HomePage from '../pageObject/HomePage'
import data from '../../support/data'
import CoursesPage from '../pageObject/CoursesPage'

describe('Home Page verification', function()
{
    beforeEach(function(){
        const homePage = new HomePage
        cy.visit(Cypress.env('url'))
        homePage.confirmHomePageLoaded();
        homePage.clickAndAcceptCookies();
    })

    it('Go to the courses page and select a free course', function(){
        const homePage = new HomePage
        const coursesPage = new CoursesPage
        homePage.clickMenuAndSelectCourses();
        coursesPage.selectFreeCourses();
        coursesPage.verifyFreeCourses(data.freecourses.title);
    })
})


