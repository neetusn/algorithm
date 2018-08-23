import { injectIntl, intlShape } from "react-intl";

import HAMoneyTextBox from "../common/HAMoneyTextBox";
import HARateTextBox from "../../_hui/rate-text-box/HARateTextBox";
import { HASelect, HAItem } from "hui-react";
import React from "react";
import propTypes from "prop-types";

import { toI18Text, toMoney, toRate } from "../../util";
import amountUtil from "neo/data/types/amount";
import { trackTaxOverrideByEnteringRate, trackTaxOverrideByEnteringAmount } from "./txnTaxDetailsTrackers";

export const FIELD_AMOUNT = "amount";
export const FIELD_REASON = "reason";
export const FIELD_RATE = "rate";

const overideReasons = {
    itemsNotTaxable: "INT",
    itemTaxSomewhereElse: "ITSE",
    customerTaxExempt: "CTE",
    other: "OTH"
};

class TaxOverrideForm extends React.Component {
    static propTypes = {
        intl: intlShape,
        showDrawer: propTypes.bool,
        sandbox: propTypes.object,
        onOverrideSave: propTypes.func,
        overrideDetails: propTypes.object,
        recommendedTaxableAmount: propTypes.object,
        recommendedTaxAmount: propTypes.object,
        taxRatesData: propTypes.object,
        onOverrideDrawerHide: propTypes.func,
        onHideOverrideForm: propTypes.func,
        onChange: propTypes.func,
        showOverrideForm: propTypes.bool
    };

    constructor(props) {
        super(props);

        this.state = {
            forceValidity: false
        };
    }

    handleChange = event => {
        const { recommendedTaxableAmount, overrideDetails, sandbox } = this.props;
        const { name, value } = event.target;
        if (name === FIELD_AMOUNT) {
            const overrideAmount = toMoney(value);
            const rateAmountDecimal = amountUtil.getRateFromMoneyAndQuantity(overrideAmount, recommendedTaxableAmount);
            const rateAmountRate = rateAmountDecimal.multiply(amountUtil.getHundredRate());
            this.props.onChange({ ...overrideDetails, [`${FIELD_AMOUNT}`]: value, [`${FIELD_RATE}`]: rateAmountRate });
            trackTaxOverrideByEnteringAmount(sandbox);
        } else if (name === FIELD_RATE) {
            const overrideRateDecimal = toRate(value);
            const overrideRate = overrideRateDecimal.divide(amountUtil.getHundredRate());
            const overrideAmount = amountUtil.getMoneyFromQuantityAndRate(recommendedTaxableAmount, overrideRate);
            this.props.onChange({
                ...overrideDetails,
                [`${FIELD_AMOUNT}`]: overrideAmount,
                [`${FIELD_RATE}`]: overrideRateDecimal
            });
            trackTaxOverrideByEnteringRate(sandbox);
        } else {
            const { overrideDetails = {} } = this.props;
            this.props.onChange({ ...overrideDetails, [name]: value });
        }
    };

    handleConfirmOverride = () => {
        const { overrideDetails } = this.props;
        const { amount, rate, reason } = overrideDetails;
        if (amount && rate && reason) {
            this.props.onOverrideSave();
        } else {
            this.setState({ forceValidity: true });
        }
    };

    render() {
        const { intl, overrideDetails, showOverrideForm, recommendedTaxAmount } = this.props;
        const { forceValidity } = this.state;
        const showDoubleCheckLine = overrideDetails[FIELD_AMOUNT] !== undefined;
        const overrideAmount = toMoney(overrideDetails[FIELD_AMOUNT]);
        const amountComponent = (
            <span className="double-check-amount">
                {recommendedTaxAmount.subtract(overrideAmount).toLocalizedString()}
            </span>
        );

        return (
            <div className={`tax-overide-form${showOverrideForm ? " show" : ""}`}>
                <i className="pointer" />
                <h3>{toI18Text(intl, "txnTaxDetailOverrideFormHeading")}</h3>
                <p className="drawer-ghost-text">{toI18Text(intl, "txnTaxDetailOverrideFormNonCompliantWarning")}</p>

                <div className="row justify-padding">
                    <div className="col-xs-2">
                        {showOverrideForm === true && (
                            <HARateTextBox
                                className="full-width"
                                alwaysRenderValidity={forceValidity}
                                min={0}
                                label={toI18Text(intl, "rate")}
                                name={FIELD_RATE}
                                value={overrideDetails[FIELD_RATE]}
                                required={true}
                                noRequiredIndicator={true}
                                onChange={this.handleChange}
                            />
                        )}
                    </div>

                    <div className="col-xs-1 align-center">
                        <span className="ghost-text or-seprator">
                            {toI18Text(intl, "txnTaxDetailDrawerOrSeprator")}
                        </span>
                    </div>

                    <div className="col-xs-3">
                        {showOverrideForm === true && (
                            <HAMoneyTextBox
                                className="full-width"
                                resetToEmpty={true}
                                alwaysRenderValidity={forceValidity}
                                min={0}
                                label={toI18Text(intl, "amount")}
                                name={FIELD_AMOUNT}
                                value={overrideDetails[FIELD_AMOUNT]}
                                required={true}
                                noRequiredIndicator={true}
                                onChange={this.handleChange}
                            />
                        )}
                    </div>

                    <div className="col-xs-6">
                        <HASelect
                            className="full-width"
                            required={true}
                            noRequiredIndicator={true}
                            alwaysRenderValidity={forceValidity}
                            name={FIELD_REASON}
                            placeholder={toI18Text(intl, "reasonPlaceholder")}
                            label={toI18Text(intl, "reasonLabel")}
                            value={overrideDetails[FIELD_REASON]}
                            onChange={this.handleChange}>
                            {Object.entries(overideReasons).map(([key, value]) => {
                                return (
                                    <HAItem key={key} value={value}>
                                        {toI18Text(intl, `taxOverrideReason_${value}`)}
                                    </HAItem>
                                );
                            })}
                        </HASelect>
                    </div>
                </div>

                {showDoubleCheckLine && (
                    <p>
                        {toI18Text(intl, "txnTaxDetailDrawerOverrideInfoPrefix")} {amountComponent}{" "}
                        {toI18Text(intl, "txnTaxDetailDrawerOverrideInfoSufix")}
                    </p>
                )}
                <div className="gap vertical-10" />
                <div className="row justify-padding">
                    <div className="col-xs-12">
                        <button className="ha-button" onClick={this.props.onHideOverrideForm}>
                            {toI18Text(intl, "cancel")}
                        </button>
                        <button className="ha-button ha-button-primary indent-10" onClick={this.handleConfirmOverride}>
                            {toI18Text(intl, "txnTaxDetailOverrideConfirm")}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default injectIntl(TaxOverrideForm);
