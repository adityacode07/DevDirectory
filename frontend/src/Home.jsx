import { useEffect, useState } from 'react';
import Axios from 'axios';
import Login from './pages/Login';
import Posts from './pages/Posts';
import { ThemeProvider } from './components/ui/theme-provider';
import Navbarz from './pages/Navbarz';

function Home() {
  const [allfriends, setAllfriends] = useState([]);

  const fetchFriends = () => {
    Axios.get('https://devdirectory-backend.onrender.com/read')
      .then((response) => {
        setAllfriends(response.data);
      })
      .catch(() => {
        alert('Error in fetching');
      });
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
        <div className="app-container">
          <Navbarz />
          <div className="main-content">
            <div className="posts">
              {allfriends.map((val, key) => (
                <div key={key}>
                  <Posts
                    name={val.name}
                    resourcelink={val.resourcelink}
                    description={val.description}
                    imagelink={val.imagelink}
                  />
                </div>
              ))}
            </div>
            <div className="sidebar">
              <Login fetchFriends={fetchFriends} />
            </div>
          </div>
        </div>
    </ThemeProvider>
  );
  
}

export default Home;
