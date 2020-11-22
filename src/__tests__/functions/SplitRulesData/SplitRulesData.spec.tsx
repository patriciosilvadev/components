import mountSplitRules from "../../../components/pay/cardLifecycle/utils/mountSplitRules";
/*import {
  sellerZoopPlanComplete,
  cardBrandMastercard,
  installments,
} from "../../mocks/SplitRulesData/function";*/
export const cardBrandMastercard = "mastercard";
export const cardBrandVisa = "Visa";
export const installments = "5";
export const insurance = true;
export const antifraud = {
    resource: "",
    liable: true,
    id: "",
    updated_at: "",
    recipient: undefined,
    transaction: "",
    created_at: "",
    charge_processing_fee: false,
    amount: "",
    charge_recipient_processing_fee: false,
    is_gross_amount: "",
    receivable_gross_amount: "",
    percentage: "4",
    receivable_amount: "",
    description: "Ziro antifraud card-present transaction fee",
    type: "antifraud_ziro_fee_brazil",
};
export const markup = {
    resource: "",
    liable: true,
    id: "",
    updated_at: "",
    recipient: undefined,
    transaction: "",
    created_at: "",
    charge_processing_fee: false,
    amount: "",
    charge_recipient_processing_fee: false,
    is_gross_amount: "",
    receivable_gross_amount: "",
    percentage: "4",
    receivable_amount: "",
    description: "Ziro markup card-present transaction fee",
    type: "markup_ziro_fee_brazil",
};
export const split_rules = [antifraud, markup];

export const sellerZoopPlanComplete = {
    insurance: true,
    activePlan: "standard",
    standard: {
        zoopFee: {
            mastercard: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
            visa: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
        },
        ziroMarkupFee: {
            mastercard: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
            visa: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
        },
        ziroAntifraudFee: {
            mastercard: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
            visa: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
        },
    },
    financedD30: {
        zoopFee: {
            mastercard: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
            visa: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
        },
        ziroMarkupFee: {
            mastercard: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
            visa: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
        },
        ziroAntifraudFee: {
            mastercard: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
            visa: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
        },
    },
};
export const sellerZoopPlanCompleteWithoutInsurance = {
    insurance: false,
    activePlan: "standard",
    standard: {
        zoopFee: {
            mastercard: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
            visa: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
        },
        ziroMarkupFee: {
            mastercard: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
            visa: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
        },
        ziroAntifraudFee: {
            mastercard: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
            visa: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
        },
    },
    financedD30: {
        zoopFee: {
            mastercard: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
            visa: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
        },
        ziroMarkupFee: {
            mastercard: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
            visa: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
        },
        ziroAntifraudFee: {
            mastercard: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
            visa: {
                installment1: "2",
                installment2: "3",
                installment3: "4",
                installment4: "4",
                installment5: "4",
                installment6: "4",
                installment7: "4",
                installment8: "4",
                installment9: "4",
                installment10: "4",
                installment11: "4",
                installment12: "4",
                debit: "1.5",
            },
        },
    },
};

describe("SplitRulesComplete", () => {
    test.each([
        [1, 1, 2],
        [1, 2, 3],
        [2, 1, 3],
    ])(".add(%i, %i)", (a, b, expected) => {
        expect(a + b).toBe(expected);
    });
});

describe("SplitRulesComplete", () => {
    test("testing complete example", () => {
        expect(
            mountSplitRules({
                sellerZoopPlan: sellerZoopPlanComplete,
                cardBrand: cardBrandMastercard,
                installments,
                insurance,
                split_rules,
            }),
        ).toEqual([
            {
                percentage: "4",
                charge_processing_fee: false,
                liable: true,
                recipient: undefined,
                resource: "",
                id: "",
                updated_at: "",
                transaction: "",
                created_at: "",
                amount: "",
                charge_recipient_processing_fee: false,
                is_gross_amount: "",
                receivable_gross_amount: "",
                receivable_amount: "",
                description: "Ziro antifraud card-present transaction fee",
                type: "antifraud_ziro_fee_brazil",
            },
            {
                percentage: "4",
                charge_processing_fee: false,
                liable: true,
                recipient: undefined,
                resource: "",
                id: "",
                updated_at: "",
                transaction: "",
                created_at: "",
                amount: "",
                charge_recipient_processing_fee: false,
                is_gross_amount: "",
                receivable_gross_amount: "",
                receivable_amount: "",
                description: "Ziro markup card-present transaction fee",
                type: "markup_ziro_fee_brazil",
            },
        ]);
    });
});
describe("sellerZoopPlanCompleteWithoutInsurance", () => {
    test("testing complete example without insurance", () => {
        expect(
            mountSplitRules({
                sellerZoopPlan: sellerZoopPlanCompleteWithoutInsurance,
                cardBrand: cardBrandMastercard,
                installments,
                insurance: false,
                split_rules,
            }),
        ).toEqual([
            {
                percentage: 0,
                charge_processing_fee: false,
                liable: true,
                recipient: undefined,
            },
            {
                percentage: "4",
                charge_processing_fee: false,
                liable: true,
                recipient: undefined,
                resource: "",
                id: "",
                updated_at: "",
                transaction: "",
                created_at: "",
                amount: "",
                charge_recipient_processing_fee: false,
                is_gross_amount: "",
                receivable_gross_amount: "",
                receivable_amount: "",
                description: "Ziro markup card-present transaction fee",
                type: "markup_ziro_fee_brazil",
            },
        ]);
    });
});