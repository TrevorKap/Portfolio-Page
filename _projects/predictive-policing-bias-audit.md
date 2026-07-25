---
layout: page
title: "Auditing Algorithmic Bias in a Predictive Policing Model"
description: A geospatial risk model for arrest prediction in Chicago, examined for racial bias in its outputs
img: assets/img/portfolio/RiskAssessment1.png
importance: 2
category: ai-ml-use-cases
---

**Problem.** Predictive policing tools are increasingly used to direct patrols and social services toward "high-risk" areas, but the training data they rely on — historical arrest records — already encodes patterns of biased enforcement. I built a geospatial risk model of arrest incidence in Chicago, Illinois, then deliberately audited it for that bias rather than treating a high accuracy score as the end of the analysis.

**Approach.** Using a geospatial risk prediction framework, I modeled arrest risk across Chicago to identify communities projected to experience elevated arrest activity — the kind of output that would typically be used to allocate patrols or social services. I then broke down the model's errors and predictions by neighborhood racial composition to check whether the risk surface itself reproduced discriminatory enforcement patterns.

**Result.** The audit surfaced a clear disparity: in neighborhoods with the highest non-white population share, predicted arrest risk for certain offense categories was more than twice as high as in comparable white neighborhoods with similar underlying conditions — a systemic bias inherited directly from the historical arrest data used to train the model. The finding reframes the project from a pure prediction exercise into a case for why predictive policing outputs need bias auditing before any operational use.

[View full report](/assets/reports/GeospatialRiskPredictionKapuvari.html)
