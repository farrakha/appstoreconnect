'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../api')
/**
 * Download finance reports filtered by your specified criteria.
 * @param query
 */
function downloadFinancialReports(api, query) {
    return api_1.GET(api, '/financeReports', { query })
}
exports.downloadFinancialReports = downloadFinancialReports
/**
 * Download sales and trends reports filtered by your specified criteria.
 * @param query
 */
function downloadSalesReports(api, query) {
    return api_1.GET(api, '/salesReports', { query })
}
exports.downloadSalesReports = downloadSalesReports
