class HomePage {

    constructor() {
        this.VIEW_OUR_PLANS_BUTTON = '[title="View our plans"]';
        this.COOKIES_VERIFICATION = '#onetrust-accept-btn-handler';
        this.HOME_PAGE_VERIFICATION = '.reed-logo > span';
        this.KEY_WORD_INPUT = '#main-keywords';
        this.LOCATION_INPUT = '#main-location';
        this.CLICK_SEARCH = '.form-submit > .desktop-content';
        this.MENU_ICON = '.menu-button';
        this.COURSES_OPTION = '.courses > .gtmNavMenu';
        this.CAREER_ADVICE = '.career-advice > .gtmNavMenu';
    }

    confirmHomePageLoaded(){
        cy.get(this.HOME_PAGE_VERIFICATION);
    }

    clickAndAcceptCookies(){
        cy.get(this.COOKIES_VERIFICATION).click();
    }

    clickViewOurPlans() {
        cy.get(this.VIEW_OUR_PLANS_BUTTON).click();
    }

    inputKeyWords(value) {
        cy.get(this.KEY_WORD_INPUT).type(value).should('have.value', value);
    }

    inputLocation(value) {
        cy.get(this.LOCATION_INPUT).type(value).should('have.value', value);
    }

    clickSearch() {
        cy.get(this.CLICK_SEARCH).click();
    }

    clickMenuAndSelectCourses() {
        cy.get(this.MENU_ICON).click();
        cy.get(this.COURSES_OPTION).click();
    }


}


export default HomePage