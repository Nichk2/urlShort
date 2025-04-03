import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  const handleBuyPlan = (plan) => {
    alert(`You selected the ${plan} plan!`);
  };

  const pricingPlans = [
    {
      title: 'Free',
      description: 'Perfect plan to get started',
      monthlyPrice: 0,
      annualPrice: 0,
      buttonText: 'Get Your Free Plan',
      buttonClass: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
      features: [
        'Sync across devices',
        'Sharing permissions',
        'Admin tools',
        'Workspaces',
      ],
    },
    {
      title: 'Pro',
      description: 'Perfect plan for professionals!',
      monthlyPrice: 12,
      annualPrice: 120,
      buttonText: 'Get Your Pro Plan',
      buttonClass: 'bg-primary text-white hover:opacity-70 transition-opacity ease-in',
      badge: 'Most Popular', // Added badge for Pro plan
      features: [
        'Sync across devices',
        'Priority support',
        'Sharing permissions',
        'Admin tools',
        'Workspaces',
        'Collaboration users',
      ],
    },
    {
      title: 'Ultimate',
      description: 'Best suits for great company!',
      monthlyPrice: 33,
      annualPrice: 330,
      buttonText: 'Get Your Ultimate Plan',
      buttonClass: 'bg-gray-700 text-white hover:bg-gray-800',
      features: [
        'Sync across devices',
        'Priority support',
        'Daily performance reports',
        'Dedicated assistant',
        'Artificial intelligence',
        'Marketing tools & automations',
        'Advanced security',
        'Sharing permissions',
        'Admin tools',
        'Workspaces',
        'Collaboration users',
        'Integrations',
      ],
    },
  ];

  // Features to compare in the table
  const featuresToCompare = [
    'Sync across devices',
    'Sharing permissions',
    'Admin tools',
    'Workspaces',
    'Priority support',
    'Collaboration users',
    'Daily performance reports',
    'Dedicated assistant',
    'Artificial intelligence',
    'Marketing tools & automations',
    'Advanced security',
    'Integrations',
  ];

  // Check if a feature is available for a plan
  const hasFeature = (planIndex, feature) => {
    return pricingPlans[planIndex].features.includes(feature);
  };

  // Sort features: checked features first, then non-checked
  const sortFeatures = (planIndex) => {
    return featuresToCompare.sort((a, b) => {
      const hasA = hasFeature(planIndex, a);
      const hasB = hasFeature(planIndex, b);
      return hasB - hasA; // Checked features come first
    });
  };

  return (
    <section id="pricing" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">

        <div className='text-center mb-20'>
          <h1 className="text-6xl font-bold text-h1 mb-7">Pricing</h1>
          <p className="text-li mt-2">
            Choose the plan that works best for you. All plans include a 14-day free trial (except Free).
          </p>
        </div>
        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-full border border-gray-200 relative">
            <motion.div
              className="absolute top-0 left-0 bg-primary h-full rounded-full"
              initial={false}
              animate={{ x: isAnnual ? '100%' : '0%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ width: '50%' }}
            />
            <button
              onClick={toggleBilling}
              className={`px-6 py-2 rounded-full relative z-10 ${
                !isAnnual ? 'text-white' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={toggleBilling}
              className={`px-6 py-2 rounded-full relative z-10 ${
                isAnnual ? 'text-white' : 'text-gray-600'
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {pricingPlans.map((plan, index) => {
            const sortedFeatures = sortFeatures(index); // Sort features for this plan
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-lg ${index === 1 ? 'border border-[#67FCFC]' : 'border border-gray-200'}`}
              >
                <div className="bg-white rounded-lg p-6 h-full flex flex-col">
                  {/* Badge for Pro plan */}
                  {plan.badge && (
                    <div className="text-center mb-4">
                      <span className="bg-[#a4ffff] text-[#0CA3A3] text-xs font-semibold px-3 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-center mb-4 text-h1">{plan.title}</h3>
                  
                  {plan.description && (
                    <p className="text-gray-600 text-center text-sm mb-6">
                      {plan.description}
                    </p>
                  )}

                  {plan.monthlyPrice > 0 ? (
                    <div className="text-center mb-6">
                      <p className="text-3xl font-bold">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        <span className="text-gray-500 text-sm">/{isAnnual ? 'year' : 'month'}</span>
                      </p>
                    </div>
                  ) : (
                    <div className="mb-6"></div>
                  )}

                  {/* Features List with Check and X Icons */}
                  <div className="flex-grow">
                    <ul className="space-y-3">
                      {sortedFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          {hasFeature(index, feature) ? (
                            <svg
                              className="w-5 h-5 text-primary mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5 text-gray-400 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <div className="mt-6">
                    <button
                      onClick={() => handleBuyPlan(plan.title)}
                      className={`w-full ${plan.buttonClass} py-3 rounded-lg transition-colors text-center font-semibold`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Features Comparison Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-4">
            {/* Feature column header */}
            <div className="p-4 bg-white font-semibold text-gray-700 border-b border-gray-200">
              Features
            </div>
            
            {/* Plan column headers */}
            {pricingPlans.map((plan, index) => (
              <div key={index} className="p-4 font-semibold text-center bg-white border-b border-gray-200">
                {plan.title}
              </div>
            ))}
            
            {/* Feature rows */}
            {featuresToCompare.map((feature, featureIndex) => (
              <React.Fragment key={featureIndex}>
                {/* Feature name */}
                <div className="p-4 border-t border-gray-100 text-gray-700">
                  {feature}
                </div>
                
                {/* Free plan checkmark */}
                <div className="p-4 border-t border-gray-100 text-center">
                  {hasFeature(0, feature) ? (
                    <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  )}
                </div>
                
                {/* Pro plan checkmark */}
                <div className="p-4 border-t border-gray-100 text-center">
                  {hasFeature(1, feature) ? (
                    <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  )}
                </div>
                
                {/* Ultimate plan checkmark */}
                <div className="p-4 border-t border-gray-100 text-center">
                  {hasFeature(2, feature) ? (
                    <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}