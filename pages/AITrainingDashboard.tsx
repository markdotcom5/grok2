import React, { useState } from 'react';
import { Book, Brain, Heart, Activity, User, Calendar, Award, Star } from 'lucide-react';

const AITrainingDashboard = () => {
  const [activeSection, setActiveSection] = useState('physical');
  const [showAIInsights, setShowAIInsights] = useState(false);

  const trainingMetrics = {
    physical: {
      completion: 68,
      nextMilestone: "Zero-G Readiness",
      aiInsight: "Your cardiovascular endurance has improved 15% this month. Recommended: Increase high-altitude training.",
      recentActivities: [
        "Completed: High-G force simulation",
        "Scheduled: Spacewalk basics",
        "AI Recommendation: Focus on balance training"
      ]
    },
    mental: {
      completion: 75,
      nextMilestone: "Crisis Management",
      aiInsight: "Your decision-making speed in simulations has increased by 23%. Focus area: Multi-tasking scenarios.",
      recentActivities: [
        "Mastered: Emergency protocols",
        "In Progress: Navigation systems",
        "AI Recommendation: Try advanced problem-solving modules"
      ]
    },
    spiritual: {
      completion: 82,
      nextMilestone: "Team Cohesion",
      aiInsight: "Your mindfulness scores show consistent improvement. Consider joining group meditation sessions.",
      recentActivities: [
        "Completed: Space perspective workshop",
        "Ongoing: Daily reflection practice",
        "AI Recommendation: Group harmony exercises"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light">Training Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-900/30 hover:bg-blue-900/50 px-4 py-2 rounded-full text-sm">
                AI Assistant
              </button>
              <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Training Type Selector */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {Object.entries({
            physical: { icon: Activity, label: "Physical Training" },
            mental: { icon: Brain, label: "Mental Training" },
            spiritual: { icon: Heart, label: "Spiritual Training" }
          }).map(([key, { icon: Icon, label }]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`p-6 rounded-lg border ${
                activeSection === key 
                  ? 'border-blue-500 bg-blue-900/20' 
                  : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              <Icon className="w-6 h-6 mb-2" />
              <div className="text-sm">{label}</div>
            </button>
          ))}
        </div>

        {/* Active Section Content */}
        <div className="grid grid-cols-3 gap-8">
          {/* Progress Card */}
          <div className="col-span-2 bg-gray-900/50 rounded-lg p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-light mb-2">Current Progress</h2>
                <p className="text-sm text-gray-400">
                  Next Milestone: {trainingMetrics[activeSection].nextMilestone}
                </p>
              </div>
              <div className="text-3xl font-light">
                {trainingMetrics[activeSection].completion}%
              </div>
            </div>

            {/* Progress Visualization */}
            <div className="h-2 bg-gray-800 rounded-full mb-6">
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${trainingMetrics[activeSection].completion}%` }}
              />
            </div>

            {/* Recent Activities */}
            <div className="space-y-3">
              {trainingMetrics[activeSection].recentActivities.map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-center text-sm"
                >
                  <Star className="w-4 h-4 mr-2 text-blue-500" />
                  {activity}
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights Card */}
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h2 className="text-xl font-light mb-4">AI Insights</h2>
            <p className="text-sm text-gray-300 mb-4">
              {trainingMetrics[activeSection].aiInsight}
            </p>
            <button 
              onClick={() => setShowAIInsights(!showAIInsights)}
              className="text-blue-400 text-sm hover:text-blue-300"
            >
              View detailed analysis →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrainingDashboard;
