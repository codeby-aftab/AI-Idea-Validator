
import type { ValidationData } from '../types';

export const parseValidationText = (text: string): ValidationData => {
  const result: ValidationData = {
    ideaSummary: '',
    marketPotential: '',
    targetAudience: [],
    competitorSnapshot: [],
    risksAndChallenges: [],
    validationChecklist: [],
    creativeTwist: '',
  };

  const lines = text.split('\n').filter(line => line.trim() !== '');
  let currentSection: keyof ValidationData | null = null;

  for (const line of lines) {
    if (line.startsWith('💡 Idea Summary:')) {
      currentSection = 'ideaSummary';
      result.ideaSummary = line.replace('💡 Idea Summary:', '').trim();
    } else if (line.startsWith('📈 Market Potential')) {
      currentSection = 'marketPotential';
      result.marketPotential = line.replace(/📈 Market Potential \(\d+\/\d+\):/, '').trim();
    } else if (line.startsWith('🎯 Target Audience:')) {
      currentSection = 'targetAudience';
    } else if (line.startsWith('🏆 Competitor Snapshot:')) {
      currentSection = 'competitorSnapshot';
    } else if (line.startsWith('⚠️ Risks & Challenges:')) {
      currentSection = 'risksAndChallenges';
    } else if (line.startsWith('✅ Validation Checklist:')) {
      currentSection = 'validationChecklist';
    } else if (line.startsWith('✨ Creative Twist:')) {
      currentSection = 'creativeTwist';
      result.creativeTwist = line.replace('✨ Creative Twist:', '').trim();
    } else if (currentSection) {
        const trimmedLine = line.trim();
        switch (currentSection) {
            case 'ideaSummary':
                result.ideaSummary += ' ' + trimmedLine;
                break;
            case 'marketPotential':
                result.marketPotential += ' ' + trimmedLine;
                break;
            case 'creativeTwist':
                result.creativeTwist += ' ' + trimmedLine;
                break;
            case 'targetAudience':
            case 'competitorSnapshot':
            case 'risksAndChallenges':
            case 'validationChecklist':
                if (trimmedLine.startsWith('- ') || /^\d+\./.test(trimmedLine)) {
                    result[currentSection].push(trimmedLine.replace(/^(- |\d+\. )/, '').trim());
                }
                break;
        }
    }
  }

  return result;
};
