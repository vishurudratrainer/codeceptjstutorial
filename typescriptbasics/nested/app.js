var outer;
(function (outer) {
    var invoiceApp;
    (function (invoiceApp) {
        var Invoice = /** @class */ (function () {
            function Invoice() {
            }
            Invoice.prototype.calculateDiscount = function (price) {
                return price * .40;
            };
            return Invoice;
        }());
        invoiceApp.Invoice = Invoice;
    })(invoiceApp = outer.invoiceApp || (outer.invoiceApp = {}));
})(outer || (outer = {}));
/// <reference path = "invoice.ts" />
var invoice = new outer.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));
