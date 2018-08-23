import { trackEvent, action } from "../../analytics/Tracker";

export function trackOpen(sandbox) {
    trackEvent({
        sandbox,
        action: action.open,
        activity: "txnTaxWidget"
    });
}

export function trackClose(sandbox) {
    trackEvent({
        sandbox,
        action: action.close,
        activity: "txnTaxWidget"
    });
}

export function trackItemSave(sandbox) {
    trackEvent({
        sandbox,
        action: action.save,
        activity: "txnTaxWidgetItem"
    });
}

export function trackTaxOverride(sandbox) {
    trackEvent({
        sandbox,
        action: action.save,
        activity: "txnTaxOverride"
    });
}

export function trackTaxOverrideUndo(sandbox) {
    trackEvent({
        sandbox,
        action: action.undo,
        activity: "txnTaxOverride"
    });
}

export function trackTaxOverrideReason(sandbox, activityDetails) {
    trackEvent({
        sandbox,
        action: action.undo,
        activity: "txnTaxOverride",
        activityDetails
    });
}

export function trackTaxOverrideByEnteringRate(sandbox) {
    trackEvent({
        sandbox,
        action: action.input,
        activity: "txnTaxOverrideByRate"
    });
}

export function trackTaxOverrideByEnteringAmount(sandbox) {
    trackEvent({
        sandbox,
        action: action.input,
        activity: "txnTaxOverrideByAmount"
    });
}

export function trackUseShippingAddressChange(sandbox, useShipping) {
    trackEvent({
        sandbox,
        action: action.change,
        activity: useShipping ? "yesShipping" : "noShipping"
    });
}
