import { dataObject } from "./data";

class Intercept {
    interceptNetworkPost(url, alias, fileName) {
        cy.intercept("POST", "https://opensource-demo.orangehrmlive.com/web/index.php/"+ url).as(alias);
        cy.wait(`@${alias}`).then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            dataObject.writeJsonData(fileName, interception.response);
        });
    }
}
export const intercept = new Intercept();