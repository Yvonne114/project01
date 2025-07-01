import '../css/Welcome.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

//const userAccount = localStorage.getItem('userAccount');
//console.log(userAccount);


const Welcome = () => {
	const navigate = useNavigate();

	//const userAccount = localStorage.getItem('userAccount');
  //const [provides, setProvides] = useState([]);
  //const [selectedStatus, setSelectedStatus] = useState({}); 

	const handleClick = () => {
    	navigate('/Check');
  	};
  	const handleSearch = () => {
    	navigate('/Nlottery');
  	};

  	const handleCalendar = () => {
    	navigate('/Mcalendar');
  	};
	return (
		
		<div className="welcome-text">

        	<h4>審核住宿</h4>
        	<button onClick={handleClick} className="welcome-but">Check</button>
        	<br />
        	<br />
        	<h4>審核預定</h4>
        	<button onClick={handleSearch} className="welcome-but">Check</button>
        	<br />
        	
      	</div>
	)
	


};


export default Welcome;