import neatCSV from 'neat-csv';
class DataObject {
    getCsvData(fileName) {
        return cy.fixture("csv/" + fileName)
            .then(neatCSV) // Parse CSV string to JSON array
            .then((data) => {
                return data; // Return the first row of data
            });
    }
    getJsonData(fileName) {
        return cy.fixture("responseJson/" + fileName)
            .then((data) => {
                return data; // Return the first row of data
            });
    }
    writeJsonData(fileName, data) {
        cy.writeFile("cypress/fixtures/responseJson/" + fileName, data);
    }
}
export const dataObject = new DataObject();