import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import SearchForm from '../components/SearchForm'

const Home = () => {
    const history=useHistory();
    const [value,setValue] = useState({userName:'', repoName:''});
    const {userName,repoName}=value;
    const handleChange =(name)=>(ev)=>{
        setValue({ ...value,[name]:ev.target.value})
    }
    const handleSearch=()=>{
        const location = {
            pathname: '/results',
            state: { userName,repoName,transaction:true}
        }
        history.push(location)
    }
    return (
        <div>
            <h1 className="display-4 mb-2 text-center">WELCOME</h1>
             <SearchForm userName={userName}
                        repoName={repoName}
                        handleChange={handleChange}
                        handleSearch={handleSearch}
            />
        </div>
    );
};

export default Home;