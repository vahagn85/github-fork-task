import React,{useEffect,useState} from 'react';
import {Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {getForks,resetForks} from '../actions/forks'
import {getUserRepos} from '../actions/repo'
import {useLocation,useHistory} from 'react-router-dom'
import DataTable from 'react-data-table-component';
import SearchForm from '../components/SearchForm'

const Results = () => {
    const forks = useSelector(state => state.forks);
    const repoFirstName = useSelector(state => state.repo);
    const dispatch=useDispatch();
    const location = useLocation();
    const history = useHistory();
    const [value,setValue] = useState({userName:'', repoName:'' });
    const [search,setSearch] = useState(false);
    const [resultPage,setResultPage] = useState(false);
    const {userName,repoName}=value;
    const handleChange =(name)=>(ev)=>{
        setValue({ ...value, [name]:ev.target.value})
    }
    const handleSearch=()=>{
        setSearch(true)
        dispatch(getForks(userName,repoName))
    }
    useEffect(()=>{
        if(location.state && location.state.transaction){
            let state = { ...history.location.state };
            delete state.transaction;
            history.replace({ ...history.location, state });
            setValue({
                userName: location.state.userName,
                repoName: location.state.repoName,
            })
            setSearch(true)
            dispatch(getForks(location.state.userName,location.state.repoName))
        }
        if(repoFirstName.repoName && resultPage){
            history.push({
                pathname:`/search`,
                search: `?page=1&repository=${repoFirstName.repoName}`,
            })
        }
        return ()=>{
            setResultPage(false)
            dispatch(resetForks())
        }
    },[repoFirstName.repoName])
    const getOwnerName=async (name)=>{
       dispatch(getUserRepos(name));
        setResultPage(true)
    }
    const columns = [
        {
            name: 'Repo Name',
            selector: 'full_name',
            sortable: true,
        },
        {
            name: 'Owner',
            selector: 'owner.login',
            sortable: true,
        },
        {
            name: 'Count star',
            selector: 'stargazers_count',
            maxWidth:'120px',
            sortable: true,
        },
        {
            name: 'Repo fork Link',
            button: true,
            width: '130px',
            cell: row => (
               <div className="d-flex">
                    <Button onClick={()=>getOwnerName(row.owner.login)} variant="success" size="sm">Link</Button>
                </div>)
        }
    ];
    return (
        <div>
            <h1 className="display-4 mb-2 text-center">Results</h1>
            <SearchForm userName={userName}
                        repoName={repoName}
                        handleChange={handleChange}
                        handleSearch={handleSearch}
            />
            <div className="mt-2">
                {
                    search && !forks.error && (
                        <DataTable
                            columns={columns}
                            data={forks.forks}
                            highlightOnHover
                            striped
                            pagination
                            noHeader
                        />
                    )
                }
                {(!forks.loading && forks.error) && <p className="text-center">{forks.error.msg}. Please try again</p>}
            </div>
        </div>
    );
};

export default Results;