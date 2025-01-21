const EnglishPractice = () => {
  const [currentSection, setCurrentSection] = React.useState('present-simple');
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [userAnswer, setUserAnswer] = React.useState('');

  const grammarSections = {
    'present-simple': {
      title: 'Present Simple',
      questions: [
        { sentence: 'She ___ (work) in a hospital.', answer: 'works', hint: 'Use third person singular (-s)' },
        { sentence: 'They ___ (play) football every weekend.', answer: 'play', hint: 'Base form for plural subjects' },
        { sentence: 'I ___ (study) English every day.', answer: 'study', hint: 'Base form for "I"' },
        { sentence: 'The sun ___ (rise) in the east.', answer: 'rises', hint: 'Third person singular for natural facts' },
        { sentence: 'My parents ___ (live) in London.', answer: 'live', hint: 'Base form for plural subjects' },
        { sentence: 'He ___ (teach) mathematics.', answer: 'teaches', hint: 'Third person singular (-es) after ch' },
        { sentence: 'Water ___ (boil) at 100 degrees Celsius.', answer: 'boils', hint: 'Third person singular for scientific facts' },
        { sentence: 'The shops ___ (close) at 9 PM.', answer: 'close', hint: 'Base form for plural subjects' },
        { sentence: 'My sister ___ (go) to university.', answer: 'goes', hint: 'Third person singular (-es) after o' },
        { sentence: 'We ___ (have) lunch at noon.', answer: 'have', hint: 'Base form for plural subjects' },
        { sentence: 'The baby ___ (cry) a lot at night.', answer: 'cries', hint: 'Third person singular (-es) after y' },
        { sentence: 'You ___ (speak) English very well.', answer: 'speak', hint: 'Base form for "you"' },
        { sentence: 'The train ___ (leave) at 8 AM.', answer: 'leaves', hint: 'Third person singular for schedules' },
        { sentence: 'Birds ___ (fly) south in winter.', answer: 'fly', hint: 'Base form for plural subjects' },
        { sentence: 'My dog ___ (love) to play fetch.', answer: 'loves', hint: 'Third person singular (-s)' },
        { sentence: 'The students ___ (write) essays weekly.', answer: 'write', hint: 'Base form for plural subjects' },
        { sentence: 'Time ___ (fly) when you\'re having fun.', answer: 'flies', hint: 'Third person singular for sayings' },
        { sentence: 'She ___ (watch) TV every evening.', answer: 'watches', hint: 'Third person singular (-es) after ch' },
        { sentence: 'They ___ (meet) every Monday.', answer: 'meet', hint: 'Base form for plural subjects' },
        { sentence: 'The Earth ___ (rotate) around the Sun.', answer: 'rotates', hint: 'Third person singular for scientific facts' }
      ]
    },
    'past-simple': {
      title: 'Past Simple',
      questions: [
        { sentence: 'We ___ (go) to the beach last summer.', answer: 'went', hint: 'Irregular past of go' },
        { sentence: 'She ___ (buy) a new car last month.', answer: 'bought', hint: 'Irregular past of buy' },
        { sentence: 'They ___ (eat) dinner at 8 PM last night.', answer: 'ate', hint: 'Irregular past of eat' },
        { sentence: 'I ___ (finish) my homework yesterday.', answer: 'finished', hint: 'Regular verb: add -ed' },
        { sentence: 'He ___ (take) the bus to work.', answer: 'took', hint: 'Irregular past of take' },
        { sentence: 'The movie ___ (start) at 7 PM.', answer: 'started', hint: 'Regular verb: add -ed' },
        { sentence: 'We ___ (see) a great show last night.', answer: 'saw', hint: 'Irregular past of see' },
        { sentence: 'They ___ (move) to Paris last year.', answer: 'moved', hint: 'Regular verb: add -ed' },
        { sentence: 'I ___ (read) an interesting book.', answer: 'read', hint: 'Irregular past of read' },
        { sentence: 'She ___ (speak) to her mother.', answer: 'spoke', hint: 'Irregular past of speak' },
        { sentence: 'The children ___ (play) in the park.', answer: 'played', hint: 'Regular verb: add -ed' },
        { sentence: 'He ___ (write) a letter to his friend.', answer: 'wrote', hint: 'Irregular past of write' },
        { sentence: 'The dog ___ (bark) all night.', answer: 'barked', hint: 'Regular verb: add -ed' },
        { sentence: 'We ___ (drink) coffee this morning.', answer: 'drank', hint: 'Irregular past of drink' },
        { sentence: 'They ___ (study) for the test.', answer: 'studied', hint: 'Regular verb: y→i, add -ed' },
        { sentence: 'I ___ (lose) my keys yesterday.', answer: 'lost', hint: 'Irregular past of lose' },
        { sentence: 'She ___ (clean) her room.', answer: 'cleaned', hint: 'Regular verb: add -ed' },
        { sentence: 'The train ___ (arrive) late.', answer: 'arrived', hint: 'Regular verb: add -ed' },
        { sentence: 'He ___ (sleep) for eight hours.', answer: 'slept', hint: 'Irregular past of sleep' },
        { sentence: 'They ___ (make) a delicious dinner.', answer: 'made', hint: 'Irregular past of make' }
      ]
    },
    'present-progressive': {
      title: 'Present Progressive',
      questions: [
        { sentence: 'They ___ (swim) in the pool right now.', answer: 'are swimming', hint: 'Use "are" + verb-ing' },
        { sentence: 'She ___ (read) a book at the moment.', answer: 'is reading', hint: 'Use "is" + verb-ing' },
        { sentence: 'I ___ (cook) dinner right now.', answer: 'am cooking', hint: 'Use "am" + verb-ing' },
        { sentence: 'The baby ___ (sleep) peacefully.', answer: 'is sleeping', hint: 'Use "is" + verb-ing' },
        { sentence: 'We ___ (watch) a movie.', answer: 'are watching', hint: 'Use "are" + verb-ing' },
        { sentence: 'He ___ (study) for his exam.', answer: 'is studying', hint: 'Use "is" + verb-ing' },
        { sentence: 'They ___ (play) tennis.', answer: 'are playing', hint: 'Use "are" + verb-ing' },
        { sentence: 'The sun ___ (shine) brightly.', answer: 'is shining', hint: 'Use "is" + verb-ing' },
        { sentence: 'I ___ (work) on my project.', answer: 'am working', hint: 'Use "am" + verb-ing' },
        { sentence: 'She ___ (dance) beautifully.', answer: 'is dancing', hint: 'Use "is" + verb-ing' },
        { sentence: 'The children ___ (do) their homework.', answer: 'are doing', hint: 'Use "are" + verb-ing' },
        { sentence: 'It ___ (rain) outside.', answer: 'is raining', hint: 'Use "is" + verb-ing' },
        { sentence: 'We ___ (have) lunch.', answer: 'are having', hint: 'Use "are" + verb-ing' },
        { sentence: 'The dog ___ (bark) at someone.', answer: 'is barking', hint: 'Use "is" + verb-ing' },
        { sentence: 'They ___ (learn) English.', answer: 'are learning', hint: 'Use "are" + verb-ing' },
        { sentence: 'He ___ (fix) his car.', answer: 'is fixing', hint: 'Use "is" + verb-ing' },
        { sentence: 'The phone ___ (ring).', answer: 'is ringing', hint: 'Use "is" + verb-ing' },
        { sentence: 'I ___ (wait) for the bus.', answer: 'am waiting', hint: 'Use "am" + verb-ing' },
        { sentence: 'She ___ (paint) a picture.', answer: 'is painting', hint: 'Use "is" + verb-ing' },
        { sentence: 'The students ___ (take) a test.', answer: 'are taking', hint: 'Use "are" + verb-ing' }
      ]
    },
    'wh-questions': {
      title: 'WH Questions',
      questions: [
        { sentence: '___ does she live? (where)', answer: 'Where', hint: 'Ask about location' },
        { sentence: '___ are you studying English? (why)', answer: 'Why', hint: 'Ask about reason' },
        { sentence: '___ is coming to the party? (who)', answer: 'Who', hint: 'Ask about person' },
        { sentence: '___ did you finish your homework? (when)', answer: 'When', hint: 'Ask about time' },
        { sentence: '___ book are you reading? (which)', answer: 'Which', hint: 'Ask about choice' },
        { sentence: '___ does it cost? (how much)', answer: 'How much', hint: 'Ask about price' },
        { sentence: '___ are you feeling? (how)', answer: 'How', hint: 'Ask about manner' },
        { sentence: '___ is your favorite color? (what)', answer: 'What', hint: 'Ask about thing' },
        { sentence: '___ people were at the party? (how many)', answer: 'How many', hint: 'Ask about quantity' },
        { sentence: '___ did you go to the store? (when)', answer: 'When', hint: 'Ask about time' },
        { sentence: '___ is your best friend? (who)', answer: 'Who', hint: 'Ask about person' },
        { sentence: '___ do you live? (where)', answer: 'Where', hint: 'Ask about location' },
        { sentence: '___ are you late? (why)', answer: 'Why', hint: 'Ask about reason' },
        { sentence: '___ language do you speak? (what)', answer: 'What', hint: 'Ask about thing' },
        { sentence: '___ is the weather like? (how)', answer: 'How', hint: 'Ask about condition' },
        { sentence: '___ old are you? (how)', answer: 'How', hint: 'Ask about age' },
        { sentence: '___ do you go to school? (where)', answer: 'Where', hint: 'Ask about location' },
        { sentence: '___ wrote this letter? (who)', answer: 'Who', hint: 'Ask about person' },
        { sentence: '___ time is it? (what)', answer: 'What', hint: 'Ask about time' },
        { sentence: '___ tall is he? (how)', answer: 'How', hint: 'Ask about measurement' }
      ]
    },
    'future-simple': {
      title: 'Future Simple',
      questions: [
        { sentence: 'I ___ (go) to Paris next summer.', answer: 'will go', hint: 'Use "will" + base form' },
        { sentence: 'They ___ (arrive) tomorrow morning.', answer: 'will arrive', hint: 'Use "will" + base form' },
        { sentence: 'It ___ (rain) tomorrow.', answer: 'will rain', hint: 'Use "will" + base form' },
        { sentence: 'She ___ (teach) English next year.', answer: 'will teach', hint: 'Use "will" + base form' },
        { sentence: 'We ___ (move) to London soon.', answer: 'will move', hint: 'Use "will" + base form' },
        { sentence: 'The party ___ (start) at 8 PM.', answer: 'will start', hint: 'Use "will" + base form' },
        { sentence: 'He ___ (buy) a new car next month.', answer: 'will buy', hint: 'Use "will" + base form' },
        { sentence: 'They ___ (visit) us next week.', answer: 'will visit', hint: 'Use "will" + base form' },
        { sentence: 'I ___ (call) you tomorrow.', answer: 'will call', hint: 'Use "will" + base form' },
        { sentence: 'The movie ___ (begin) at 7 PM.', answer: 'will begin', hint: 'Use "will" + base form' },
        { sentence: 'She ___ (graduate) next spring.', answer: 'will graduate', hint: 'Use "will" + base form' },
        { sentence: 'We ___ (travel) to Spain.', answer: 'will travel', hint: 'Use "will" + base form' },
        { sentence: 'The train ___ (leave) in 10 minutes.', answer: 'will leave', hint: 'Use "will" + base form' },
        { sentence: 'They ___ (finish) the project soon.', answer: 'will finish', hint: 'Use "will" + base form' },
        { sentence: 'I ___ (help) you with that.', answer: 'will help', hint: 'Use "will" + base form' },
        { sentence: 'He ___ (attend) the meeting.', answer: 'will attend', hint: 'Use "will" + base form' },
        { sentence: 'The sun ___ (set) at 6 PM.', answer: 'will set', hint: 'Use "will" + base form' },
        { sentence: 'She ___ (send) the email later.', answer: 'will send', hint: 'Use "will" + base form' },
        { sentence: 'We ___ (meet) at the cafe.', answer: 'will meet', hint: 'Use "will" + base form' },
        { sentence: 'They ___ (watch) the game tonight.', answer: 'will watch', hint: 'Use "will" + base form' }
      ]
    },
    'present-perfect': {
      title: 'Present Perfect',
      questions: [
        { sentence: 'I ___ (never/be) to Japan.', answer: 'have never been', hint: 'Use "have" + never + past participle' },
        { sentence: 'She ___ (just/finish) her homework.', answer: 'has just finished', hint: 'Use "has" + just + past participle' },
        { sentence: 'They ___ (already/eat) lunch.', answer: 'have already eaten', hint: 'Use "have" + already + past participle' },
        { sentence: 'We ___ (live) here since 2010.', answer: 'have lived', hint: 'Use "have" + past participle' },
        { sentence: 'He ___ (visit) Paris twice.', answer: 'has visited', hint: 'Use "has" + past participle' },
        { sentence: 'I ___ (not/see) her today.', answer: 'have not seen', hint: 'Use "have not" + past participle' },
        { sentence: 'They ___ (work) hard this week.', answer: 'have worked', hint: 'Use "have" + past participle' },
        { sentence: 'She ___ (always/want) to be a doctor.', answer: 'has always wanted', hint: 'Use "has always" + past participle' },
        { sentence: 'We ___ (know) each other for years.', answer: 'have known', hint: 'Use "have" + past participle' },
        { sentence: 'The movie ___ (just/start).', answer: 'has just started', hint: 'Use "has just" + past participle' },
        { sentence: 'I ___ (already/read) that book.', answer: 'have already read', hint: 'Use "have already" + past participle' },
        { sentence: 'They ___ (not/arrive) yet.', answer: 'have not arrived', hint: 'Use "have not" + past participle' },
        { sentence: 'He ___ (learn) a lot this semester.', answer: 'has learned', hint: 'Use "has" + past participle' },
        { sentence: 'We ___ (be) to London twice.', answer: 'have been', hint: 'Use "have" + been' },
        { sentence: 'She ___ (never/try) sushi.', answer: 'has never tried', hint: 'Use "has never" + past participle' },
        { sentence: 'I ___ (just/receive) your email.', answer: 'have just received', hint: 'Use "have just" + past participle' },
        { sentence: 'They ___ (study) English for 5 years.', answer: 'have studied', hint: 'Use "have" + past participle' },
        { sentence: 'He ___ (already/leave) the office.', answer: 'has already left', hint: 'Use "has already" + past participle' },
        { sentence: 'We ___ (not/hear) from him lately.', answer: 'have not heard', hint: 'Use "have not" + past participle' },
        { sentence: 'The train ___ (just/arrive).', answer: 'has just arrived', hint: 'Use "has just" + past participle' }
      ]
    },
    'modal-verbs': {
      title: 'Modal Verbs',
      questions: [
        { sentence: 'You ___ (must/study) harder to pass.', answer: 'must study', hint: 'Use "must" + base form' },
        { sentence: 'She ___ (can/speak) three languages.', answer: 'can speak', hint: 'Use "can" + base form' },
        { sentence: 'We ___ (should/leave) now.', answer: 'should leave', hint: 'Use "should" + base form' },
        { sentence: 'They ___ (might/come) to the party.', answer: 'might come', hint: 'Use "might" + base form' },
        { sentence: 'I ___ (would/like) to help you.', answer: 'would like', hint: 'Use "would" + like' },
        { sentence: 'He ___ (may/be) late today.', answer: 'may be', hint: 'Use "may" + be' },
        { sentence: 'You ___ (should/not/eat) so fast.', answer: 'should not eat', hint: 'Use "should not" + base form' },
        { sentence: 'They ___ (must/finish) by tomorrow.', answer: 'must finish', hint: 'Use "must" + base form' },
        { sentence: 'She ___ (could/help) us tomorrow.', answer: 'could help', hint: 'Use "could" + base form' },
        { sentence: 'We ___ (may/need) more time.', answer: 'may need', hint: 'Use "may" + base form' },
        { sentence: 'I ___ (can/not/come) to the meeting.', answer: 'cannot come', hint: 'Use "cannot" + base form' },
        { sentence: 'He ___ (should/study) more.', answer: 'should study', hint: 'Use "should" + base form' },
        { sentence: 'You ___ (must/not/forget) your passport.', answer: 'must not forget', hint: 'Use "must not" + base form' },
        { sentence: 'They ___ (would/prefer) tea.', answer: 'would prefer', hint: 'Use "would" + base form' },
        { sentence: 'She ___ (might/not/know) the answer.', answer: 'might not know', hint: 'Use "might not" + base form' },
        { sentence: 'We ___ (can/help) you move.', answer: 'can help', hint: 'Use "can" + base form' },
        { sentence: 'I ___ (should/have) studied harder.', answer: 'should have', hint: 'Use "should" + have' },
        { sentence: 'He ___ (must/be) tired after work.', answer: 'must be', hint: 'Use "must" + be' },
        { sentence: 'They ___ (would/like) to join us.', answer: 'would like', hint: 'Use "would" + like' },
        { sentence: 'You ___ (could/try) again later.', answer: 'could try', hint: 'Use "could" + base form' }
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

export default EnglishPractice;