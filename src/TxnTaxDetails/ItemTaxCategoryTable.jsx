import "hui/popover";
import "hui/popover-form";

import { injectIntl, intlShape } from "react-intl";
import { toV4LocalId, isConnectionHasData, toI18Text } from "../../util";
import React from "react";
import propTypes from "prop-types";

import ItemTaxClassificationMapper from "../ItemTaxClassificationMapper";
import Table, { Row, Col, RowBar, Head } from "../../_hui/Table";
import InfoLabel from "../common/InfoLabel";

class ItemTaxCategoryTable extends React.Component {
    static propTypes = {
        intl: intlShape,
        sandbox: propTypes.object,
        items: propTypes.object,
        taxClassificationMap: propTypes.map,
        updatedTaxClassificationMapping: propTypes.map,
        onTaxClassificationMappingChange: propTypes.func,
        onItemSave: propTypes.func
    };
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleTaxClassificationMappingChange = ({ itemId }) => {
        this.props.onTaxClassificationMappingChange({ itemId });
    };

    handleItemSave = ({ itemId }) => {
        this.props.onItemSave(itemId);
        this.toggleRowBar(itemId);
    };

    handleEdit = (event, id) => {
        event.stopPropagation();
        event.preventDefault();
        this.setState({ selectedRowId: id });
    };

    toggleRowBar = id => {
        this.setState(prevState => {
            const key = `row_${id}`;
            return { [key]: !prevState[key] };
        });
    };

    renderItemsRows() {
        const { items, taxClassificationMap, sandbox, intl } = this.props;

        return (
            items &&
            items.edges.map(edge => {
                const item = edge.node;
                const { id, name, traits, entityVersion, type: itemType } = item;
                let taxClassificationName = "";
                let taxClassificationCode;

                const { tax } = traits;

                if (tax && tax.taxClassification && tax.taxClassification.id) {
                    const { taxClassification: itemTaxClassification } = tax;
                    const { id: taxClassificationGlobalId } = itemTaxClassification;
                    taxClassificationName = itemTaxClassification.name;
                    taxClassificationCode = toV4LocalId(taxClassificationGlobalId);
                }

                const key = `row_${id}`;
                const showRowBar = this.state[key] === true;
                return (
                    <Row key={key}>
                        <Col>{name}</Col>
                        <Col>{taxClassificationName} </Col>
                        <Col className="action">
                            {tax ? (
                                <a onClick={() => this.toggleRowBar(id)}>
                                    {toI18Text(intl, "txnTaxDetailDrawerEditItemLabel")}
                                </a>
                            ) : (
                                toI18Text(intl, "txnTaxDetailsTaxDisable")
                            )}
                        </Col>
                        <RowBar open={showRowBar}>
                            <div className="item-mapping-section">
                                <span className="close-icon" onClick={() => this.toggleRowBar(id)}>
                                    <span className="hi hi-close" />
                                </span>
                                <ItemTaxClassificationMapper
                                    onSave={this.handleItemSave}
                                    sandbox={sandbox}
                                    itemId={id}
                                    itemType={itemType}
                                    onChange={this.handleTaxClassificationMappingChange}
                                    entityVersion={entityVersion}
                                    taxClassificationMap={taxClassificationMap}
                                    taxClassificationCode={taxClassificationCode}
                                />
                            </div>
                        </RowBar>
                    </Row>
                );
            })
        );
    }

    render() {
        const { items, intl } = this.props;

        if (!isConnectionHasData(items)) {
            return null;
        }

        return (
            <div>
                <InfoLabel
                    id="itemTaxCategoryTableHeading"
                    label={toI18Text(intl, "itemTaxCategoryTableHeading")}
                    message={toI18Text(intl, "ItemTaxCategoryTableHeadingTooltips")}
                />
                <Table frame={true}>
                    <Head>
                        <Col>{toI18Text(intl, "itemTaxCatagoryTableInvoicedItemHeader")}</Col>
                        <Col>{toI18Text(intl, "itemTaxCategoryTableTaxCatagoryHeader")}</Col>
                        <Col className="action" />
                    </Head>
                    {this.renderItemsRows()}
                </Table>
            </div>
        );
    }
}

export default injectIntl(ItemTaxCategoryTable);
