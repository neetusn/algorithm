import { ITEMS_WILL_LOAD, TAX_CLASSIFICATIONS_WILL_LOAD, actionCreator } from "../../actions";

import TxnTaxDetailsController from "./TxnTaxDetailsController";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export const mapStateToProps = state => {
    const { item, taxClassificationMap } = state;
    return {
        items: item.connection,
        taxClassificationMap
    };
};

export const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            loadItems: args => actionCreator(ITEMS_WILL_LOAD, args),
            loadTaxClassifications: args => actionCreator(TAX_CLASSIFICATIONS_WILL_LOAD, args)
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(TxnTaxDetailsController);
