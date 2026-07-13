// Discovery seed data — single source, hand-edited (Foodbridge Module Purchase).
// Loaded via <script src> so screens open on a direct double-click (no server):
// a <script> tag is exempt from the file:// same-origin block that stops fetch() of a local .json.
// Content is identical to the former seed.json (addendum-004); migrated in addendum-006.
// Discovery role-play ONLY — never imported by development/.
window.SEED =
{
  "_comment": "Fake but representative Purchase-Settlement data for discovery role-play ONLY. Never imported by development/. Mirrors the reference settlement UI to the supplier/purchase side; covers the Product/Payment/Asset streams and the scenarios in the market-research inputs. Shaped for a vanilla-JS HTML prototype (discovery is HTML-only). See resources/research/purchase-settlement-market-research.md and instructions/inputs/settlement reference UI/_annotations.md.",

  "meta": {
    "module": "foodbridge-module-purchase",
    "company": "Murli Bakery — Distribution",
    "currency": "INR",
    "currencySymbol": "₹",
    "asOfDate": "2026-07-13",
    "generatedFor": "discovery"
  },

  "kpis": [
    { "id": "open-settlements",    "label": "Open Settlements",       "value": 9,        "sub": "Across all streams" },
    { "id": "mismatch-to-settle",  "label": "Total Mismatch to Settle","value": 14,      "sub": "Product line items" },
    { "id": "outstanding-payments","label": "Outstanding Payments",   "value": "₹1,84,000", "sub": "Owed to / from suppliers" },
    { "id": "outstanding-assets",  "label": "Outstanding Assets",     "value": 92,       "sub": "Returnable units pending" }
  ],

  "warehouses": [
    { "id": "wh-bls", "name": "Bilaspur Central Warehouse", "code": "WH-BLS" },
    { "id": "wh-rpr", "name": "Raipur Depot", "code": "WH-RPR" }
  ],

  "suppliers": [
    { "id": "sup-balaji",  "name": "Shree Balaji Flour Mills",  "reliability": 0.94 },
    { "id": "sup-anand",   "name": "Anand Dairy Farms",         "reliability": 0.88 },
    { "id": "sup-rajesh",  "name": "Rajesh Packaging Co.",      "reliability": 0.71 },
    { "id": "sup-sunrise", "name": "Sunrise Foods Pvt Ltd",     "reliability": 0.90 },
    { "id": "sup-gupta",   "name": "Gupta Traders",             "reliability": 0.82 }
  ],

  "actors": [
    { "id": "u-suresh", "name": "Suresh Yadav",  "role": "Purchase Executive" },
    { "id": "u-ramesh", "name": "Ramesh Sahu",   "role": "Warehouse Staff" },
    { "id": "u-neha",   "name": "Neha Verma",    "role": "Quality Inspector" },
    { "id": "u-priya",  "name": "Priya Nair",    "role": "Accounts Executive" },
    { "id": "u-murli",  "name": "Murli Agrawal", "role": "Administrator" },
    { "id": "system",   "name": "System",        "role": "System" }
  ],

  "reasonCodes": [
    { "id": "supplier_shortage",  "label": "Supplier shortage",     "description": "Supplier sent fewer units than the invoice showed",   "streams": ["PRODUCT"], "recoverFrom": "supplier",    "effect": "Recover from supplier / reduce payable" },
    { "id": "transit_loss",       "label": "Transit loss / damage", "description": "Lost or damaged in transit before receipt",           "streams": ["PRODUCT"], "recoverFrom": "transporter", "effect": "Recover from transporter" },
    { "id": "damaged_goods",      "label": "Damaged goods",         "description": "Damaged on arrival at the warehouse",                 "streams": ["PRODUCT"], "recoverFrom": "supplier",    "effect": "Supplier replacement or write-off" },
    { "id": "quality_rejection",  "label": "Quality rejection",     "description": "Failed quality check (expiry, wrong batch, poor)",     "streams": ["PRODUCT"], "recoverFrom": "supplier",    "effect": "Return to supplier / await replacement" },
    { "id": "wrong_product",      "label": "Wrong product",         "description": "Different item or batch than ordered",                "streams": ["PRODUCT"], "recoverFrom": "supplier",    "effect": "Return / revised invoice" },
    { "id": "excess_received",    "label": "Excess received",       "description": "More units received than ordered",                    "streams": ["PRODUCT"], "recoverFrom": "none",        "effect": "Accept & revise invoice, or return excess" },
    { "id": "stock_recount",      "label": "Stock adjustment",      "description": "Recount required before deciding",                    "streams": ["PRODUCT"], "recoverFrom": "none",        "effect": "Hold for recount" },
    { "id": "accept_shortage",    "label": "Accept shortage",       "description": "Accept the short quantity, no recovery",               "streams": ["PRODUCT"], "recoverFrom": "none",        "effect": "Write off as inventory loss" },
    { "id": "partial_payment",    "label": "Partial payment",       "description": "Part of the invoice is still unpaid",                 "streams": ["PAYMENT"], "recoverFrom": "none",        "effect": "Keep payable open for balance" },
    { "id": "credit_note",        "label": "Credit note",           "description": "Supplier issued a credit (damage/rate/expiry)",       "streams": ["PAYMENT"], "recoverFrom": "supplier",    "effect": "Reduce payable by credit amount" },
    { "id": "debit_note",         "label": "Debit note",            "description": "Additional amount charged by supplier",               "streams": ["PAYMENT"], "recoverFrom": "none",        "effect": "Increase payable by debit amount" },
    { "id": "rate_difference",    "label": "Rate difference",       "description": "Invoice rate differs from the PO rate",               "streams": ["PAYMENT"], "recoverFrom": "supplier",    "effect": "Recalculate payable after approval" },
    { "id": "outstanding_return", "label": "Outstanding return",    "description": "Returnable assets still to come back",                "streams": ["ASSET"],   "recoverFrom": "supplier",    "effect": "Carry forward until recovered" },
    { "id": "asset_write_off",    "label": "Write-off (asset)",     "description": "Returnable assets deemed unrecoverable",              "streams": ["ASSET"],   "recoverFrom": "none",        "effect": "Write off asset balance" },
    { "id": "write_off",          "label": "Write-off",             "description": "Write off the difference as a loss",                  "streams": ["PRODUCT","PAYMENT","ASSET"], "recoverFrom": "none", "effect": "Close as loss" },
    { "id": "keep_open",          "label": "Keep open",             "description": "Keep outstanding and carry forward",                  "streams": ["PRODUCT","PAYMENT","ASSET"], "recoverFrom": "none", "effect": "Remain OPEN, carry forward" },
    { "id": "other",              "label": "Other",                 "description": "None of the above — add a note",                      "streams": ["PRODUCT","PAYMENT","ASSET"], "recoverFrom": "none", "effect": "Manual note required" }
  ],

  "statuses": ["DRAFT","OPEN","UNDER_VERIFICATION","UNDER_INVESTIGATION","AWAITING_APPROVAL","PARTIALLY_RECOVERED","RECOVERED","WRITTEN_OFF","RECONCILED","CANCELLED"],

  "settlements": [
    {
      "id": "PS-2026-0710-001",
      "stream": "PRODUCT",
      "poNumber": "PO-11842",
      "grnNumber": "GRN-8871",
      "supplierId": "sup-balaji",
      "warehouseId": "wh-bls",
      "receiptDate": "2026-07-12",
      "status": "OPEN",
      "priority": "high",
      "ageDays": 1,
      "lastUpdatedLabel": "1 day old",
      "mismatchCount": 3,
      "summary": { "totalExpected": 700, "totalActual": 690, "differenceUnits": -10, "estValueAtRisk": 4200 },
      "items": [
        {
          "id": "PS-0710-001-i1",
          "product": "Maida 50kg Bag",
          "uom": "bags",
          "expected": { "qty": 500, "note": "As per PO / supplier invoice" },
          "actual":   { "qty": 495, "note": "As per goods receipt (GRN)", "breakdown": "495 received, 0 rejected" },
          "difference": { "qty": -5, "unit": "bags", "direction": "short" },
          "whyText": "500 bags were invoiced, but only 495 were received at the gate — 5 bags short.",
          "suggestedResolutionId": "supplier_shortage",
          "evidence": {
            "photos": [ { "id": "ph1", "caption": "Gate count photo" }, { "id": "ph2", "caption": "Stacked pallet" } ],
            "documents": [ { "id": "d1", "name": "PO-11842_Invoice.pdf", "sizeKb": 480 }, { "id": "d2", "name": "Weighing_slip_GRN-8871.pdf", "sizeKb": 120 } ],
            "other": []
          },
          "activityLog": [
            { "ts": "2026-07-12 06:40", "type": "start",     "title": "PO Raised",              "detail": "500 bags Maida 50kg ordered from Shree Balaji Flour Mills", "actorId": "u-suresh", "ref": "PO-11842" },
            { "ts": "2026-07-12 07:10", "type": "dispatch",  "title": "Goods Dispatched",       "detail": "Supplier dispatched 500 bags in vehicle CG04 AB 7781", "actorId": "system", "ref": "DSP-5521" },
            { "ts": "2026-07-12 09:05", "type": "receipt",   "title": "Goods Received at Gate", "detail": "495 bags counted and weighed at Bilaspur Central Warehouse", "actorId": "u-ramesh", "ref": "GRN-8871" },
            { "ts": "2026-07-12 09:20", "type": "detect",    "title": "Difference Detected",    "detail": "Expected 500, actual 495 — 5 bags short", "actorId": "system", "ref": "SET-OPEN" }
          ],
          "comments": [
            { "authorId": "u-ramesh", "ts": "2026-07-12 09:22", "text": "5 boro kam aaya. Weighing slip attach kiya hai." }
          ],
          "resolution": null
        },
        {
          "id": "PS-0710-001-i2",
          "product": "Refined Sugar 25kg",
          "uom": "bags",
          "expected": { "qty": 100, "note": "As per PO / supplier invoice" },
          "actual":   { "qty": 103, "note": "As per goods receipt (GRN)", "breakdown": "103 received" },
          "difference": { "qty": 3, "unit": "bags", "direction": "excess" },
          "whyText": "100 bags were ordered, but 103 were received — 3 bags excess.",
          "suggestedResolutionId": "excess_received",
          "evidence": { "photos": [ { "id": "ph3", "caption": "Extra bags" } ], "documents": [], "other": [] },
          "activityLog": [
            { "ts": "2026-07-12 09:05", "type": "receipt", "title": "Goods Received at Gate", "detail": "103 bags received against 100 ordered", "actorId": "u-ramesh", "ref": "GRN-8871" },
            { "ts": "2026-07-12 09:21", "type": "detect",  "title": "Difference Detected",    "detail": "Expected 100, actual 103 — 3 bags excess", "actorId": "system", "ref": "SET-OPEN" }
          ],
          "comments": [],
          "resolution": null
        },
        {
          "id": "PS-0710-001-i3",
          "product": "Yeast 500g",
          "uom": "packs",
          "expected": { "qty": 100, "note": "As per PO / supplier invoice" },
          "actual":   { "qty": 98, "note": "As per goods receipt (GRN)", "breakdown": "100 received, 2 rejected" },
          "difference": { "qty": -2, "unit": "packs", "direction": "short" },
          "whyText": "100 packs received but 2 failed quality (near expiry) and were rejected — 2 packs short into stock.",
          "suggestedResolutionId": "quality_rejection",
          "evidence": { "photos": [ { "id": "ph4", "caption": "Expiry date on pack" } ], "documents": [ { "id": "d3", "name": "QC_Report_GRN-8871.pdf", "sizeKb": 96 } ], "other": [] },
          "activityLog": [
            { "ts": "2026-07-12 09:30", "type": "quality", "title": "Quality Check",        "detail": "2 of 100 packs near expiry — rejected", "actorId": "u-neha", "ref": "QC-4410" },
            { "ts": "2026-07-12 09:31", "type": "detect",  "title": "Difference Detected", "detail": "2 packs rejected on quality", "actorId": "system", "ref": "SET-OPEN" }
          ],
          "comments": [ { "authorId": "u-neha", "ts": "2026-07-12 09:32", "text": "Batch B-2291 expiring in 6 days. Return to supplier." } ],
          "resolution": null
        }
      ]
    },
    {
      "id": "PS-2026-0709-002",
      "stream": "PRODUCT",
      "poNumber": "PO-11790",
      "grnNumber": "GRN-8840",
      "supplierId": "sup-anand",
      "warehouseId": "wh-bls",
      "receiptDate": "2026-07-09",
      "status": "UNDER_VERIFICATION",
      "priority": "high",
      "ageDays": 4,
      "lastUpdatedLabel": "4 days old",
      "mismatchCount": 1,
      "summary": { "totalExpected": 200, "totalActual": 188, "differenceUnits": -12, "estValueAtRisk": 3600 },
      "items": [
        {
          "id": "PS-0709-002-i1",
          "product": "Amul Butter 500g",
          "uom": "units",
          "expected": { "qty": 200, "note": "As per PO / supplier invoice" },
          "actual":   { "qty": 188, "note": "As per goods receipt (GRN)", "breakdown": "200 received, 12 damaged" },
          "difference": { "qty": -12, "unit": "units", "direction": "short" },
          "whyText": "200 units received but 12 arrived crushed/leaking — 12 units unusable.",
          "suggestedResolutionId": "damaged_goods",
          "evidence": { "photos": [ { "id": "ph5", "caption": "Crushed cartons" }, { "id": "ph6", "caption": "Leaking packs" } ], "documents": [ { "id": "d4", "name": "PO-11790_Invoice.pdf", "sizeKb": 512 } ], "other": [] },
          "activityLog": [
            { "ts": "2026-07-09 08:15", "type": "receipt",  "title": "Goods Received at Gate", "detail": "200 units received; 12 visibly damaged", "actorId": "u-ramesh", "ref": "GRN-8840" },
            { "ts": "2026-07-09 08:40", "type": "verify",   "title": "Verification Started",  "detail": "Damage extent being verified with QC", "actorId": "u-neha", "ref": "VRF-2201" }
          ],
          "comments": [ { "authorId": "u-suresh", "ts": "2026-07-10 11:03", "text": "Asked Anand Dairy for replacement or credit note. Awaiting reply." } ],
          "resolution": null
        }
      ]
    },
    {
      "id": "PS-2026-0708-003",
      "stream": "PRODUCT",
      "poNumber": "PO-11755",
      "grnNumber": "GRN-8815",
      "supplierId": "sup-rajesh",
      "warehouseId": "wh-rpr",
      "receiptDate": "2026-07-08",
      "status": "OPEN",
      "priority": "medium",
      "ageDays": 5,
      "lastUpdatedLabel": "5 days old",
      "mismatchCount": 4,
      "summary": { "totalExpected": 1300, "totalActual": 1276, "differenceUnits": -24, "estValueAtRisk": 2880 },
      "_note": "Multi-item receipt used to role-play BULK RESOLVE (several small mismatches, one reason applied to all).",
      "items": [
        { "id": "PS-0708-003-i1", "product": "Bread Packaging Roll", "uom": "rolls",  "expected": { "qty": 400, "note": "As per invoice" }, "actual": { "qty": 394, "note": "As per GRN", "breakdown": "394 received" }, "difference": { "qty": -6, "unit": "rolls",  "direction": "short" }, "whyText": "6 rolls short against 400 invoiced.", "suggestedResolutionId": "supplier_shortage", "evidence": { "photos": [], "documents": [ { "id": "d5", "name": "PO-11755_Invoice.pdf", "sizeKb": 300 } ], "other": [] }, "activityLog": [ { "ts": "2026-07-08 07:50", "type": "receipt", "title": "Goods Received at Gate", "detail": "394 of 400 rolls received", "actorId": "u-ramesh", "ref": "GRN-8815" } ], "comments": [], "resolution": null },
        { "id": "PS-0708-003-i2", "product": "Bread Label Sticker", "uom": "sheets", "expected": { "qty": 500, "note": "As per invoice" }, "actual": { "qty": 492, "note": "As per GRN", "breakdown": "492 received" }, "difference": { "qty": -8, "unit": "sheets", "direction": "short" }, "whyText": "8 sheets short against 500 invoiced.", "suggestedResolutionId": "supplier_shortage", "evidence": { "photos": [], "documents": [], "other": [] }, "activityLog": [ { "ts": "2026-07-08 07:52", "type": "receipt", "title": "Goods Received at Gate", "detail": "492 of 500 sheets received", "actorId": "u-ramesh", "ref": "GRN-8815" } ], "comments": [], "resolution": null },
        { "id": "PS-0708-003-i3", "product": "Butter Paper 30cm", "uom": "packs", "expected": { "qty": 200, "note": "As per invoice" }, "actual": { "qty": 196, "note": "As per GRN", "breakdown": "196 received" }, "difference": { "qty": -4, "unit": "packs", "direction": "short" }, "whyText": "4 packs short against 200 invoiced.", "suggestedResolutionId": "supplier_shortage", "evidence": { "photos": [], "documents": [], "other": [] }, "activityLog": [ { "ts": "2026-07-08 07:54", "type": "receipt", "title": "Goods Received at Gate", "detail": "196 of 200 packs received", "actorId": "u-ramesh", "ref": "GRN-8815" } ], "comments": [], "resolution": null },
        { "id": "PS-0708-003-i4", "product": "Carton Box Large", "uom": "boxes", "expected": { "qty": 200, "note": "As per invoice" }, "actual": { "qty": 194, "note": "As per GRN", "breakdown": "194 received" }, "difference": { "qty": -6, "unit": "boxes", "direction": "short" }, "whyText": "6 boxes short against 200 invoiced.", "suggestedResolutionId": "supplier_shortage", "evidence": { "photos": [], "documents": [], "other": [] }, "activityLog": [ { "ts": "2026-07-08 07:56", "type": "receipt", "title": "Goods Received at Gate", "detail": "194 of 200 boxes received", "actorId": "u-ramesh", "ref": "GRN-8815" } ], "comments": [], "resolution": null }
      ]
    },
    {
      "id": "PS-2026-0705-004",
      "stream": "PRODUCT",
      "poNumber": "PO-11680",
      "grnNumber": "GRN-8770",
      "supplierId": "sup-sunrise",
      "warehouseId": "wh-bls",
      "receiptDate": "2026-07-05",
      "status": "UNDER_INVESTIGATION",
      "priority": "medium",
      "ageDays": 8,
      "lastUpdatedLabel": "8 days old",
      "mismatchCount": 1,
      "summary": { "totalExpected": 150, "totalActual": 150, "differenceUnits": 0, "estValueAtRisk": 7500 },
      "items": [
        {
          "id": "PS-0705-004-i1",
          "product": "Milk Powder 1kg",
          "uom": "packs",
          "expected": { "qty": 150, "note": "As per PO: Full-cream milk powder" },
          "actual":   { "qty": 150, "note": "As per GRN: Toned milk powder received", "breakdown": "150 received, wrong variant" },
          "difference": { "qty": 0, "unit": "packs", "direction": "wrong_item" },
          "whyText": "Quantity matches, but the wrong variant arrived — toned milk powder instead of full-cream.",
          "suggestedResolutionId": "wrong_product",
          "evidence": { "photos": [ { "id": "ph7", "caption": "Label mismatch" } ], "documents": [], "other": [] },
          "activityLog": [
            { "ts": "2026-07-05 10:10", "type": "receipt",       "title": "Goods Received at Gate", "detail": "150 packs received", "actorId": "u-ramesh", "ref": "GRN-8770" },
            { "ts": "2026-07-06 09:00", "type": "investigation", "title": "Investigation Opened",   "detail": "Wrong variant — supplier discussion required", "actorId": "u-suresh", "ref": "INV-3301" }
          ],
          "comments": [
            { "authorId": "u-murli", "ts": "2026-07-07 18:00", "text": "this needs investigate, due to lack of evidences" },
            { "authorId": "u-suresh", "ts": "2026-07-08 10:15", "text": "Sunrise confirms mislabel at their end. Replacement dispatch promised by 15 Jul." }
          ],
          "resolution": null
        }
      ]
    },
    {
      "id": "PS-2026-0703-005",
      "stream": "PRODUCT",
      "poNumber": "PO-11602",
      "grnNumber": "GRN-8702",
      "supplierId": "sup-balaji",
      "warehouseId": "wh-bls",
      "receiptDate": "2026-07-03",
      "status": "OPEN",
      "priority": "low",
      "ageDays": 10,
      "lastUpdatedLabel": "10 days old",
      "mismatchCount": 1,
      "carryForward": true,
      "summary": { "totalExpected": 300, "totalActual": 120, "differenceUnits": -180, "estValueAtRisk": 9000, "note": "Partial delivery — outstanding carried forward" },
      "items": [
        {
          "id": "PS-0703-005-i1",
          "product": "Maida 50kg Bag",
          "uom": "bags",
          "expected": { "qty": 300, "note": "As per PO" },
          "actual":   { "qty": 120, "note": "Delivered so far across 2 drops", "breakdown": "Day 1: 70, Day 5: 50" },
          "difference": { "qty": -180, "unit": "bags", "direction": "outstanding" },
          "whyText": "Partial delivery — 180 of 300 bags still to arrive. Settlement stays OPEN until fulfilled or closed.",
          "suggestedResolutionId": "keep_open",
          "carryForward": true,
          "evidence": { "photos": [], "documents": [ { "id": "d6", "name": "PO-11602_Invoice.pdf", "sizeKb": 410 } ], "other": [] },
          "activityLog": [
            { "ts": "2026-07-03 08:00", "type": "receipt", "title": "Partial Receipt (Drop 1)", "detail": "70 bags received", "actorId": "u-ramesh", "ref": "GRN-8702" },
            { "ts": "2026-07-07 08:20", "type": "receipt", "title": "Partial Receipt (Drop 2)", "detail": "50 bags received; outstanding 180", "actorId": "u-ramesh", "ref": "GRN-8702" }
          ],
          "comments": [],
          "resolution": null
        }
      ]
    },
    {
      "id": "PS-2026-0702-006",
      "stream": "PAYMENT",
      "poNumber": "PO-11540",
      "invoiceNumber": "INV-SB-9901",
      "supplierId": "sup-balaji",
      "warehouseId": "wh-bls",
      "receiptDate": "2026-07-02",
      "status": "PARTIALLY_RECOVERED",
      "priority": "high",
      "ageDays": 11,
      "lastUpdatedLabel": "11 days old",
      "mismatchCount": 1,
      "carryForward": true,
      "summary": { "invoiceValue": 120000, "paidValue": 50000, "outstandingValue": 70000 },
      "items": [
        {
          "id": "PS-0702-006-i1",
          "product": "Supplier invoice INV-SB-9901",
          "uom": "INR",
          "expected": { "qty": 120000, "note": "Invoice value" },
          "actual":   { "qty": 50000, "note": "Paid to date", "breakdown": "Payment 1: ₹50,000 on 2026-07-04" },
          "difference": { "qty": -70000, "unit": "INR", "direction": "outstanding" },
          "whyText": "₹1,20,000 invoiced, ₹50,000 paid — ₹70,000 still outstanding to the supplier.",
          "suggestedResolutionId": "partial_payment",
          "carryForward": true,
          "evidence": { "photos": [], "documents": [ { "id": "d7", "name": "INV-SB-9901.pdf", "sizeKb": 260 }, { "id": "d8", "name": "Payment_receipt_1.pdf", "sizeKb": 88 } ], "other": [] },
          "activityLog": [
            { "ts": "2026-07-02 12:00", "type": "detect",  "title": "Invoice Booked",  "detail": "Payable of ₹1,20,000 raised", "actorId": "system", "ref": "INV-SB-9901" },
            { "ts": "2026-07-04 15:30", "type": "payment", "title": "Partial Payment", "detail": "₹50,000 paid; ₹70,000 outstanding", "actorId": "u-priya", "ref": "PAY-7781" }
          ],
          "comments": [ { "authorId": "u-priya", "ts": "2026-07-04 15:32", "text": "Balance scheduled after next dispatch confirmation." } ],
          "resolution": null
        }
      ]
    },
    {
      "id": "PS-2026-0701-007",
      "stream": "PAYMENT",
      "poNumber": "PO-11498",
      "invoiceNumber": "INV-GT-4471",
      "supplierId": "sup-gupta",
      "warehouseId": "wh-rpr",
      "receiptDate": "2026-07-01",
      "status": "AWAITING_APPROVAL",
      "priority": "medium",
      "ageDays": 12,
      "lastUpdatedLabel": "12 days old",
      "mismatchCount": 1,
      "summary": { "poRate": 100, "invoiceRate": 102, "qty": 500, "differenceValue": 1000 },
      "items": [
        {
          "id": "PS-0701-007-i1",
          "product": "Rate difference — Cooking Oil 15L",
          "uom": "INR",
          "expected": { "qty": 50000, "note": "PO value: 500 × ₹100" },
          "actual":   { "qty": 51000, "note": "Invoice value: 500 × ₹102" },
          "difference": { "qty": 1000, "unit": "INR", "direction": "over" },
          "whyText": "Invoice rate ₹102 vs PO rate ₹100 on 500 units — ₹1,000 extra. Needs approval before payable is updated.",
          "suggestedResolutionId": "rate_difference",
          "evidence": { "photos": [], "documents": [ { "id": "d9", "name": "INV-GT-4471.pdf", "sizeKb": 240 } ], "other": [] },
          "activityLog": [
            { "ts": "2026-07-01 14:00", "type": "detect",   "title": "Rate Mismatch Detected", "detail": "Invoice rate exceeds PO rate by ₹2/unit", "actorId": "system", "ref": "INV-GT-4471" },
            { "ts": "2026-07-02 10:00", "type": "approval", "title": "Sent for Approval",       "detail": "Awaiting admin decision on ₹1,000 rate difference", "actorId": "u-priya", "ref": "APR-1120" }
          ],
          "comments": [],
          "resolution": null
        }
      ]
    },
    {
      "id": "PS-2026-0628-008",
      "stream": "ASSET",
      "poNumber": "PO-11390",
      "grnNumber": "GRN-8610",
      "supplierId": "sup-anand",
      "warehouseId": "wh-bls",
      "receiptDate": "2026-06-28",
      "status": "OPEN",
      "priority": "low",
      "ageDays": 15,
      "lastUpdatedLabel": "15 days old",
      "mismatchCount": 2,
      "carryForward": true,
      "summary": { "sent": 250, "returned": 158, "outstanding": 92 },
      "items": [
        {
          "id": "PS-0628-008-i1",
          "product": "Milk Crate (returnable)",
          "uom": "crates",
          "expected": { "qty": 200, "note": "Crates received with stock; to be returned" },
          "actual":   { "qty": 150, "note": "Returned to supplier so far" },
          "difference": { "qty": -50, "unit": "crates", "direction": "outstanding" },
          "whyText": "200 milk crates came in with stock; 150 returned, 50 still outstanding with us.",
          "suggestedResolutionId": "outstanding_return",
          "carryForward": true,
          "evidence": { "photos": [ { "id": "ph8", "caption": "Crate stack" } ], "documents": [], "other": [] },
          "activityLog": [
            { "ts": "2026-06-28 09:00", "type": "receipt", "title": "Assets Received", "detail": "200 milk crates in with stock", "actorId": "u-ramesh", "ref": "GRN-8610" },
            { "ts": "2026-07-06 16:00", "type": "return",  "title": "Assets Returned",  "detail": "150 crates returned; 50 outstanding", "actorId": "u-ramesh", "ref": "RET-2290" }
          ],
          "comments": [],
          "resolution": null
        },
        {
          "id": "PS-0628-008-i2",
          "product": "Bread Tray (returnable)",
          "uom": "trays",
          "expected": { "qty": 50, "note": "Trays received with stock; to be returned" },
          "actual":   { "qty": 8, "note": "Returned to supplier so far" },
          "difference": { "qty": -42, "unit": "trays", "direction": "outstanding" },
          "whyText": "50 bread trays came in; only 8 returned, 42 still outstanding.",
          "suggestedResolutionId": "outstanding_return",
          "carryForward": true,
          "evidence": { "photos": [], "documents": [], "other": [] },
          "activityLog": [
            { "ts": "2026-06-28 09:05", "type": "receipt", "title": "Assets Received", "detail": "50 bread trays in with stock", "actorId": "u-ramesh", "ref": "GRN-8610" }
          ],
          "comments": [ { "authorId": "u-murli", "ts": "2026-07-10 19:00", "text": "42 trays pending 15+ days. Chase supplier or write off." } ],
          "resolution": null
        }
      ]
    },
    {
      "id": "PS-2026-0625-009",
      "stream": "PRODUCT",
      "poNumber": "PO-11288",
      "grnNumber": "GRN-8540",
      "supplierId": "sup-sunrise",
      "warehouseId": "wh-rpr",
      "receiptDate": "2026-06-25",
      "status": "RECONCILED",
      "priority": "low",
      "ageDays": 18,
      "lastUpdatedLabel": "Closed 6 days ago",
      "mismatchCount": 1,
      "summary": { "totalExpected": 320, "totalActual": 307, "differenceUnits": -13, "estValueAtRisk": 0 },
      "_note": "A CLOSED settlement — shows the resolved/ledger state (reference ID, impact, resolver).",
      "items": [
        {
          "id": "PS-0625-009-i1",
          "product": "Cream Biscuit 200g",
          "uom": "units",
          "expected": { "qty": 320, "note": "As per invoice" },
          "actual":   { "qty": 307, "note": "As per GRN", "breakdown": "307 received, 13 short" },
          "difference": { "qty": -13, "unit": "units", "direction": "short" },
          "whyText": "13 units short against 320 invoiced. Accepted as a minor shortage and written off.",
          "suggestedResolutionId": "accept_shortage",
          "evidence": { "photos": [], "documents": [ { "id": "d10", "name": "PO-11288_Invoice.pdf", "sizeKb": 380 } ], "other": [] },
          "activityLog": [
            { "ts": "2026-06-25 08:30", "type": "receipt",  "title": "Goods Received at Gate", "detail": "307 of 320 units received", "actorId": "u-ramesh", "ref": "GRN-8540" },
            { "ts": "2026-06-25 09:00", "type": "detect",   "title": "Difference Detected",    "detail": "13 units short", "actorId": "system", "ref": "SET-OPEN" },
            { "ts": "2026-07-07 11:15", "type": "resolve",  "title": "Settlement Resolved",    "detail": "Accepted shortage — written off as inventory loss", "actorId": "u-murli", "ref": "SET-RES-2026-07-07-1105" }
          ],
          "comments": [],
          "resolution": {
            "reasonId": "accept_shortage",
            "resolvedById": "u-murli",
            "resolvedOn": "2026-07-07 11:15",
            "referenceId": "SET-RES-2026-07-07-1105",
            "impact": [ "Write off 13 units as inventory loss", "Reduce warehouse stock by 13 units", "Close this mismatch item" ]
          }
        }
      ]
    }
  ]
};
