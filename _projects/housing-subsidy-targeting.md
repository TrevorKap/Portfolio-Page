---
layout: page
title: Targeting a Home Repair Tax Credit
description: Logistic regression model to prioritize outreach for a Philadelphia home repair subsidy program
img: assets/img/portfolio/housesubsidy1.png
importance: 1
category: ai-ml-use-cases
---

**Problem.** Philadelphia's home repair tax credit program had a limited outreach budget and a low historical take-up rate — most marketing dollars were being spent on homeowners who were unlikely to enroll.

**Approach.** I built a logistic regression model to predict which homeowners were most likely to accept the credit, using internal program data alongside external features from Philadelphia Open Data and the American Community Survey. The goal was to let credit distributors prioritize outreach toward the households most likely to convert, and most likely to see a resulting bump in home and neighborhood value.

**Result.** Validated with 100-fold cross-validation, the model held a consistent ROC score around 0.76, indicating reasonably strong and generalizable discrimination between likely acceptors and non-acceptors. Specificity was strong throughout (the dataset skewed toward negative cases), while sensitivity varied more across folds (0.25–0.75) — a limitation traced to the small number of positive cases in the training data.

[View full report](/assets/reports/TargetingaHousingSubsidyKapuvari.html)
