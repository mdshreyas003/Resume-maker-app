import React, { useState } from 'react'
import InputControl from './InputControl';

function Editior(props) {
    const sections = props.sections;
    const [actSec, setActSec] = useState(Object.keys(sections)[0])




    
  const workExpBody = (
    <div >
      <div >
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend developer"
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
          
        />
      </div>
      <div >
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
        />
      </div>
      <div >
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
        />
      </div>

      <div >
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
        />
        <InputControl
          placeholder="Line 2"
        />
        <InputControl
          placeholder="Line 3"
        />
      </div>
    </div>
  );
  const projectBody = (
    <div >
      <div>
        <InputControl
          label="Title"
          
          placeholder="Enter title eg. Chat app"
          
          />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of project"
        
          
        
      />
      <div>
        <InputControl
          label="Deployed Link"
          placeholder="Enter deployed link of project"
          
           
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
          
           
        />
      </div>
      <div>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
        />
        <InputControl
          placeholder="Line 2"
        />
        <InputControl
          placeholder="Line 3"
        />
        <InputControl
          placeholder="Line 4"
        />
      </div>
    </div>
  );
  const educationBody = (
    <div >
      <div>
        <InputControl
          label="Title"
          
          placeholder="Enter title eg. B-tech"
          
            
          
        />
      </div>
      <InputControl
        label="College/School Name"
        placeholder="Enter name of your college/school"
        
      />
      <div>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          
        />
      </div>
    </div>
  );
  const basicInfoBody = (
    <div >
      <div>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Aashu"
          
        />
        <InputControl
          label="Title"
          
          placeholder="Enter your title eg. Frontend developer"
          
            
          
        />
      </div>
      <div>
        <InputControl
          label="Linkedin Link"
          
          placeholder="Enter your linkedin profile link"
          
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your github profile link"
          
        />
      </div>
      <div>
        <InputControl
          label="Email"
          placeholder="Enter your email"
          
        />
        <InputControl
          label="Enter phone"
          placeholder="Enter your phone number"
          
        />
      </div>
    </div>
  );
  const achievementsBody = (
    <div >
      <div>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          
        />
        <InputControl
          placeholder="Line 2"
          
        />
        <InputControl
          placeholder="Line 3"
          
        />
        <InputControl
          placeholder="Line 4"
          
        />
      </div>
    </div>
  );
  const summaryBody = (
    <div >
      <InputControl
        label="Summary"
        placeholder="Enter your objective/summary"
        
      />
    </div>
  );
  const otherBody = (
    <div >
      <InputControl
        label="Other"
        placeholder="Enter something"
        
      />
    </div>
  );




    
  const generateBody = () => {
    switch (sections[actSec]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };





  return (
    <div className='flex space-x-7'>
        {Object.keys(sections).map((key) =>(
            <div className={`${'text-purple-600 cursor-pointer'} ${ actSec === key ? 'text-indigo-600': 'text-purple-600'}` }  key={key}
            onClick={()=>{setActSec(key); console.log(actSec)}}
            >
                {sections[key]}
            </div>
        ))}
        <div>
        <InputControl
          label="Title"
          placeholder="Enter section title"/>
        {generateBody()}
        </div>
        
    </div>
  )
}

export default Editior