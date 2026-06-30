import { randomValues } from './random';
class TaxInvoice{
    createInvoice(address, telephone, vatTin, quantity, unitPrice) {
        let customerName = `${randomValues.randomString(10)}`;
        cy.get('[data-toggle="dropdown"]').click();
        cy.contains('Tax Invoice').click();
        cy.contains('Add New Invoice').click();
        cy.get('[x-model="form.customerName"]')
        .filter(':visible')
        .first()
        .type(customerName);
        cy.customInput('[x-model="form.customerAddress"]', address);
        cy.customInput('[x-model="form.phoneNo"]', telephone);
        cy.customInput('[x-model="form.vatTin"]', vatTin);
        cy.get('select')
          .filter(':visible')
          .first()
          .select('Engagement & Fee Proposal for Preservative Relief')
          .should('have.value', 'Engagement & Fee Proposal for Preservative Relief');
        cy.customInput('[x-model="item.quantity"]', quantity);
        cy.customInput('[x-model="item.unitPrice"]', unitPrice);
        cy.get('button[x-on\\:click="add()"]').click();
        cy.writeFile(`cypress/fixtures/responseJson/invoice_created.json`, { customerName, address, telephone, vatTin, quantity, unitPrice });
    }
}
export const taxInvoice = new TaxInvoice();