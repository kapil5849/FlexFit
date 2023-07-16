import React, { useState } from 'react';
import WorkoutTimer from './WorkoutTimer';
import BodyMassIndex from './BodyMassIndex';
import CalorieCalculator from './CalorieCalculator';


const HealthAnalysis = () => {
    const [checkmarks, setCheckmarks] = useState(Array(100).fill(false));

    const handleCheckmark = (index) => {
        const updatedCheckmarks = [...checkmarks];
        updatedCheckmarks[index] = !updatedCheckmarks[index];
        setCheckmarks(updatedCheckmarks);
    };

    const calculateHealthStatus = () => {
        const checkedCount = checkmarks.filter((isChecked) => isChecked).length;
        let healthStatus = '';

        if (checkedCount < 10) {
            healthStatus = 'Insufficient data for health assessment';
        } else if (checkedCount >= 10 && checkedCount < 20) {
            healthStatus = 'Average health';
        } else if (checkedCount >= 20 && checkedCount < 30) {
            healthStatus = 'Good health';
        } else if (checkedCount >= 30 && checkedCount < 40) {
            healthStatus = 'Very good health';
        } else if (checkedCount >= 40 && checkedCount < 45) {
            healthStatus = 'Excellent health';
        } else if (checkedCount >= 45 && checkedCount < 50) {
            healthStatus = 'Outstanding health: Exceptional vitality';
        } else if (checkedCount === 50) {
            healthStatus = 'Outstanding health: Peak performance';
        }

        return healthStatus;
    };


    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '400px',
                margin: '0 auto',
                padding: '20px',
                boxSizing: 'border-box',
            }}
        >
            <h3
                style={{
                    marginBottom: '10px',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                Health Analysis
            </h3>
            <p
                style={{
                    marginBottom: '10px',
                    fontSize: '1rem',
                    textAlign: 'center',
                }}
            >
                Check the boxes below to indicate which health factors you are currently prioritizing. Your health status will be calculated based on the number of checked factors.
            </p>
            <ul
                style={{
                    listStyleType: 'none',
                    padding: '0',
                    margin: '0',
                    width: '100%',
                }}
            >
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[0]}
                        onChange={() => handleCheckmark(0)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Physical activity</span>
                </li>
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[1]}
                        onChange={() => handleCheckmark(1)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Balanced diet</span>
                </li>
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[2]}
                        onChange={() => handleCheckmark(2)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Sufficient sleep</span>
                </li>
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[3]}
                        onChange={() => handleCheckmark(3)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Stress management</span>
                </li>
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[4]}
                        onChange={() => handleCheckmark(4)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Regular check-ups</span>
                </li>
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[5]}
                        onChange={() => handleCheckmark(5)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Adequate hydration</span>
                </li>
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[6]}
                        onChange={() => handleCheckmark(6)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Mental well-being</span>
                </li>
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[7]}
                        onChange={() => handleCheckmark(7)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Healthy relationships</span>
                </li>
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[8]}
                        onChange={() => handleCheckmark(8)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Limiting alcohol consumption</span>
                </li>
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[9]}
                        onChange={() => handleCheckmark(9)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>No smoking</span>
                </li>
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[10]}
                        onChange={() => handleCheckmark(10)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Stress-free environment</span>
                </li>
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[11]}
                        onChange={() => handleCheckmark(11)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Sun protection</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[12]}
                        onChange={() => handleCheckmark(12)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Regular exercise</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[13]}
                        onChange={() => handleCheckmark(13)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Proper dental hygiene</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[14]}
                        onChange={() => handleCheckmark(14)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Regular meditation or mindfulness practice</span>
                </li>
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[15]}
                        onChange={() => handleCheckmark(15)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Proper hand hygiene</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[16]}
                        onChange={() => handleCheckmark(16)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Portion control while eating</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[17]}
                        onChange={() => handleCheckmark(17)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Adequate vitamin and mineral intake</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[18]}
                        onChange={() => handleCheckmark(18)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Maintaining a healthy weight</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[19]}
                        onChange={() => handleCheckmark(19)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Avoiding excessive sugar consumption</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[20]}
                        onChange={() => handleCheckmark(20)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Maintaining good posture</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[21]}
                        onChange={() => handleCheckmark(21)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Regular health screenings</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[22]}
                        onChange={() => handleCheckmark(22)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Adequate fiber intake</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[23]}
                        onChange={() => handleCheckmark(23)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Avoiding processed foods</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[24]}
                        onChange={() => handleCheckmark(24)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Maintaining good oral health</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[25]}
                        onChange={() => handleCheckmark(25)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Limiting processed meat consumption</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[26]}
                        onChange={() => handleCheckmark(26)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Adequate sunlight exposure for vitamin D</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[27]}
                        onChange={() => handleCheckmark(27)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Maintaining a positive mindset</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[28]}
                        onChange={() => handleCheckmark(28)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Practicing good hygiene habits</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[29]}
                        onChange={() => handleCheckmark(29)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Limiting caffeine intake</span>
                </li>
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[30]}
                        onChange={() => handleCheckmark(30)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Mindful eating</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[31]}
                        onChange={() => handleCheckmark(31)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Regular stretching and flexibility exercises</span>
                </li>

                {/* Add more li tags here */}
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[32]}
                        onChange={() => handleCheckmark(32)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Avoiding excessive salt intake</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[33]}
                        onChange={() => handleCheckmark(33)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Regular dental check-ups</span>
                </li>

                {/* Add more li tags here */}

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[34]}
                        onChange={() => handleCheckmark(34)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Mind-body relaxation techniques (e.g., yoga, meditation)</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[35]}
                        onChange={() => handleCheckmark(35)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Maintaining a gratitude journal</span>
                </li>

                {/* Add more li tags here */}

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[36]}
                        onChange={() => handleCheckmark(36)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Avoiding excessive caffeine consumption</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[37]}
                        onChange={() => handleCheckmark(37)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Regular eye care (e.g., eye exams, protecting from screens)</span>
                </li>

                {/* Add more li tags here */}

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[38]}
                        onChange={() => handleCheckmark(38)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Maintaining proper posture</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[39]}
                        onChange={() => handleCheckmark(39)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Building and maintaining strong social connections</span>
                </li>

                {/* Add more li tags here */}

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[40]}
                        onChange={() => handleCheckmark(40)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Avoiding excessive sugar consumption</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[41]}
                        onChange={() => handleCheckmark(41)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Taking breaks and rest during work/study</span>
                </li>

                {/* Add more li tags here */}

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[42]}
                        onChange={() => handleCheckmark(42)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Avoiding excessive screen time</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[43]}
                        onChange={() => handleCheckmark(43)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Regularly challenging the mind (e.g., puzzles, learning new skills)</span>
                </li>

                {/* Add more li tags here */}

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[44]}
                        onChange={() => handleCheckmark(44)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Using proper lifting techniques</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[45]}
                        onChange={() => handleCheckmark(45)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Maintaining a healthy work-life balance</span>
                </li>

                {/* Add more li tags here */}

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[46]}
                        onChange={() => handleCheckmark(46)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Regularly practicing deep breathing exercises</span>
                </li>

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[47]}
                        onChange={() => handleCheckmark(47)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Engaging in hobbies and recreational activities</span>
                </li>

                {/* Add more li tags here */}

                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[48]}
                        onChange={() => handleCheckmark(48)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Maintaining a positive mindset</span>
                </li>
                <li
                    style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checkmarks[49]}
                        onChange={() => handleCheckmark(49)}
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ flex: '1' }}>Wake up early in the morning</span>
                </li>
            </ul>
            <p
                style={{
                    marginTop: '10px',
                    fontSize: '1.2rem',
                    textAlign: 'center',
                }}
            >
                Your health status: <strong>{calculateHealthStatus()}</strong>
            </p>
            <WorkoutTimer/>
            <BodyMassIndex/>
            <CalorieCalculator/>
        </div>
    );
};

export default HealthAnalysis;

