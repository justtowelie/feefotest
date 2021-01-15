/// <reference types="Cypress" />
import HomePage from '../pageObject/HomePage'
import data from '../../support/data'
import JobSearch from '../pageObject/JobSearch'

describe('Job Search verification', function()
{
    beforeEach(function(){
        const homePage = new HomePage
        cy.visit(Cypress.env('url'))
        homePage.confirmHomePageLoaded();
        homePage.clickAndAcceptCookies();
    })

    it('Job Search for a QA Automation role', function(){
        const homePage = new HomePage
        const jobSearch = new JobSearch
        homePage.inputKeyWords(data.QA_AUTOMATION);
        homePage.inputLocation(data.location.london);
        homePage.clickSearch();
        jobSearch.verifyHeaderContainsRelevantInfo(data.QA_AUTOMATION);
    })
})