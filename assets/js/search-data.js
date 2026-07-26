// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/Portfolio-Page/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A collection of data science and geospatial analysis work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Portfolio-Page/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "A selection of notable repositories and group projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Portfolio-Page/repositories/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "Download the PDF for the full resume, or browse the sections below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Portfolio-Page/cv/";
          },
        },{id: "projects-predicting-bike-demand-in-washington-d-c",
          title: 'Predicting Bike Demand in Washington, D.C.',
          description: "A time-series model forecasting Capital Bikeshare demand in 15-minute intervals",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/bike-demand-dc/";
            },},{id: "projects-dispersion-location-analysis",
          title: 'Dispersion Location Analysis',
          description: "Applying the p-dispersion problem to a policy question on homeowner eligibility for former convicts",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/dispersion-location-analysis/";
            },},{id: "projects-dispersion-theory",
          title: 'Dispersion Theory',
          description: "Applying the p-dispersion problem to maximize distance between similar facilities in a network",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/dispersion-theory/";
            },},{id: "projects-reading-emotion-amp-sentiment-using-ai",
          title: 'Reading Emotion &amp;amp; Sentiment Using AI',
          description: "NLP-based sentiment analysis of public perceptions of Philadelphia parks and recreational facilities",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/emotion-sentiment-ai-parks/";
            },},{id: "projects-targeting-a-home-repair-tax-credit",
          title: 'Targeting a Home Repair Tax Credit',
          description: "Logistic regression model to prioritize outreach for a Philadelphia home repair subsidy program",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/housing-subsidy-targeting/";
            },},{id: "projects-categorizing-a-city-using-cluster-analysis",
          title: 'Categorizing a City Using Cluster Analysis',
          description: "K-means cluster analysis identifying spatial autocorrelation among block-group socioeconomic indicators",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/kmeans-city-clustering/";
            },},{id: "projects-litter-risk-dashboard",
          title: 'Litter Risk Dashboard',
          description: "A machine learning dashboard predicting and visualizing litter risk hotspots",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/litter-risk-dashboard/";
            },},{id: "projects-location-allocation-for-pharmacy-siting",
          title: 'Location-Allocation for Pharmacy Siting',
          description: "Optimizing pharmacy placement to minimize collective travel distance to care",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/location-allocation-pharmacy/";
            },},{id: "projects-predicting-alcohol-related-car-accidents",
          title: 'Predicting Alcohol-Related Car Accidents',
          description: "Logistic regression model identifying predictors of drunk-driving accidents in Philadelphia",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/logistic-regression-dui-accidents/";
            },},{id: "projects-maximum-covering-location-problem",
          title: 'Maximum Covering Location Problem',
          description: "Solving the Maximum Location Coverage Problem in theory and practice using ArcGIS Pro, Power BI, and CPLEX",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/max-covering-location-problem/";
            },},{id: "projects-maximum-species-coverage-optimization",
          title: 'Maximum Species Coverage Optimization',
          description: "Applying coverage optimization to endangered species protection in Mecklenburg County, NC",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/max-species-coverage/";
            },},{id: "projects-high-resolution-neighborhood-amenity-profiles",
          title: 'High-Resolution Neighborhood Amenity Profiles',
          description: "Yelp API and web-scraping analysis clustering Philadelphia neighborhoods by amenity mix",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/neighborhood-amenity-profiles/";
            },},{id: "projects-ols-regression-on-house-prices",
          title: 'OLS Regression on House Prices',
          description: "Correlating neighborhood socioeconomic variables with median house value in Philadelphia",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/ols-house-prices/";
            },},{id: "projects-auditing-algorithmic-bias-in-a-predictive-policing-model",
          title: 'Auditing Algorithmic Bias in a Predictive Policing Model',
          description: "A geospatial risk model for arrest prediction in Chicago, examined for racial bias in its outputs",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/predictive-policing-bias-audit/";
            },},{id: "projects-python-demonstrations",
          title: 'Python Demonstrations',
          description: "A Quarto website collecting Python-based geospatial analysis, visualization, and remote sensing projects",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/python-demonstrations/";
            },},{id: "projects-recidivism-algorithm-nyc-policy-memo",
          title: 'Recidivism Algorithm: NYC Policy Memo',
          description: "A policy memo examining the use of a recidivism-risk algorithm in New York City&#39;s criminal justice system",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/recidivism-algorithm-memo/";
            },},{id: "projects-comparing-species-preservation-and-park-budgets",
          title: 'Comparing Species Preservation and Park Budgets',
          description: "A spatial optimization comparison of conservation funding priorities against parcel-level preservation needs",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/species-preservation-park-budgets/";
            },},{id: "projects-examining-housing-prices-with-a-three-model-approach",
          title: 'Examining Housing Prices with a Three-Model Approach',
          description: "Comparing Spatial Lag, Spatial Error, and Geographically Weighted Regression on the Philadelphia housing market",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/three-model-housing-approach/";
            },},{id: "projects-transit-oriented-development-impact-analysis",
          title: 'Transit-Oriented Development Impact Analysis',
          description: "Vector-based quantitative analysis of BART&#39;s effect on the San Francisco Bay Area, 2009-2017",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/tod-impact-analysis/";
            },},{id: "projects-traintracker-predicting-train-delays-for-nj-transit-amp-amtrak",
          title: 'TrainTracker: Predicting Train Delays for NJ Transit &amp;amp; Amtrak',
          description: "Linear and logistic regression model predicting delay length and probability across a regional rail network",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/traintracker-delays/";
            },},{id: "projects-redundancy-in-transit-stops-amp-coverage-vs-accessibility",
          title: 'Redundancy in Transit Stops &amp;amp; Coverage vs. Accessibility',
          description: "Sensitivity analysis of a bus coverage model using a sample Charlotte transit line",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/transit-redundancy-charlotte/";
            },},{id: "projects-calculating-home-prices-from-zillow-data",
          title: 'Calculating Home Prices from Zillow Data',
          description: "OLS linear regression model predicting real estate prices in the Philadelphia area",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio-Page/projects/zillow-home-price-ols/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/Portfolio-Page/%7B%22value%22=%3E%22/assets/pdf/Resume_Kapuvari.pdf%22,%20%22logo%22=%3E%22fa-solid%20fa-file-lines%22%7D", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%70%75%76%61%72%69%74@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/TrevorKap", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/trevor-kapuvari", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
