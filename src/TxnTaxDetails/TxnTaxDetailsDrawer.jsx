import { HADrawerLarge, HAFooter, HASection, HAPageMessage } from "hui-react";
import { injectIntl, intlShape } from "react-intl";

import React from "react";
import propTypes from "prop-types";
import TaxOverrideForm from "./TaxOverrideForm";
import TxnTaxDetailsTable from "./TxnTaxDetailsTable";

import InfoLabel from "../common/InfoLabel";
import { toI18Text } from "../../util";
import ShippingAddress from "./ShippingAddress";

import ItemTaxCategoryTable from "./ItemTaxCategoryTable";
import CompanyAddress from "../CompanyAddress";
import CustomerTaxExempter from "../CustomerTaxExempter"; //TODO: find right word for Exempter.

class TxnTaxDetailsDrawer extends React.Component {
    static propTypes = {
        intl: intlShape,
        sandbox: propTypes.object,
        loading: propTypes.bool,
        taxRatesData: propTypes.object,
        onToastMsgClose: propTypes.func,
        recommendedTaxableAmount: propTypes.object,
        onUseShippingAddressChange: propTypes.func,
        items: propTypes.object,
        onOverrideAmountChange: propTypes.func,
        showDrawer: propTypes.bool,
        onOverrideSave: propTypes.func,
        onCustomerMarkedAsTaxExempted: propTypes.func,
        taxDetails: propTypes.object,
        showOverrideForm: propTypes.bool,
        overrideDetails: propTypes.object,
        taxClassificationMap: propTypes.map,
        updatedTaxClassificationMapping: propTypes.map,
        onOverrideReject: propTypes.func,
        onHideOverrideForm: propTypes.func,
        onSave: propTypes.func,
        isTaxOverridden: propTypes.bool,
        onOverrideFormShow: propTypes.func,
        onDismiss: propTypes.func,
        shippingAddress: propTypes.string,
        overrideTaxAmount: propTypes.object,
        recommendedTaxAmount: propTypes.object,
        onShippingAddressChange: propTypes.func,
        handleMultiCurrency: propTypes.bool,
        currencyIsoCode: propTypes.string,
        onTaxClassificationMappingChange: propTypes.func,
        onItemSave: propTypes.func,
        nameId: propTypes.string,
        taxDetailStatus: propTypes.string
    };

    isTxnOON() {
        const { taxDetailStatus } = this.props;

        return taxDetailStatus === "OON_SCENARIO";
    }

    renderTxnTaxDetailsTable() {
        const {
            taxDetails,
            recommendedTaxAmount,
            overrideTaxAmount,
            isTaxOverridden,
            overrideDetails,
            loading,
            intl
        } = this.props;

        if (this.isTxnOON() === true) {
            return (
                <HAPageMessage className="oon-page-msg" titleText="Sales Tax Details" type="warn" dismissible="false">
                    {toI18Text(intl, "txnTaxDetailOONMsg")}
                </HAPageMessage>
            );
        } else {
            return (
                <TxnTaxDetailsTable
                    loading={loading}
                    isTaxOverridden={isTaxOverridden}
                    overrideTaxAmount={overrideTaxAmount}
                    overrideDetails={overrideDetails}
                    taxDetails={taxDetails}
                    recommendedTaxAmount={recommendedTaxAmount}
                />
            );
        }
    }

    renderContent() {
        const {
            showOverrideForm,
            sandbox,
            intl,
            overrideDetails,
            items,
            taxClassificationMap,
            shippingAddress,
            updatedTaxClassificationMapping,
            recommendedTaxAmount,
            recommendedTaxableAmount,
            isTaxOverridden,
            nameId
        } = this.props;

        return (
            <div>
                <p>{toI18Text(intl, "txnTaxDetailDrawerDescription")}</p>
                <div className="gap vertical-15" />
                {this.renderTxnTaxDetailsTable()}
                <div className="gap vertical-5" />
                {isTaxOverridden === false &&
                    this.isTxnOON() !== true && (
                        <a className="pull-right" onClick={this.props.onOverrideFormShow}>
                            {toI18Text(intl, "txnTaxDetailDrawerOverrideLinkLabel")}
                        </a>
                    )}
                <div className="clear-div" />
                <TaxOverrideForm
                    showOverrideForm={showOverrideForm}
                    onOverrideSave={this.props.onOverrideSave}
                    onHideOverrideForm={this.props.onHideOverrideForm}
                    recommendedTaxAmount={recommendedTaxAmount}
                    recommendedTaxableAmount={recommendedTaxableAmount}
                    overrideDetails={overrideDetails}
                    onChange={this.props.onOverrideAmountChange}
                    sandbox={sandbox}
                />
                <div className="gap vertical-25" />
                <p className="font-weight normal">{toI18Text(intl, "txnTaxDetailDrawerCalculationSettingsHeading")}</p>
                <InfoLabel
                    id="txnTaxDetailDrawerBusinessAddressLabel"
                    label={toI18Text(intl, "txnTaxDetailDrawerBusinessAddressLabel")}
                    message={toI18Text(intl, "txnTaxDetailDrawerBusinessAddressTooltip")}
                />
                <CompanyAddress sandbox={sandbox} />

                <div className="gap vertical-25" />
                <InfoLabel
                    id="txnTaxDetailDrawerCustomerInfoLabel"
                    label={toI18Text(intl, "txnTaxDetailDrawerCustomerInfoLabel")}
                    message={toI18Text(intl, "txnTaxDetailDrawerCustomerInfoTooltip")}
                />

                <CustomerTaxExempter
                    sandbox={sandbox}
                    nameId={nameId}
                    onCustomerMarkedAsTaxExempted={this.props.onCustomerMarkedAsTaxExempted}
                />

                <ShippingAddress
                    onUseShippingAddressChange={this.props.onUseShippingAddressChange}
                    shippingAddress={shippingAddress}
                    onChange={this.props.onShippingAddressChange}
                />

                <div className="gap vertical-25" />

                <ItemTaxCategoryTable
                    updatedTaxClassificationMapping={updatedTaxClassificationMapping}
                    onTaxClassificationMappingChange={this.props.onTaxClassificationMappingChange}
                    sandbox={sandbox}
                    items={items}
                    onItemSave={this.props.onItemSave}
                    taxClassificationMap={taxClassificationMap}
                />
                <div className="gap vertical-15" />
            </div>
        );
    }

    renderFooterButton() {
        const { isTaxOverridden, intl } = this.props;

        if (isTaxOverridden === true) {
            return (
                <div>
                    <button className="ha-button  pull-left" onClick={this.props.onOverrideReject}>
                        {toI18Text(intl, "txnTaxDetailOverrideDrawerResetButton")}
                    </button>

                    <button className="ha-button ha-button-primary" onClick={this.props.onDismiss}>
                        {toI18Text(intl, "close")}
                    </button>
                </div>
            );
        } else {
            return (
                <button
                    className="ha-button ha-button-primary"
                    disabled={false}
                    onClick={this.props.onDismiss}
                    data-automation-id="editAgencyDrawerSave">
                    {toI18Text(intl, "close")}
                </button>
            );
        }
    }

    render() {
        const { showDrawer, intl, updatedTaxClassificationMapping, recommendedTaxableAmount, loading } = this.props;

        return (
            <HADrawerLarge
                className="indirect-tax-ui-txn-details-drawer utc"
                titleText={toI18Text(intl, "txnTaxDetailDrawerTitle")}
                show={showDrawer}
                loading={loading}
                onItemSave={this.props.onItemSave}
                updatedTaxClassificationMapping={updatedTaxClassificationMapping}
                recommendedTaxableAmount={recommendedTaxableAmount}
                backdrop={true}
                onDismiss={this.props.onDismiss}>
                <HASection>{this.renderContent()}</HASection>
                <HAFooter>{this.renderFooterButton()}</HAFooter>
            </HADrawerLarge>
        );
    }
}

export default injectIntl(TxnTaxDetailsDrawer);
