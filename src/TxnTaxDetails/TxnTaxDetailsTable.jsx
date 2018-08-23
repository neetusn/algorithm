import { injectIntl, intlShape } from "react-intl";

import React from "react";
import propTypes from "prop-types";
import { getZeroMoney, capitalizeString, toCurrencyString, toI18Text } from "../../util";

class TxnTaxDetailsTable extends React.Component {
    static propTypes = {
        intl: intlShape,
        showDrawer: propTypes.bool,
        isTaxOverridden: propTypes.bool,
        recommendedTaxableAmount: propTypes.object,
        recommendedTaxAmount: propTypes.object,
        sandbox: propTypes.object,
        taxRatesData: propTypes.object,
        loading: propTypes.bool,
        taxDetails: propTypes.object,
        overrideConfirmed: propTypes.bool,
        overrideTaxAmount: propTypes.object
    };

    getName(name, level) {
        if (name && level) {
            if (name.indexOf(",") > -1) {
                name = name.substring(name.indexOf(",") + 1).trim();
            }

            const regEx = new RegExp(level, "ig");
            return `${name.replace(regEx, "").trim()} (${capitalizeString(level)})`;
        }

        return name;
    }

    renderTaxDetailRows(taxDetails) {
        const { isTaxOverridden } = this.props;
        let amountClass = "right-align";
        if (isTaxOverridden === true) {
            amountClass += " line-through";
        }

        return taxDetails.map(taxDetail => {
            const { taxRateId, name, netAmount, taxAmount, ratePercent, level } = taxDetail;

            return (
                <tr key={taxRateId}>
                    <td>{this.getName(name, level)}</td>
                    <td className="right-align">{netAmount.toCurrencyString()} </td>
                    <td className={amountClass}>{ratePercent} </td>
                    <td className={amountClass}>{taxAmount.toCurrencyString()} </td>
                </tr>
            );
        });
    }

    renderAmount() {
        const { recommendedTaxAmount = getZeroMoney(), overrideTaxAmount, isTaxOverridden } = this.props;

        if (isTaxOverridden === true) {
            return (
                <span>
                    <span className="overriden-amount">{toCurrencyString(overrideTaxAmount)}</span>{" "}
                    <span className="orginal-amount line-through">{recommendedTaxAmount.toCurrencyString()}</span>
                </span>
            );
        } else {
            return <span>{recommendedTaxAmount.toCurrencyString()}</span>;
        }
    }

    render() {
        const { taxDetails, intl, loading } = this.props;

        return (
            <div className={`txn-details-table${loading === true ? " loading" : ""}`}>
                {taxDetails &&
                    taxDetails.length > 0 && (
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>{toI18Text(intl, "txnTaxDetailsTableHeaderTax")}</th>
                                    <th className="right-align">
                                        {toI18Text(intl, "txnTaxDetailsTableHeaderInvoicedAmount")}
                                    </th>
                                    <th className="right-align">{toI18Text(intl, "txnTaxDetailsTableHeaderRate")}</th>
                                    <th className="right-align">
                                        {toI18Text(intl, "txnTaxDetailsTableHeaderTaxAmount")}
                                    </th>
                                </tr>
                            </thead>

                            <tbody>{this.renderTaxDetailRows(taxDetails)}</tbody>
                        </table>
                    )}
                <table className="footer-table">
                    <tbody>
                        <tr>
                            <td>{toI18Text(intl, "txnTaxDetailsTotalSalesTaxDue")}</td>
                            <td className="right-align">{this.renderAmount()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default injectIntl(TxnTaxDetailsTable);
