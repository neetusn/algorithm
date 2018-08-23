import { injectIntl, intlShape } from "react-intl";

import { HACheckbox, HATextarea } from "hui-react";
import React from "react";
import propTypes from "prop-types";

import { toI18Text } from "../../util";

class ShippingAddress extends React.Component {
    static propTypes = {
        intl: intlShape,
        shippingAddress: propTypes.string,
        onUseShippingAddressChange: propTypes.fuc
    };
    constructor(props) {
        super(props);
        const { shippingAddress } = props;
        this.state = {
            originalShippingAddress: shippingAddress,
            showShppingAddress: !this.isShippingAddressEmpty(shippingAddress)
        };
    }

    isShippingAddressEmpty(shippingAddress) {
        if (shippingAddress && shippingAddress.trim().length > 0) {
            return false;
        }
        return true;
    }

    handleClick = event => {
        const { checked: showShppingAddress } = event.target;

        if (showShppingAddress === true) {
            const { originalShippingAddress } = this.state;
            this.props.onUseShippingAddressChange({
                address: originalShippingAddress,
                useShipping: showShppingAddress
            });
        } else {
            this.setState({ showShppingAddress });
            this.props.onUseShippingAddressChange({ address: "", useShipping: showShppingAddress });
        }

        this.setState({ showShppingAddress });
    };

    handleChange = event => {
        const { value: address } = event.target;
        this.props.onUseShippingAddressChange({ address, useShipping: true });
    };

    render() {
        const { intl, shippingAddress } = this.props;
        const { showShppingAddress } = this.state;

        return (
            <div>
                <HACheckbox
                    label={toI18Text(intl, "txnTaxDetailDrawerShippingCheckboxLabel")}
                    onClick={this.handleClick}
                    checked={showShppingAddress}
                />

                {showShppingAddress === true && (
                    <div className="indent-25">
                        <h4>{toI18Text(intl, "txnTaxDetailDrawerShippingAddressHeading")}</h4>
                        <div className="row justify-padding">
                            <div className="col-xs-12">
                                <HATextarea
                                    className="customer-address"
                                    onChange={this.handleChange}
                                    value={shippingAddress}
                                />
                                <p className="shipping-address-info">
                                    {toI18Text(intl, "txnTaxDetailDrawerShippingAddressDescription")}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default injectIntl(ShippingAddress);
