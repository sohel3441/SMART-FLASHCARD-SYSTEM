export const inferSubject = (text) => {
  const keywords = {
    Physics: ['force', 'acceleration', 'velocity', 'newton', 'energy'],
    Biology: ['photosynthesis', 'cell', 'organism', 'plant', 'animal'],
    Chemistry: ['reaction', 'compound', 'element', 'acid', 'base'],
    Math: ['equation', 'algebra', 'geometry', 'calculus', 'number']
  };

  const lowerText = text.toLowerCase();
  for (const [subject, words] of Object.entries(keywords)) {
    if (words.some(word => lowerText.includes(word))) {
      return subject;
    }
  }

  return 'General';
};
