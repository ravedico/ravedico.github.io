const EnglishPractice = () => {
    const [currentSection, setCurrentSection] = React.useState('present-simple');
    const [showAnswer, setShowAnswer] = React.useState(false);
    const [userAnswer, setUserAnswer] = React.useState('');
  
    const grammarSections = {
      'present-simple': {
        title: 'Present Simple',
        questions: [
          {
            sentence: 'She ___ (work) in a hospital.',
            answer: 'works',
            hint: 'Use third person singular (-s)'
          },
          {
            sentence: 'They ___ (play) football every weekend.',
            answer: 'play',
            hint: 'Base form for plural subjects'
          },
          {
            sentence: 'I ___ (study) English every day.',
            answer: 'study',
            hint: 'Base form for "I"'
          },
          {
            sentence: 'The sun ___ (rise) in the east.',
            answer: 'rises',
            hint: 'Third person singular for natural facts'
          },
          {
            sentence: 'My parents ___ (live) in London.',
            answer: 'live',
            hint: 'Base form for plural subjects'
          }
        ]
      },
      'past-simple': {
        title: 'Past Simple',
        questions: [
          {
            sentence: 'We ___ (go) to the beach last summer.',
            answer: 'went',
            hint: 'Irregular past form of "go"'
          },
          {
            sentence: 'He ___ (watch) a movie yesterday.',
            answer: 'watched',
            hint: 'Regular verb: add -ed'
          },
          {
            sentence: 'They ___ (eat) dinner at 8 PM last night.',
            answer: 'ate',
            hint: 'Irregular past form of "eat"'
          },
          {
            sentence: 'I ___ (visit) my grandmother last weekend.',
            answer: 'visited',
            hint: 'Regular verb: add -ed'
          },
          {
            sentence: 'She ___ (buy) a new car last month.',
            answer: 'bought',
            hint: 'Irregular past form of "buy"'
          }
        ]
      },
      'present-progressive': {
        title: 'Present Progressive',
        questions: [
          {
            sentence: 'They ___ (swim) in the pool right now.',
            answer: 'are swimming',
            hint: 'Use "are" + verb-ing'
          },
          {
            sentence: 'She ___ (read) a book at the moment.',
            answer: 'is reading',
            hint: 'Use "is" + verb-ing'
          },
          {
            sentence: 'I ___ (cook) dinner right now.',
            answer: 'am cooking',
            hint: 'Use "am" + verb-ing'
          },
          {
            sentence: 'The baby ___ (sleep) peacefully.',
            answer: 'is sleeping',
            hint: 'Use "is" + verb-ing'
          }
        ]
      },
      'wh-questions': {
        title: 'WH Questions',
        questions: [
          {
            sentence: '___ does she live? (where)',
            answer: 'Where',
            hint: 'Ask about location'
          },
          {
            sentence: '___ are you studying English? (why)',
            answer: 'Why',
            hint: 'Ask about reason'
          },
          {
            sentence: '___ is coming to the party? (who)',
            answer: 'Who',
            hint: 'Ask about person'
          },
          {
            sentence: '___ did you finish your homework? (when)',
            answer: 'When',
            hint: 'Ask about time'
          }
        ]
      },
      'future-simple': {
        title: 'Future Simple',
        questions: [
          {
            sentence: 'I ___ (go) to Paris next summer.',
            answer: 'will go',
            hint: 'Use "will" + base form'
          },
          {
            sentence: 'They ___ (arrive) tomorrow morning.',
            answer: 'will arrive',
            hint: 'Use "will" + base form'
          },
          {
            sentence: 'It ___ (rain) tomorrow.',
            answer: 'will rain',
            hint: 'Use "will" + base form for predictions'
          }
        ]
      },
      'present-perfect': {
        title: 'Present Perfect',
        questions: [
          {
            sentence: 'I ___ (never/be) to Japan.',
            answer: 'have never been',
            hint: 'Use "have" + never + past participle'
          },
          {
            sentence: 'She ___ (just/finish) her homework.',
            answer: 'has just finished',
            hint: 'Use "has" + just + past participle'
          },
          {
            sentence: 'They ___ (already/eat) lunch.',
            answer: 'have already eaten',
            hint: 'Use "have" + already + past participle'
          }
        ]
      },
      'modal-verbs': {
        title: 'Modal Verbs',
        questions: [
          {
            sentence: 'You ___ (must/study) harder to pass the exam.',
            answer: 'must study',
            hint: 'Use "must" + base form'
          },
          {
            sentence: 'She ___ (can/speak) three languages.',
            answer: 'can speak',
            hint: 'Use "can" + base form'
          },
          {
            sentence: 'We ___ (should/leave) now to avoid traffic.',
            answer: 'should leave',
            hint: 'Use "should" + base form'
          }
        ]
      }
    };
  
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  
    const currentQuestions = grammarSections[currentSection].questions;
    const currentQuestion = currentQuestions[currentQuestionIndex];
  
    const handleAnswerSubmit = () => {
      setShowAnswer(true);
    };
  
    const handleNext = () => {
      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setCurrentQuestionIndex(0);
        const sections = Object.keys(grammarSections);
        const currentIndex = sections.indexOf(currentSection);
        if (currentIndex < sections.length - 1) {
          setCurrentSection(sections[currentIndex + 1]);
        }
      }
      setShowAnswer(false);
      setUserAnswer('');
    };
  
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            {grammarSections[currentSection].title}
          </h2>
        </div>
        
        <div className="space-y-6">
          {/* Navigation */}
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(grammarSections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => {
                  setCurrentSection(key);
                  setCurrentQuestionIndex(0);
                  setShowAnswer(false);
                  setUserAnswer('');
                }}
                className={`px-3 py-1 rounded ${
                  currentSection === key
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
  
          {/* Question */}
          <div className="text-center space-y-4">
            <p className="text-xl mb-4">{currentQuestion.sentence}</p>
            <div className="flex justify-center gap-2">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="border rounded p-2 w-48"
                placeholder="Type your answer..."
              />
              <button
                onClick={handleAnswerSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Check
              </button>
            </div>
          </div>
  
          {/* Feedback */}
          {showAnswer && (
            <div className="text-center space-y-2">
              {userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase() ? (
                <div className="text-green-600 font-bold">
                  Correct!
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="text-red-600 font-bold">
                    Try again!
                  </div>
                  <p className="text-gray-600">Hint: {currentQuestion.hint}</p>
                  <p className="text-sm text-gray-600">
                    Correct answer: {currentQuestion.answer}
                  </p>
                </div>
              )}
              <button
                onClick={handleNext}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next Question
              </button>
            </div>
          )}
  
          {/* Progress */}
          <div className="text-center text-sm text-gray-600">
            Question {currentQuestionIndex + 1} of {currentQuestions.length}
          </div>
        </div>
      </div>
    );
  };