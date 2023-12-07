import { Button } from '@chakra-ui/react';
import  { useState } from 'react';

const TextButtom = () => {
  const [displayText, setDisplayText] = useState(['Use existing content or create sets from scratch', 
  'Enable auto-grading for any assignment',
  'Receive snapshots of student progress',
  'View automated insights of assignment performance trends',
  'Build student confidence with immediate feedback',
  'Ensure student access to resources anytime'
]);

  const handleButtonClick = (text) => {
   if (text === 1) {
    setDisplayText(['Use existing content or create sets from scratch', 
    'Enable auto-grading for any assignment',
    'Receive snapshots of student progress',
    'View automated insights of assignment performance trends',
    'Build student confidence with immediate feedback',
    'Ensure student access to resources anytime'
]);
    } else if (text === 2) {
        setDisplayText(['Provide individual guidance with prompts, encouragement, and automated hints',
         'Enable students to show work so teachers better understand their thinking',
          'Access a built-in resource section with skill cards and video tutorials',
        'Empower students to check their answers to know if they are on the right track',
    'Ensure support for multiple input devices that allow for handwriting, drawing, and symbolic expressions']);
    }
  };

  return (
    
    <div style={{  width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'} }>
      <div style={{  width: '600px',height:'500px'}}>
      <div>
        <Button colorScheme="custom" color="white" bgColor="#3FB1B5"
                     rounded="full" size="md"  fontSize="22px"
                    height="45px" // Set the height of the button
                    width="200px" marginRight={'100px'} onClick={() => handleButtonClick(1)}>For educators</Button>
        <Button colorScheme="custom" color="white" bgColor="#FE5244"rounded="full" size="md" 
          height="45px" // Set the height of the button
          width="200px" fontSize="22px" onClick={() => handleButtonClick(2)}>For students</Button>
      </div>
      <br />
      <br />
      <ul >
        {displayText.map((item, index) => (
          <li style={{ fontSize: '22px' }}key={index}>{item}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default TextButtom;