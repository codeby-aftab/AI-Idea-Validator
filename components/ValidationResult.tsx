
import React from 'react';
import type { ValidationData } from '../types';
import LightbulbIcon from './icons/LightbulbIcon';
import ChartIcon from './icons/ChartIcon';
import TargetIcon from './icons/TargetIcon';
import TrophyIcon from './icons/TrophyIcon';
import WarningIcon from './icons/WarningIcon';
import ChecklistIcon from './icons/ChecklistIcon';
import SparkleIcon from './icons/SparkleIcon';

interface ValidationResultProps {
  data: ValidationData;
}

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => (
  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10">
    <h3 className="text-xl font-bold text-slate-200 flex items-center mb-4">
      <span className="mr-3 h-7 w-7 flex items-center justify-center bg-slate-700/50 rounded-lg">{icon}</span>
      {title}
    </h3>
    <div className="text-slate-400 space-y-2 prose prose-invert prose-p:text-slate-400 prose-li:text-slate-400">
        {children}
    </div>
  </div>
);

const ValidationResult: React.FC<ValidationResultProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      <Section title="Idea Summary" icon={<LightbulbIcon />}>
        <p>{data.ideaSummary}</p>
      </Section>

      <Section title="Market Potential" icon={<ChartIcon />}>
        <p>{data.marketPotential}</p>
      </Section>

      <Section title="Target Audience" icon={<TargetIcon />}>
        <ul className="list-disc list-inside">
          {data.targetAudience.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </Section>
      
      <Section title="Competitor Snapshot" icon={<TrophyIcon />}>
        <ul className="list-disc list-inside">
          {data.competitorSnapshot.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </Section>

      <Section title="Risks & Challenges" icon={<WarningIcon />}>
        <ul className="list-disc list-inside">
          {data.risksAndChallenges.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </Section>
      
      <Section title="Validation Checklist" icon={<ChecklistIcon />}>
        <ol className="list-decimal list-inside">
            {data.validationChecklist.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </Section>

      <Section title="Creative Twist" icon={<SparkleIcon />}>
        <p>{data.creativeTwist}</p>
      </Section>
    </div>
  );
};

export default ValidationResult;
