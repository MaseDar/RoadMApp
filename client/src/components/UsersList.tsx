import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSeletor";
import {useActions} from "../hooks/useActions";

const UsersList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.users)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UsersList;