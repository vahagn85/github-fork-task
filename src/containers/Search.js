import React,{useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import DataTable from 'react-data-table-component';
import {useDispatch,useSelector} from 'react-redux'
import {getRepos,resetRepo} from '../actions/repo'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Search = () => {
    let query = useQuery();
    const repoData = useSelector(state => state.repo);
    const dispatch=useDispatch();
    const columns = [
        {
            name: 'Id',
            maxWidth:'90px',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Repo Name',
            selector: 'full_name',
            maxWidth:'250px',
            sortable: true,
        },
        {
            name: 'Owner',
            selector: 'owner.login',
            width:'150px',
            sortable: true,
        },
        {
            name: 'Count star',
            selector: 'stargazers_count',
            maxWidth:'120px',
            sortable: true,
        },
        {
            name: 'Description',
            selector: 'description',
            maxWidth:'450px',
            sortable: true,
        }
    ];
    useEffect(()=>{
        dispatch(getRepos(query.get("repository"),query.get("page")));
        return ()=>{
            dispatch(resetRepo())
        }
    },[])
    return (
        <div>
            <h1 className="display-4 mb-2 text-center">Repository by <strong>{query.get("repository")}</strong></h1>
            <DataTable
                title="Movie List"
                columns={columns}
                data={repoData.allRepo.items}
                highlightOnHover
                striped
                pagination
                noHeader
            />
        </div>
    );
};

export default Search;