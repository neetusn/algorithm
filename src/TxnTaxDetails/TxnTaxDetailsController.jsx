import "./tax-details.scss";

import React from "react";
import propTypes from "prop-types";
import TxnTaxDetailsDrawer from "./TxnTaxDetailsDrawer";
import nls from "../../nls";
import { wrapWithIntlProvider } from "@sbg/ui-intl";
import { toMoney, isAmountEqual } from "../../util";
import {
    trackOpen,
    trackClose,
    trackItemSave,
    trackTaxOverride,
    trackTaxOverrideUndo,
    trackTaxOverrideReason,
    trackUseShippingAddressChange
} from "./txnTaxDetailsTrackers";

class TxnTaxDetailsController extends React.Component {
    static propTypes = {
        sandbox: propTypes.object,
        taxRatesData: propTypes.object,
        loadItems: propTypes.func,
        show: propTypes.bool,
        onUnmount: propTypes.func,
        loadTaxClassifications: propTypes.func,
        onUseShippingAddressChange: propTypes.func,
        onOverrideReject: propTypes.func,
        reCalcRecommendation: propTypes.func,
        itemIds: propTypes.object,
        items: propTypes.object,
        taxClassificationMap: propTypes.map,
        updatedTaxClassificationMapping: propTypes.map,
        onOverride: propTypes.func.isRequired,

        shippingAddress: propTypes.string,
        taxReviewReason: propTypes.string,
        handleMultiCurrency: propTypes.string,
        currencyIsoCode: propTypes.string,
        overrideTaxAmount: propTypes.object,
        recommendedTaxAmount: propTypes.object,
        recommendedTaxableAmount: propTypes.object,
        nameId: propTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            showDrawer: props.show,
            overrideDetails: {},
            showToastMsg: false,
            updatedTaxClassificationMapping: new Map()
        };
        this.lastTaxData;
    }

    componentDidMount() {
        const { itemIds = [], sandbox } = this.props;
        const validItemIds = itemIds.filter(itemId => itemId);

        if (validItemIds && validItemIds.length > 0) {
            this.props.loadItems(validItemIds);
        }

        this.props.loadTaxClassifications();
        trackOpen(sandbox);
    }
    componentWillReceiveProps() {
        const { taxRatesData } = this.props;
        const { data, status: taxDetailStatus } = taxRatesData;

        if (taxDetailStatus !== "TAX_OVERRIDE_SCENARIO") {
            this.lastTaxData = data;
        }
    }

    handleItemSave = () => {
        const { itemIds = [], sandbox } = this.props;
        this.props.loadItems(itemIds);
        trackItemSave(sandbox);
    };

    handleDismiss = () => {
        const { sandbox } = this.props;
        this.setState({ showDrawer: false });
        trackClose(sandbox);
    };

    handleTaxClassificationMappingChange = () => {
        const { itemIds = [] } = this.props;
        this.props.loadItems(itemIds);
        this.props.reCalcRecommendation();
    };

    handleCustomerMarkedAsTaxExempted = () => {
        this.props.reCalcRecommendation();
    };

    handleOverrideAmountChange = overrideDetails => {
        this.setState({ overrideDetails });
    };

    handleOverrideSave = () => {
        const { sandbox } = this.props;
        const { overrideDetails } = this.state;
        this.setState({ showOverrideForm: false });
        if (overrideDetails.amount !== undefined) {
            trackTaxOverride(sandbox);
            trackTaxOverrideReason(sandbox, { reason: overrideDetails.reason });

            this.props.onOverride(toMoney(overrideDetails.amount));
        }
    };

    handleUseShippingAddressChange = ({ useShipping, address }) => {
        const { sandbox } = this.props;
        trackUseShippingAddressChange(sandbox, useShipping);

        this.props.onUseShippingAddressChange({ useShipping, address });
    };

    handleOverrideFormShow = () => {
        this.setState({ showOverrideForm: true, overrideDetails: {} });
    };

    handleHideOverrideForm = () => {
        this.setState({ showOverrideForm: false });
    };

    handleOverrideReject = () => {
        const { sandbox } = this.props;
        trackTaxOverrideUndo(sandbox);
        this.props.onOverrideReject();
    };

    render() {
        const {
            sandbox,
            items,
            taxClassificationMap,
            taxRatesData,
            shippingAddress,
            taxReviewReason,
            overrideTaxAmount,
            recommendedTaxAmount,
            handleMultiCurrency,
            currencyIsoCode,
            recommendedTaxableAmount,
            nameId
        } = this.props;

        const {
            showDrawer,
            overrideDetails,
            updatedTaxClassificationMapping,
            showOverrideForm,
            showToastMsg
        } = this.state;

        const { data = {}, status: taxDetailStatus, taxData } = taxRatesData;

        //2nd case is due to platform bug.
        const isTaxOverridden =
            taxDetailStatus === "TAX_OVERRIDE_SCENARIO" &&
            overrideTaxAmount &&
            isAmountEqual(recommendedTaxAmount, overrideTaxAmount) !== true;

        let taxDetails = Object.values(data);

        if (taxDetailStatus === "TAX_OVERRIDE_SCENARIO") {
            taxDetails = this.lastTaxData ? Object.values(this.lastTaxData) : Object.values(taxData);
        }

        return (
            <TxnTaxDetailsDrawer
                taxDetails={taxDetails}
                overrideDetails={overrideDetails}
                taxDetailStatus={taxDetailStatus}
                isTaxOverridden={isTaxOverridden}
                onOverrideFormShow={this.handleOverrideFormShow}
                onHideOverrideForm={this.handleHideOverrideForm}
                onOverrideSave={this.handleOverrideSave}
                onOverrideReject={this.handleOverrideReject}
                sandbox={sandbox}
                showToastMsg={showToastMsg}
                onItemSave={this.handleItemSave}
                taxReviewReason={taxReviewReason}
                items={items}
                nameId={nameId}
                onSave={this.handleSave}
                shippingAddress={shippingAddress}
                showDrawer={showDrawer}
                onOverrideAmountChange={this.handleOverrideAmountChange}
                onDismiss={this.handleDismiss}
                overrideTaxAmount={overrideTaxAmount}
                recommendedTaxAmount={recommendedTaxAmount}
                recommendedTaxableAmount={recommendedTaxableAmount}
                handleMultiCurrency={handleMultiCurrency}
                currencyIsoCode={currencyIsoCode}
                onUseShippingAddressChange={this.handleUseShippingAddressChange}
                taxClassificationMap={taxClassificationMap}
                onTaxClassificationMappingChange={this.handleTaxClassificationMappingChange}
                updatedTaxClassificationMapping={updatedTaxClassificationMapping}
                showOverrideForm={showOverrideForm}
                onCustomerMarkedAsTaxExempted={this.handleCustomerMarkedAsTaxExempted}
            />
        );
    }
}

export default wrapWithIntlProvider(TxnTaxDetailsController, nls("indirect-tax"));
